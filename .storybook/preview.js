/*
 SassError: SassError: expected "{".

  import API from "!../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js";
 src/assets/scss/styles.scss 2:101  root stylesheet

* */
// styles.scss 에 style-loader 와 css-loader 를 적용한다는 뜻.  !는 loader 들을 연결시켜줄 때 쓰인다.
// import '!style-loader!css-loader!sass-loader!../src/assets/scss/styles.scss';

import {GlobalStyle} from '../src/shared/globalStyle';

export const decorators = [
    (Story) => (
        <>
            <GlobalStyle />
            <Story />
        </>
    ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
