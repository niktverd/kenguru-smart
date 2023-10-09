require('dotenv').config();

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, _webpack, _loaders) => {
    const config = {
        entry: {
            main: './entries/main/index.tsx',
        },
        output: {
            publicPath: '/dist',
            path: path.resolve(__dirname, 'dist'),
        },
        target: 'web',
        resolve: {
            alias: {
                '@': path.resolve(__dirname),
                react: require.resolve('react'),
                'react-dom': require.resolve('react-dom'),
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Widgets',
                template: 'public/index.html',
                apiBaseUrl: process.env.API_BASE_URL ?? '%API_BASE_URL%',
            }),
        ],
        devServer: {
            host: '0.0.0.0',
            port: 443,
            https: true,
            historyApiFallback: true,
            proxy: [
                {
                    context: ['/web-api'],
                    target: 'https://mail.yandex.ru/',
                    secure: false,
                    changeOrigin: true,
                },
                {
                    context: ['/', '/inbox', '/sent', '/spam', '/deleted', '/settings'],
                    target: 'https://localhost:443/dist/index.html',
                    secure: false,
                    pathRewrite: {
                        '.*': '/',
                    },
                },
            ],
        },
    };

    const options = {
        runtime: true,
        withCompression: false,
        chunkNamingPattern: '[name]',
        externalCss: [
            path.resolve(__dirname, 'node_modules/@yandex-lego/components'),
            path.resolve(__dirname, 'node_modules/@ps-int/mg-theme'),
            path.resolve(__dirname, './presets'),
        ],
    };

    return { config, options };
};
