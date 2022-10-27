/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const ThemeColor = {
    '@primary-color': 'rgb(0,82,204)', // 全局主色
    '@font-size-base': '16px' // 主字号
}
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { ...ThemeColor },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};