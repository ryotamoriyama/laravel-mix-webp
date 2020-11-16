const mix = require('laravel-mix')
const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')
const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

const defaultOptions = {
    disable: false,
    from: 'resources',
    to: 'public',
    imageminWebpOptions: {
        quality: 50
    },
}

class ImageWebp {
    register(extraOptions = {}) {
        const {
            disable,
            from,
            to,
            imageminWebpOptions,
        } = Object.assign(defaultOptions, extraOptions)

        if (disable) return

        const images = glob.sync(from + '/**/*').forEach((imagePath) => {
            if (imagePath.match(/\.(jpe?g|png|gif)$/i) === null) {
                return
            }

            let {root, dir, base, ext, name} = path.parse(imagePath)
            imagemin([imagePath], {
                destination: dir.replace(from,to),
                plugins: [
                    imageminWebp(imageminWebpOptions)
                ],
            })
        })
    }
}

mix.extend('ImageWebp', new ImageWebp())