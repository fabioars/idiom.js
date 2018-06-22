
export default languages => {
    if(!languages.default) {
        throw '[idiom.js] You need to set a default language';
    }

    return (currentLang = 'default') => ({
        get currentLanguage() {
            return (!languages[currentLang]) ? 'default' : currentLang;
        },
        get languages() {
            return Object.keys(languages);
        },
        extends(lib, name = this.currentLanguage) {
            if(!languages[name]) {
                languages[name] = { ...lib };
            } else {
                languages[name] = {
                    ...languages[name],
                    ...lib
                };
            }
        },
        text(key) {
            const lib = languages[this.currentLanguage];
            
            if(!lib[key]) {
                throw `[idiom.js] Any match for key: '${key}'.`;
            }

            return lib[key];
        }
    });
};
