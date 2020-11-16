# Laravel Mix Webp

## Usage

First, install the extension.

```
npm install laravel-mix-webp --save-dev
```

Then, add `ImageWebp` function on `webpack.mix.js`. like so:

```js
let mix = require('laravel-mix')

require('laravel-mix-webp')

mix
  .ImageWebp({
    from: 'resources/assets/images',
    to: 'public/assets/images',
  })
```

## Options

### Default
```
{
     disable: false,
     from: 'resources',
     to: 'public',
     imageminWebpOptions: {
         quality: 50
     },
 }

```
### Only runs on production build
```
{
    disable: process.env.NODE_ENV !== 'production',
}
```