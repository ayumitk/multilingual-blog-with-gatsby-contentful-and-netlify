import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl, Link } from "gatsby-plugin-intl" // Linkを追加

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
          <li key={post.contentful_id}>
            {/* Linkを追加 */}
            <Link to={`/${post.path}`}>{post.title}</Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)}

// クエリにもpathを追加
export const query = graphql`
  query ContentFulBlog($language: String) {
    allContentfulBlog(filter: { node_locale: { eq: $language } }) {
      nodes {
        contentful_id
        node_locale
        title
        path
      }
    }
  }
`

export default IndexPage