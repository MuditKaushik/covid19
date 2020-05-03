FROM node:11.15.0-alpine as covid19_build
ARG dir=/covid19
RUN mkdir -p ${dir}
WORKDIR ${dir}

COPY ./package.json ${dir}/
COPY ./tsconfig.json ${dir}/
COPY ./webpack.config.js ${dir}/
COPY ./nginx ${dir}/nginx
COPY ./src ${dir}/src
COPY ./webpack-config ${dir}/webpack-config/

RUN npm install
RUN npm rebuild node-sass
RUN npm run prod

FROM nginx
EXPOSE 80
COPY --from=covid19_build ./covid19/nginx/api.conf /etc/nginx/
COPY --from=covid19_build ./covid19/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=covid19_build ./covid19/docs /usr/share/nginx/html
