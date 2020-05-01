export interface I18nLang {
    code: string;
    language: string;
}

const languageList: Array<I18nLang> = new Array<I18nLang>(
    {
        code: 'en',
        language: 'English'
    },
    {
        code: 'hi',
        language: 'Hindi'
    }
);

export const languageSupport = languageList;
