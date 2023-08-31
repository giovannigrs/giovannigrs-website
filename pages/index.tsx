import { GetStaticProps } from "next";

import { Hero } from "@/components/Hero";

export default function HomePage({ posts }: { posts: any }) {
  return (
    <>
      <Hero />
      <div className="container mx-auto py-8">
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        </div>
      </div>
    </>
  );
}