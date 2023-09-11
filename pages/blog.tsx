import { GetStaticProps } from "next";

import { Hero } from "@/components/Hero";
import { PostBlock } from "@/components/PostBlock";
import { getPosts } from "@/lib/service";

export default function Blog({ posts }: { posts: any }) {
  return (
    <>
      <div className="container mx-auto py-8 min-h-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Artigos
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Veja meus artigos sobre tecnologia e algumas dicas sobre Wordpress e outras ferramentas para criação de sites
            </p>
          </div>
          <h3 className="text-xl">All my posts (5)</h3>
          <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {posts &&
              posts.map((post: any) => {
                return <PostBlock key={post.slug} post={post} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let posts = await getPosts(100); // retrieve first 100 posts

  if (!posts) {
    posts = null;
  }

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};
