import { svgIconCodeEnum } from '../../model/covid/icons';
export interface I18nLang {
    code: string;
    language: string;
    icon: svgIconCodeEnum
}

const languageList: Array<I18nLang> = new Array<I18nLang>(
    {
        code: 'en',
        language: 'English',
        icon: svgIconCodeEnum.uk
    },
    {
        code: 'hi',
        language: 'Hindi',
        icon: svgIconCodeEnum.india
    }
);

export const supportLanguageList = languageList;
