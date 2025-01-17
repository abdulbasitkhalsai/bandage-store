// import { createClient } from '@sanity/client'
// import axios from 'axios'
// import dotenv from 'dotenv'
// import { fileURLToPath } from 'url'
// import path from 'path'
// import { url } from 'inspector'

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') })
// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31'
// })
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`)
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
//     const buffer = Buffer.from(response.data)
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop()
//     })
//     console.log(`Image uploaded successfully: ${asset._id}`)
//     return asset._id
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error)
//     return null
//   }
// }
// async function importData() {
//   try {
//     console.log('Fetching products from API...')
//     const response = await axios.get('https://677e430b94bde1c1252b27f0.mockapi.io/products')
//     // .then(response => console.log(response.data))
//     // .catch(error => console.error(error))
//     const products = response.data
//     console.log(`Fetched ${products.length} products`)
//     for (const product of products) {
//       console.log(`Processing product: ${product.title}`)
//       let imageRef = null
//       if (product.image) {
//         imageRef = await uploadImageToSanity(product.image)
//       }
//       const sanityProduct = {
//         _type: 'product',
//         id: product.id,
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         discountPercentage: 0,
//         priceWithoutDiscount: product.price,
//         rating: product.rating?.rate || 0,
//         ratingCount: product.rating?.count || 0,
//         tags: product.category ? [product.category] : [],
//         sizes: [],
//         // image: product.image || null,
//         // image: product.image
//         image: {
//           _type: 'image',
//           asset: {
//               _type: 'reference',
//               _ref: imageRef, // Set the correct asset reference ID
//           },
//       },
//       }
//       console.log('Uploading product to Sanity:', sanityProduct.name)
//       const result = await client.create(sanityProduct)
//       console.log(`Product uploaded successfully: ${result._id}`)
//     }
//     console.log('Data import completed successfully!')
//   } catch (error) {
//     console.error('Error importing data:', error)
//   }
// }
// // import sanityClient from '@sanity/client';

// // const client = sanityClient({
// //   projectId: 'yourProjectId', // Replace with your project ID
// //   dataset: 'yourDataset',    // Replace with your dataset name
// //   token: 'yourEditorToken',  // Replace with your Editor token
// //   useCdn: false,             // Do not use CDN for mutations
// // });

// const deleteDocument = async (documentId) => {
//   try {
//     await client.delete(documentId);
//     console.log(`Document ${documentId} deleted successfully.`);
//   } catch (error) {
//     console.error('Error deleting document:', error);
//   }
// };

// deleteDocument('yourDocumentId'); // Replace with the ID of the document you want to delete


// importData()


import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,   // Remove NEXT_PUBLIC_ for server-side usage
  dataset: process.env.SANITY_DATASET,         // Remove NEXT_PUBLIC_ for server-side usage
  apiVersion: '2023-01-01',                   // Use a recent date for the API version
  token: process.env.SANITY_API_TOKEN,         // API token for private access
  useCdn: false,
});

async function deleteAllProducts() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const deletePromises = products.map(product =>
    client.delete(product._id)
  );

  await Promise.all(deletePromises);
  console.log('All product documents have been deleted.');
}

deleteAllProducts().catch(console.error);
