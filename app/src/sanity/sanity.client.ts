// import { createClient, type ClientConfig } from 'next-sanity'

// const SanityClient: ClientConfig = {
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   apiVersion: "2024-12-22",
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN, // Add the token here
// }

// export default createClient(SanityClient);

// import { createClient } from 'next-sanity';

// // Ensure your client is configured properly
// const SanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
//   apiVersion: "2024-12-22",
//   useCdn: false,  // Use CDN for faster reads but not for server-side mutations
//   token: process.env.SANITY_API_TOKEN,  // Keep token on server-side for write operations
// });

// // Utility function to update a document in Sanity
// export const updateDocument = async (documentId: string, newFieldValue: string) => {
//   try {
//     console.log('Attempting to update document with ID:', documentId);

//     const result = await SanityClient
//       .patch(documentId)  // The document ID you're updating
//       .set({ field: newFieldValue })  // Fields you are updating
//       .commit();  // Commit the changes

//     console.log('Document updated successfully:', result);
//     return result;
//   } catch (err) {
//     console.error('Error updating document:', err);
//     throw err; // Rethrow for further handling if necessary
//   }
// };

// export default SanityClient;
import { createClient } from 'next-sanity';

const SanityClient = createClient({
  projectId: "syq2w7mv",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-12-22',
  useCdn: false, // Use CDN for faster reads but not for server-side mutations
  token: process.env.SANITY_API_TOKEN, // Ensure this token has 'Editor' permissions
});

export default SanityClient;
