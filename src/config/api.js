/*
 * 开发环境配置，执行 serve 时用到
 */
const devConfig = {
    absUlr: 'http://localhost:8080/',
    ajaxUrl: 'https://jiaju.yidake.com/rest/',           //异步接口地址
    numAjaxUrl: 'https://jiaju.yidake.com/restc/',       //统计异步接口地址
    wxAuthUrl: 'https://jiaju.yidake.com/rest/',         //微信授权地址
    qiniuUrl: 'http://pn48sia50.bkt.clouddn.com/',              //七牛地址,前缀，显示再拼接key即为图片地址
    qiniuUpUrl: '',//七牛上传地址
    assetsUrl: '',                                              //远程图片地址，如七牛地址，可以减少应用打包的体积，需要配合版本号一起使用
    assetsVer: '',                                              //静态资源版本号
}

/*
 * 正式环境配置，执行 build 时用到；正式环境配置会覆盖开发环境配置，只需要写需要修改的
 */
const prdConfig = {
    absUlr: 'http://localhost:8080/',
}

let exportConfig = devConfig;
if (process.env.NODE_ENV === 'production') {
    exportConfig = Object.assign(devConfig, prdConfig)
}

export default exportConfig
