import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <h2 style={{margin: `0.5rem`}}>Posts</h2>
    <ul style={{ marginBottom: `2rem` }}>
      {data.allContentfulPost.nodes.map(post => {
        return (
          <li key={post.contentful_id}>{post.title}</li>
        )
      })}
    </ul>
  </Layout>
)

export const query = graphql`
  query ContentFulPosts {
    allContentfulPost {
      nodes {
        contentful_id
        node_locale
        title
      }
    }
  }
`
export default IndexPage
