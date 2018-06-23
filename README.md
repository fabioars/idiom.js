# idiom.js
Translate your JS applications

[![Build Status](https://travis-ci.org/fabioars/idiom.js.svg?branch=master)](https://travis-ci.org/fabioars/idiom.js)

## Getting Started

### Installing

You can use yarn or npm to add the idiom.js to your project

```
$ yarn add idiom.js
```

or using npm:

```
$ npm install --save idiom.js
```

or download from CDN:
* [DOWNLOAD](https://unpkg.com/idiom.js@1.0.0/dist/idiom.min.js) - UNPKG minified version
* [DOWNLOAD](https://unpkg.com/idiom.js@1.0.0/dist/idiom.js) - UNPKG normal version


### Usage

#### If you use JS Modules

After that you need to create the language files

```js
// ECMAScript 6
import idiom from 'idiom.js';

export default idiom({
    'default': {
        'hello': 'Hello!',
        'bye': 'Bye!'
    },
    'pt-BR': {
        'hello': 'Olá!',
        'bye': 'Tchau!'
    }
})(window.navigator.language);

// Common Modules
const idiom require('idiom.js');

module.extends =  idiom({
    'default': {
        'hello': 'Hello!',
        'bye': 'Bye!'
    },
    'pt-BR': {
        'hello': 'Olá!',
        'bye': 'Tchau!'
    }
})(window.navigator.language);
```

#### In Browser

Import the `idiom.min.js` file to your browser

```html
<script src="/path/to/idiom.min.js"></script>

<script>
    var lang = idiom({
        'default': {
            'hello': 'Hello!',
            'bye': 'Bye!'
        },
        'pt-BR': {
            'hello': 'Olá!',
            'bye': 'Tchau!'
        }
    })(window.navigator.language);
</script>
```

After that, you can use `text` function to get that correct string

```js
    // returns 'Olá!' if in pt-BR and 'Hello!' if not
    lang.text('hello'); 
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Fabio Soares** - *Initial work* - [fabioars](https://github.com/fabioars)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
