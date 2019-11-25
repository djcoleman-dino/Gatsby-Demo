import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../component/layout';
import blogStyles from './blog.module.scss';
import Head from "../component/head";

const Blog = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        id
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }  
    `)    

    return (
        <div>
            <Layout>
            <Head title="Blog" />
            <h1>Blog page</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li key={edge.node.id} className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>    
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>
            </Layout>
        </div>
    )
}

export default Blog;


// Markdown query ****
// const data = useStaticQuery(graphql`
//             query {
//                 allMarkdownRemark {
//                    edges {
//                        node {
//                            frontmatter {
//                                title
//                                date
//                            }
//                            fields{
//                                slug
//                            }
//                        }
//                    }
//                 }
//             }
//         `)
// Markdown return 
// return (
//     <div>
//         <Layout>
//         <h1>Blog page</h1>
//         <ol className={blogStyles.posts}>
//             {data.allMarkdownRemark.edges.map((edge) => {
//                 return (
//                     <li className={blogStyles.post}>
//                         <Link to={`/blog/${edge.node.fields.slug}`}>    
//                             <h2>{edge.node.frontmatter.title}</h2>
//                             <p>{edge.node.frontmatter.date}</p>
//                         </Link>
//                     </li>
//                 )
//             })}

//         </ol>
//         </Layout>
//     </div>
// )