# Laravel Mix Image Resizer

## Usage

First, install the extension.

```
npm install laravel-mix-image-resizer --save-dev
```

Then, add `ImageResizer` function on `webpack.mix.js`. like so:

```js
let mix = require('laravel-mix')

require('laravel-mix-image-size-checker')

mix
  .ImageSizeResizer({
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
    sizes: [
        414,
        768,
        828,
        1024,
        1280,
        1536,
        1600
    ],
    webp: true,
    imageminPngquantOptions: {
        quality: [0.3, 0.5]
    },
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