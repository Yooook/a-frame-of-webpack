
module.exports = {
		entry:'./app/entry.js',
		output: {
			path:__dirname,
			filename: './public/bundle.js'
		},
		devtool:'source-map',//为打包的文件生成一个source-map
		module: {
			rules:[
				{
	                test: /\.js$/,
	                use: {
	                    loader: "react-hot-loader"
	                },
	                 use: {
	                    loader: "babel-loader"
	                },
	                exclude: /node_modules/
           		 },
				{
	                test: /\.css$/,
	                use: {
	                    loader: "style-loader"
	                },
	                 use: {
	                    loader: "css-loader"
	                }
           		 }		
    //        		{test:/\.js$/,exclude:/node_modules/, loader: 'react-hot!babel'},
				// {test:/\.css$/, loader: 'style-loader!css-loader!'}//loader: 'style-loader!css-loader!'这里配置了之后，修改引入的部分为require('./style.css')
			]
		}
	};