import React from 'react'
import Layout from './components/Layout'
import { Link, graphql } from "gatsby"


export const query = graphql`
  {
    allWpPost {
      nodes {
        id
        uri
        title
        slug
      }
    }
  }
`

const blog = ({data}) => {

  return (
    <Layout> 
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

   
{/* 
    {data.map((post)=>
    <div> <Link to="/{post.uri}">{post.title}</Link></div>
    )} */}

{data.allWpPost.nodes.map((item, index) => (
  // href={"#demo" + this.state.id}

        <li key={index}> <Link to={"/"+item.slug}> {item.title}  </Link>  </li>
      ))}
    </Layout>
  )
}

export default blog



