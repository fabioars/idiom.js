import idiom from '../src';

describe('idiom.js', () => {
    describe('Smoke tests', () => {
        it('should build a language', () => {
            const i = idiom({
                default: {},
            })('default');
    
            expect(i).toHaveProperty('currentLanguage');
            expect(i).toHaveProperty('languages');
            expect(i).toHaveProperty('text');
        });
    });

    describe('Unit Tests', () => {

        var lang = null;

        beforeEach(() => {
            lang = idiom({
                default: {
                    'hello': 'Hello!'
                },
                'pt-BR': {
                    'hello': 'Olá!'
                }
            });
        })
        it('should throw an exception if no default language registred', () => {
            expect(() => idiom({}))
                .toThrow('[idiom.js] You need to set a default language');
        });

        it('should return a function when register a language', () => {
            expect(typeof lang).toBe('function')
        });

        it('should return the correct value of a key', () => {
            expect(lang('pt-BR').text('hello')).toEqual('Olá!');
            expect(lang('default').text('hello')).toEqual('Hello!');
        });

        it('should throw an exception if no key found', () => {
            expect(() => lang().text('bye')).toThrow('[idiom.js] Any match for key: \'bye\'.')
        });

        it('should extends a language', () => {
            lang('pt-BR').extends({
                bye: 'Tchau!'
            });

            expect(lang('pt-BR').text('bye')).toEqual('Tchau!');
        });

        it('should create another language in runtime', () => {
            lang().extends({
                hello: '¡Hola!'
            }, 'es');

            expect(lang('es').text('hello')).toEqual('¡Hola!');
        });

        it('should return a text from default language if language not found', () => {
            expect(lang('es').text('hello')).toEqual('Hello!');
        })
    });
});

