exports.createPages = async ({ graphql, actions }) => {
     const { createPage } = actions;
     const result = await graphql(`
       {
         allWpPost {
           nodes {
             id
             uri
           }
         }
       }
     `);
   
     result.data.allWpPost.nodes.forEach(post => {
       createPage({
         path: post.uri,
         component: require.resolve(`./src/templates/post.js`),
         context: {
           id: post.id,
         },
       });
     });

  //    const result2 = await graphql(`
  //    {
  //     allWpRecipe {
  //       nodes {
  //         id
  //         uri
  //         title
  //         slug
  //         content
  //         rating
  //         preptime
  //         image
  //         note
  //         ingredients
          
  //       }
  //     }
  //    }
  //  `);
 
  //  result2.data.allWpRecipe.nodes.forEach(post => {
  //    createPage({
  //      path: post.uri,
  //      component: require.resolve(`./src/templates/post2.js`),
  //      context: {
  //        id: post.id,
  //      },
  //    });
  //  });



  const path = require('path');

  const result3 = await graphql(`
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
              
            }
          }
  }
`);

if (result3.errors) {
  throw result3.errors;
}

const projects = result3.data.allWpRecipe.nodes;

// Create a page for each project
projects.forEach((project) => {
  createPage({
    path: `/recipes/${project.slug}/`,
    component: path.resolve('./src/templates/rec.js'),
    context: {
      id: project.id,
    },
  });
});

// dyn cat 

const result5 = await graphql(`
    {
      allWpCategory {
        nodes {
          name
        }
      }
    }
  `);

  result5.data.allWpCategory.nodes.forEach(category => {
    createPage({
      path: `/category/${category.name}/`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        category: category.name, // Pass category as variable
      },
    });
  });

   };



//    exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const path = require('path');

//    createPage({
//     path: `/category/${category.slug}/`,
//     component: path.resolve(`./src/templates/portfoliocat.js`),
//     context: {
//       categorySlug: category.slug,
//     },
//   })
// }



// //  create categories
// createPage({
//   path: `/page/${category.slug}/`,
//   component: path.resolve(`./src/pages/page.js`),
//   context: {
//     categorySlug: category.slug,
//   },
// })




///dynamic cat 
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Get all categories
  
// };