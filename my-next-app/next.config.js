module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
      prependData: `@import "./styles/global.scss";`,
    },
  };
  