module.exports = {
    main: {
        files: [{
            expand: true,
            cwd: ".",
            src: "styles/*",
            dest: "../dist/"
        }, {
            expand: true,
            cwd: ".",
            src: "index.html",
            dest: "../dist/"
        }]
    }
}
