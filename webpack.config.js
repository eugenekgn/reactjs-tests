module.exports = {
    entry: './app/employees/employeeGrid.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'employee-grid.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '*.spec.js'],
                query: {
                    "presets": ["es2015", "stage-0", "react"]
                }
            }
        ]
    }
};