# &lt;wc-bionic-read-help/&gt;

It is a web component written in pure javascript and without any
dependencies. <br />
It helps to read better, faster and more focused based on the **Bionic Reading method**

[![npm version](https://badgen.net/npm/v/@k4ys4r/wc-bionic-read-help)](https://www.npmjs.com/package/@k4ys4r/wc-bionic-read-help)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@k4ys4r/wc-bionic-read-help)



## What is Bionic Reading?

Bionic reading is a new method for reading better, faster and more
focused.<br />
It was developed by [Renato Casutt](https://www.linkedin.com/in/renato-casutt) a typographic designer from Switzerland. <br />
It aims to highlight text when an artificial fixation points are used to guid eyes. The Bionic Reading combines fixation points and opacity to change the visual surface of the content.
It is very helpful for people with dyslexia while their reading and
learning process.

## Installation

```bash
# with npm
npm i @k4ys4r/wc-bionic-read-help

#with yarn
yarn add @k4ys4r/wc-bionic-read-help
```

Once installed, import it in your application:

```js
import "@k4ys4r/wc-bionic-read-help";

//To get access to the Class properties
import BionicReadHelp from "@k4ys4r/wc-bionic-read-help";
BionicReadHelp.tagName;
BionicReadHelp.attributes;
```

## Usage

1. Make sure you've add `wc-bionic-read-help` to your app through NPM. See [Installation](#installation) for more details.
2. Add `wc-bionic-read-help` to your app and placed it at the top.
3. Then it can be used like below:

```html
<wc-bionic-read-help>...</wc-bionic-read-help>
```

### Usage of `<wc-bionic-read-help/>` attributes

There is four additional attributes that can be used to adjust the opacity, the algorithm, the text color and the bionic mode type:

- **brh-opacity** : defines the opacity value which can be between 0 and 1 (default value is _0.75_).
- **brh-color-text** : defines the text color, it is in HEX format (default value is _#000_).
- **brh-type** : defines the type mode, static or interactive (default value is _static_ ).
- **brh-algorithm** : defines the algorithm to highlight text (default value is _[-1, 0.25, 0.25, 0.35, 0.5, 0.65]_).

These attributes can be used as below:

```html
<wc-bionic-read-help
  brh-opacity="0.75"
  brh-type="interactive"
  brh-algorithm="-1 0.5 0.5 0.75 0.65"
  brh-text-color="#000"
>
  ...
</wc-bionic-read-help>
```

The value of algorithm is positive numbers separated by white-space. Each value will be used to set the level of each word highlighting respecting to its length. the value of -1 is used to ignore this process.
Here is an example:

```html
<wc-bionic-read-help brh-algorithm="-1 0.5 1 0.5">
  Bionic read help web component is awesome
</wc-bionic-read-help>
```

That results:

<center><b>Bio</b><span style="opacity:0.75">nic</span> <b>re</b><span style="opacity:0.75">ad</span> <b>he</b><span style="opacity:0.75">lp</span> <b>web</b><span style="opacity:0.75"></span> <b>compo</b><span style="opacity:0.75">nent</span> <b>i</b><span style="opacity:0.75">s</span> <b>awes</b><span style="opacity:0.75">ome</span></center>

<br/>

The result shows that the values of algorithm define the highlighted word based on their length.
Word with length of :

- 1: will be ignored (algorithm value is -1)
- 2: will be half highlighted (algorithm value is 0.5)
- 3: will be totally highlighted (algorithm value is 1)
- 4 and above: will be half highlighted (algorithm value is 0.5)

For more information and to experiment bionic reding with your own text [go here](https://k4ys4r.github.io/bionic-read-help/).

### Example

- [Usage with React][wc-bionic-read-help-react]
- [Usage with Vue 3][wc-bionic-read-help-vue]
- [Or try it here][home-page]

[wc-bionic-read-help-react]: https://stackblitz.com/edit/wc-bionic-read-help-reactjs?file=src%2FApp.jsx
[wc-bionic-read-help-vue]: https://stackblitz.com/edit/wc-bionic-read-help-vuejs?file=src%2FApp.vue
[home-page]: https://k4ys4r.github.io/bionic-read-help/

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 😊

## License

[MIT License](LICENSE)
