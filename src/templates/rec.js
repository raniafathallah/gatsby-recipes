import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/Layout"



export default function Post({ data }) {
  const post = data.wpRecipe
  return (
    <Layout>
      <div className="parent-container">
      <div className="div-container">
        <div className="text-center">
           <h3 className="myrecipe-title">{post.title}</h3>
           <h5 className="myrecipe-prep">
             <strong> 
           Prep Time: </strong> {post.preptime} minutes</h5>
        </div>
         
          <img src={"gatsby-recipes"+post.src}/>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
            <div className="myrecipe-note">
              <h5>Author Note</h5>
              <p>  
                  {post.note}
              </p>
            </div>

            <div className="rec-ingredients myrecipe-note">
            <h5>Ingredients</h5>

            <p> {post.ingredients.map((item, index) => (
            <div className=''>
                    <span key={index}> {item}    </span>
            </div>
      ))}
      </p>
            </div>
       
          {/* Example ACF fields */}
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpRecipe(id: { eq: $id }) {
        id
        uri
        slug
        rating
        preptime
        image
        note
        ingredients
        src
        title
    }
  }
`