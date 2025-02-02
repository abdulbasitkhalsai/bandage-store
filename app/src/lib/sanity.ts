// import { IProductProp } from '@/interfaces';
// import sanityClient from '../sanity/sanity.client';

//  './sanityClient'; // Assuming you have a Sanity client setup

// // Fetch wishlist for a logged-in user
// export const getUserWishlist = async (userId: string) => {
//   const data = await sanityClient.fetch(`
//     *[_type == "user" && _id == "${userId}"]{
//       wishlist[]->{productId, title, price, imageUrl}
//     }
//   `);
//   return data?.[0]?.wishlist || [];
// };

// // Add product to user's wishlist
// export const addToUserWishlist = async (userId: string, wishlist: IProductProp[]) => {
//   await sanityClient
//     .patch(userId)
//     .set({ wishlist })
//     .commit();
// };
