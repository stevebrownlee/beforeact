module.exports = {
    options: {
        browserifyOptions: {
            debug: true,
            paths: ["./scripts"],
        }
    },
    dist: {
        files: {
            "../dist/bundle.js": ["./scripts/main.js"]
        }
    }
}
