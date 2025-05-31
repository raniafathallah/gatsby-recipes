//import { graphql } from 'gatsby'
//import React from 'react'
// export const query = graphql`{
//   allWpCategory {
//    nodes {
//      id
//      name
//      slug
//    }
//  }
// }`
// const Footer = ({data}) => {
//   return (
//     <div>
      
      
//                {/* {data.allWpCategory.nodes.map(post => (
        
//           <li  key={post.id}href={post.slug} >  {post.name}</li>

//         ))}  */}
//       Footer</div>
//   )
// }

// export default Footer




/////


import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      allWpCategory {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `);

  return (
    <div>
      {/* <h2>Categories</h2>
      <ul>
        {data.allWpCategory.nodes.map(category => (
          <Link    to={"/category/"+category.name}   key={category.id}  >
            {category.name} ({category.count}) - <em>{category.slug}</em>
          </Link>
        ))}
      </ul> */}





      <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4> Categories</h4>
  	 			<ul>
  	 				{/* <li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li> */}

             {data.allWpCategory.nodes.map(category => (
        <li>

       <Link    to={"/category/"+category.name}   key={category.id}  >
            {category.name} ({category.count}) - <em></em>
          </Link>   </li>
        ))}

  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>


    </div>
  );
}