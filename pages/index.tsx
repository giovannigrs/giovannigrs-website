import { GetStaticProps } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SEO } from "@/components/SEO";

export default function HomePage({ posts }: { posts: any }) {
  return (
    <>
    <SEO
        title="Grsouza Desenvolvimento"
        description="Desenvolvedor de sites"
      />
      <Hero />
      <div className=" bg-slate-200">
        <div className="container mx-auto px-4 py-5">
          <h2 className="pb-2 border-b">Projetos</h2>
          <div className="py-6 grid grid-flow-row items-stretch text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="flex flex-col h-full p-5 pb-3 gap-4">
                <h3 className="leading-3 font-bold text-gray-950">
                  ACDR Advocacia
                </h3>
                <div className="flex justify-center mt-auto mb-2">
                  <Link
                    target="_blank"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 gap-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="https://acdradvocacia.com.br/"
                  >
                    Ver projeto
                  </Link>
                </div>
                <ul className="flex list-none mt-1">
                  <li className="me-auto">
                    <Image
                      src={
                        "https://avatars.githubusercontent.com/u/130388231?v=4"
                      }
                      alt={"Desenvolvedor de sites Giovanni Garcia R. de Souza"}
                      width={32}
                      height={32}
                      className="rounded-lg border border-white"
                    ></Image>
                  </li>
                  <li className="flex items-center">
                    <GlobeAmericasIcon></GlobeAmericasIcon>
                    <small>Site</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
