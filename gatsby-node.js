const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // 追加したブログ記事テンプレート
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(
      `
        query MyQuery {
          allContentfulBlog {
            edges {
              node {
                path
              }
            }
          }
        }
      `
  ).then(result => {
      if(result.errors) {
          throw result.errors
      }

      // ブログ記事ページを生成
      result.data.allContentfulBlog.edges.forEach(edge => {
          const path = edge.node.path
          createPage({
              path: path,
              component: blogPostTemplate, // 追加したブログ記事テンプレート
              context: {
                slug: path, // slugとしてContentfulから取得したPathを渡す
              },
          })
      })
  })
}