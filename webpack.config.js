var path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.liquid$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "liquid-loader",
                        options: {
                            data: {
                                name: "Antonio",
                                dev_evn: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
