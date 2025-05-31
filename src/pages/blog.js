import React from 'react'
import Layout from './components/Layout'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


export const query = graphql`
  {
    allWpRecipe {
      nodes {
        id
        uri
        title
        slug
        content
        rating
        preptime
        image
        note
        ingredients
        src
      }
    }
  }
`

const blog = ({data}) => {

  return (
    <Layout> 
    <div className='parent-container'>

 
<div className='div-container'>
{data.allWpRecipe.nodes.map((item, index) => (
<div className='rec-item'>
{/* src={"http://localhost:8001"+item.image}  */}
<img  className='rec-img'  src={"/gatsby-recipes"+item.image} alt="A dinosaur"  loading="lazy"/>

        <span key={index}> <Link  className="rec-title" to={"/recipes/"+item.slug}> {item.title}  </Link>  </span>
   
   
        </div>
      ))}
</div>
</div>
    </Layout>
  )
}

export default blog






