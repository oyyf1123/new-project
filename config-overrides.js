/* ! webpack配置覆盖性文件 */

const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path')

function pathResolve (alias) {
    return path.join(__dirname, alias)
}

module.exports = override(
    fixBabelImports('import', { // !按需引入
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        // ! 路径别名: 对应的绝对路径
        '@': pathResolve('./src'),
        'gstyle': pathResolve('./src/assets/global_style'),
        'comps': pathResolve('./src/components'),
        'layout': pathResolve('./src/layout'),
        'pages': pathResolve('./src/pages'),
        'utils': pathResolve('./src/utils'),
        'api': pathResolve('./src/api'),
        'actions': pathResolve('./src/actions'),
        'reducers': pathResolve('./src/reducers'),
        'store': pathResolve('./src/store'),
        'assets': pathResolve('./src/assets'),
        'mock': pathResolve('./src/mock'),
    })
);