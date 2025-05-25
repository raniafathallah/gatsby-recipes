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
   };