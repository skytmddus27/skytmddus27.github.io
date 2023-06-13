import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const handleOrder = () => {
  alert("상품이 주문되었습니다!");
  openOrderModal();
};

const openOrderModal = () => {

};

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <section
        dangerouslySetInnerHTML={{ __html: posts[0].html }}
        itemProp="articleBody"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleOrder}
          className="custom-button"
          style={{
            backgroundColor: "yellow",
            fontSize: "2rem",
            border: "none",
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "background-color 0.3s ease",
          }}
        >
          주문하기
        </button>
      </div>
    </Layout>
  );
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        html
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
