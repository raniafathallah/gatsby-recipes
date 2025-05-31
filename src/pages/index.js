import * as React from "react"
import Menu from "./components/Menus/Menu";
import Layout from "./components/Layout";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
export const query = graphql`
  {
    allWpRecipe(filter: {}, limit: 3) {
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

export default function Home({data}) {

  

  return <Layout>  


  <div className="App">

    <div className="main-sec">
    
        <StaticImage className="img" src="../images/main.png" alt="A dinosaur" height="700px"  width="70%"/>
         <div className="main-right"> 
         {/* <StaticImage className="img" src="../images/icon.png" alt="A dinosaur" height="10px"  width="10px"/> */}

   
<spna> Home & Design Trends </spna>

  
{data.allWpRecipe.nodes.map((item, index) => (
<div className='rec-item rec-item2'>
{/* <img  className='rec-img' src={"http://localhost:8001"+item.image} alt="A dinosaur"  loading="lazy"/> */}

        <span key={index}> <Link  className="rec-title" to={"/recipes/"+item.slug}> {item.title}  </Link>  </span>
             <div dangerouslySetInnerHTML={{ __html: item.content }} />

        </div>
      ))}

</div>
    </div>
    
<Link to="/diet"></Link>

    </div>

  </Layout>
}

