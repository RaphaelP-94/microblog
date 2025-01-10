// // import PostDetails from "@/components/PostDetails";
// // import prisma from "@/lib/prisma";
// // import { notFound } from "next/navigation";

// // type Props = {
// //     params: {
// //       postId: string
// //     }
// //   }
// // //   export const dynamic = "force-dynamic"; // Erzwinge dynamisches Rendering

// // export default async function Post({ params }: Props) {
// //   // First await the params
// //   const { postId } = await params;
// //   // Then convert to integer
// //   const id = parseInt(postId, 10);

    
// //     const post = await prisma.post.findUnique({
// //       where: {
// //         id,
// //       },
// //       include: {
// //         author: true,
// //       }
// //     });
  
// //     // Check if the post exists
// //     if(!post) {
// //         return notFound();
// //     }
// //     // PostId to fetch the post with the given id
// //     // Spread in the post object to use all the properties of the post object
// //     return <PostDetails {...post} />;

// // }
// import prisma from "@/lib/prisma";
// import { notFound } from "next/navigation";
// import PostDetails from "@/components/PostDetails";

// interface Props {
//   params: {
//     postId: string;
//   };
// }

// export default async function EditPostPage({ params }: Props) {
//   const post = await prisma.post.findUnique({
//     where: {
//       id: Number(params.postId),
//     },
//     include: {
//       author: true,
//     },
//   });

//   if (!post) {
//     notFound();
//   }

//   return <PostDetails {...post} isEditing={true} />;
// }