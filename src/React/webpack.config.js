const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "App", "app.tsx"),
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../../dist/bundled"),
        filename: "reactCollections.bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        plugins: [
        ]
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.(js[x]?|ts[x]?)$/, loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                    plugins: ["@babel/plugin-syntax-jsx"]
                },
            },
            {
                test: /\.[s]?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    'postcss-loader', 'sass-loader'
                ]
            }
        ]
    }
}