
import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"




export const query = graphql`
  {
     allWpRecipe(filter: {categories: {nodes: {elemMatch: {name: {eq: "diet"}}}}}) {
          nodes {
            id
            image
            note
         }
       }
     }
`


const Page = ({data}) => {
     const [cat, setCat] = useState("")

     useEffect(() => {
       const params = new URLSearchParams(window.location.search)
       setCat(params.get("cat"))
     }, [])

   
  return (
    <Layout> 
    <div className='parent-container'>
<div>Query param "cat" is {cat}</div>

 
<div className='div-container'>
{data.allWpRecipe.nodes.map((item, index) => (
<div className='rec-item'>
<img  className='rec-img' src={"http://localhost:8001"+item.image} alt="A dinosaur"  loading="lazy"/>

        <span key={index}> <Link  className="rec-title" to={"/recipes/"+item.slug}> {item.title}  </Link>  </span>
   
   
        </div>
      ))}
</div>
</div>
    </Layout>
  )
}

export default Page






