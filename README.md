# What is Bionic Reading?

Bionic reading is a new method for reading better, faster and more
focused.<br />
It was developed by [Renato Casutt](https://www.linkedin.com/in/renato-casutt) a typographic designer from Switzerland. <br />
It aims to highlight text when an artificial fixation points are used to guid eyes. The Bionic Reading combines fixation points and opacity to change the visual surface of the content.
It is very helpful for people with dyslexia while their reading and
learning process.

## Bionic Read Help Web Component

It is a web component written in pure javascript and without any
dependencies. <br />
It is extended from HTML element. It can be used like below:

```html
<wc-bionic-read-help>...</wc-bionic-read-help>
```

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

## For Developper

Get a copy of the project.

```bash
# go to the project folder
# with yarn
yarn
yarn run dev

# with npm
npm i
npm run dev
```
