import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => (
  <Layout>
    <h1>{data.contentfulBlog.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.contentfulBlog.content.childMarkdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query BlogPostQuery($slug: String, $language: String) {
    contentfulBlog(path: { eq: $slug }, node_locale: { eq: $language }) {
      path
      node_locale
      title
      content{
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default BlogPost