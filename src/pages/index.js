import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h2>Posts</h2>
    <ul>
      {data.allContentfulBlog.nodes.map(post => {
        return (
          <li key={post.contentful_id}>{post.title}</li>
        )
      })}
    </ul>
  </Layout>
)

export const query = graphql`
  query ContentFulBlog {
    allContentfulBlog {
      nodes {
        contentful_id
        node_locale
        title
      }
    }
  }
`
export default IndexPage
