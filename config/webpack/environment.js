
const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
        // set dollar sign variable to jquery library
        $: 'jquery',
        // set jQuery variable to jquery (lowercase to match the library name)
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
}))

module.exports = environment