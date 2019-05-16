module.exports = {
	baseUrl: "./", //1.默认为 "/":部署在一个域名的根路径上  ; 2. "./":所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
	outputDir: "dist", //默认为 "dist",指打包后的资源放置的路径，放在dist文件夹下
	assetsDir: "static", //默认为:'' ,放置打包后生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	indexPath: "index.html", //Default: 'index.html' ,指定生成的 index.html 的输出路径 (相对于 outputDir)
	filenameHashing: true, //Default: true ,生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
	// pages:undefined,//在 multi-page 模式下构建应用
	lintOnSave: false, //Type: boolean|'error';Default: true; true:将 lint 错误输出为编译警告;'error':错误输出会导致编译失败
	runtimeCompiler: false, //Default: false, 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
	// transpileDependencies:[],//Default: [], 默认情况下 babel-loader 会忽略所有 node_modules 中的文件
	productionSourceMap: false, //Default: true, 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	// crossorigin: undefined, //Default: undefined, 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
	// integrity: false, //Default: false,在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity
	// configureWebpack:{},//Type: Object | Function ;修改最终的配置
	// chainWebpack:function(){},//允许对内部的 webpack 配置进行更细粒度的修改。
	css: {
		modules: false, //Default: false, 设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
		sourceMap: false //Default: false, 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
		// extract: false, //Default: 生产环境下是 true，开发环境下是 false.是否将组件中的 CSS 提取至一个独立的 CSS 文件中
		// loaderOptions: {} //Default: {}, 向 CSS 相关的 loader 传递选项
	},
	devServer: {
		//host: "127.0.0.1",
		port: 8080,
		proxy: "http://172.0.0.1:8080" //可以是一个指向开发环境 API 服务器的字符串.如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
		//proxy: {
		//     '/api': {
		// 		target: 'http://api.test.com',
		// 		ws: true,
		// 		changeOrigin: true
		// 	},
		// 	'/foo': {
		// 		target: 'http://xxx.test.com'
		// 	}
		// }//也可以是一个对象，参照：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
	} //所有 webpack-dev-server 的选项都支持。注意：有些值像 host、port 和 https 可能会被命令行参数覆写。有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 baseUrl 同步以保障正常的工作
	// parallel: require("os").cpus().length > 1, //Default: require('os').cpus().length > 1, 是否为 Babel 或 TypeScript 使用 thread-loader
	// pwa:{},//向 PWA 插件传递选项
	// pluginOptions: {},//可以用来传递任何第三方插件选项
//	externals: {
//		"BMap": "BMap"
//	}
};
