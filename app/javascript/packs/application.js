
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// this imports bootstrap
import "bootstrap"
// this imports the application.scss file we created in the directory app/javascript/stylesheets
import "/../stylesheets/application.scss"

document.addEventListener("turbolinks:load", () => {
        // configure bootstrap tooptips
        $('[data-toggle="tooltip"]').tooltip()
        // configure bootstrap popovers (very similar to tooltips)
        $('[data-toggle="popover"]').popover()
})