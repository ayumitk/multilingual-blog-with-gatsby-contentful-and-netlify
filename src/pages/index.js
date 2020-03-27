import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"

const IndexPage = ({ data }) => {
  const intl = useIntl()
  return(
  <Layout>
    <SEO title="Home" />
    <h1>{intl.formatMessage({ id: "hello" })}</h1>
    <h2>{intl.formatMessage({ id: "posts" })}</h2>
    <ul>
      {data.allContentfulBlog.nodes.map(post => {
        return (
          <li key={post.contentful_id}>{post.title}</li>
        )
      })}
    </ul>
  </Layout>
)}

export const query = graphql`
  query ContentFulBlog($language: String) {
    allContentfulBlog(filter: { node_locale: { eq: $language } }) {
      nodes {
        contentful_id
        node_locale
        title
      }
    }
  }
`

export default IndexPage