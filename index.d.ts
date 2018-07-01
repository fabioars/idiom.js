
const idiom: (languages: object) => (currentLang?: string) => { 
    readonly currentLanguage: string;
    readonly languages: string[];
    extends(lib: object, name ?: string): void;
    text(key: string): string;
};

export = idiom;
