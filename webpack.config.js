var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist/",
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
  	  {
  	    loader: "babel-loader",
  	    include: [
  	      path.resolve(__dirname, "src"),
  	    ],
  	    test: /\.jsx?$/,
  	    query: {
  	      plugins: ['transform-runtime', ["transform-object-rest-spread", { "useBuiltIns": true }]],
  	      presets: ['env', 'react', 'latest'],
  	    }
  	  },
  	  {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
         ]
    	},
    	{
    		test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : 'file-loader'
			}
  	  ]
		}
	}
