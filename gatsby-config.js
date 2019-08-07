module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/default-page-layout.tsx")
        }
      }
    },
    "gatsby-plugin-typescript"
  ]
};
