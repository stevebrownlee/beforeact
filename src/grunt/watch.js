module.exports = {
    scripts: {
        files: ["./index.html", "./scripts/**/*.js", "./styles/**/*.css", "!node_modules/**/*.js"],
        tasks: ["eslint", "browserify", "uglify", "copy"],
        options: {
            spawn: false,
        },
    }
}