const CracoAlias = require("craco-alias");

module.exports = {
    babel: {
        presets: ['@emotion/babel-preset-css-prop'],
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                tsConfigPath: "tsconfig.json" // compilerOptions > paths 속성이 있는 파일 경로
            }
        }
    ]
}
