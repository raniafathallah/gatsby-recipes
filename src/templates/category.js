import React, { useEffect, useState }  from "react";
import { Link, graphql } from "gatsby";
import Layout from "../pages/components/Layout";
//     allWpCategory(filter: { frontmatter: { category: { eq: $category } } }) {

export const query = graphql`
  query PostsByCategory($category: String!) {
     allWpCategory(filter: {name: {eq: $category }}) {

      nodes {
        id
     name
     slug
      }
    }
    allWpRecipe(filter: {categories: {nodes: {elemMatch: {name: {eq:$category}}}}}) {
     nodes {
       id
       image
       note
       title
       slug
    }
  }

  }
`;

export default function CategoryTemplate({ data, pageContext }) {



  return (
    <div>
      {/* <h1>Posts in category: {pageContext.category}</h1> */}
      <ul>
        {/* {data.allWpCategory.nodes.map(post => (
          <li key={post.id}>
            <a href={post.slug}>{post.name}</a>
          </li>
        ))} */}

{/* {data.allWpRecipe.nodes.map(post => (
          <li key={post.id}>
            <a href={post.slug}>{post.title}</a>
          </li>
        ))} */}
      </ul>


      <Layout> 
    <div className='parent-container'>

 
<div className='div-container'>
{data.allWpRecipe.nodes.map((item, index) => (
<div className='rec-item'>
  {/* //src={"http://localhost:8001"+item.image}  */}
<img  className='rec-img'   src={"/gatsby-recipes"+item.image} alt="A dinosaur"  loading="lazy"/>

        <span key={index}> <Link  className="rec-title" to={"/recipes/"+item.slug}> {item.title}  </Link>  </span>
   
   
        </div>
      ))}
</div>
</div>
    </Layout>


    </div>
  );
}