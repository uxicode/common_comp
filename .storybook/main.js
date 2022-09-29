const path = require("path");
const { merge } = require("webpack-merge");

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
    "webpackFinal":async (config) => {
        /*   // CSS Modules 지원
        config.module.rules.find(
         (rule) => rule.test.toString() === '/\\.css$/'
         ).exclude = /\.module\.css$/;
         */

        return merge(config, {
            module:{
                rules: [
                    { // storybook 에도 @emotion/babel-preset-css-prop 을 설정해 주어서 pragma ( @jsxImportSource @emotion/react ) 설정을 안하게끔 한다
                        test: /\.(ts|tsx)$/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            presets: [
                                ['react-app', {flow: false, typescript: true}],
                                require.resolve('@emotion/babel-preset-css-prop'),
                            ],
                        }
                    },
                    {//전역 스타일(scss)을 위한 sass-loader 설정추가
                        test: /.*\.(?:c|sc|sa)ss$/,
                        use: ['sass-loader'],
                        include: path.resolve(__dirname, '../'),
                    }/*
                    {  //webpackFinal 만으로 전역 scss 추가할때
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                                    @import "./src/assets/scss/styles.scss";
                                    `
                        }
                    }*/
                ]
            },
            resolve:{
                alias: { //storybook 에 별칭(알리어스) 추가
                    "@":path.resolve(__dirname, "../src/"),
                },
                extensions:['.ts', '.tsx', '.scss'] //자동으로 지정한 확장자를 순서대로 해석한다.
            },

        });
    }
}
