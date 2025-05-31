// import React from 'react'


// const profilecat = ({$categorySlug}) => {
//   return (
//     <div>profile-cat</div>
//   )
// }

// export const query = graphql`
//   query($categorySlug: String!) {
//     wpRecipe(
//       filter: {
//         portfolioCategories: { nodes: { elemMatch: { slug: { eq: $categorySlug } } } }
//       }
//     ) {
//       nodes {
//         title
//         slug
//         content
//       }
//     }
//   }`
// export default profilecat