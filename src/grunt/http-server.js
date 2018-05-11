module.exports = {
    "dev": {

        // the server root directory
        root: "../dist",

        // the server port
        // can also be written as a function, e.g.
        // port: function() { return 8282; }
        port: 8080,

        // the host ip address
        // If specified to, for example, "127.0.0.1" the server will
        // only be available on that ip.
        // Specify "0.0.0.0" to be available everywhere
        host: "0.0.0.0",

        showDir : false,
        autoIndex: true,

        // server default file extension
        ext: "html",

        // run in parallel with other tasks
        runInBackground: true,

        // specify a logger function. By default the requests are
        // sent to stdout.
        logFn: function(req, res, error) { },

        // Proxies all requests which can't be resolved locally to the given url
        // Note this this will disable "showDir"
        proxy: "https://www.stevebrownlee.com",

        // Use "https: true" for default module SSL configuration
        // (default state is disabled)
        // https: {
        //     cert: "cert.pem",
        //     key : "key.pem"
        // },

        // Tell grunt task to open the browser
        openBrowser : true,

        // customize url to serve specific pages
        customPages: {
            "/readme": "../README.md"
        }

    }

}
