import { GetStaticProps } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SEO } from "@/components/SEO";

export default function HomePage({ posts }: { posts: any }) {
  const projetos = [
    {
      id: 1,
      title: "ACDR Advocacia",
      description:
        "Site institucional do escritório de advocacia da doutora Audry Rocha.",
      author: { name: "Giovanni Garcia" },
      href: "https://acdradvocacia.com.br/",
    },
    {
      id: 2,
      title: "Constante Marcas",
      description:
        "Site institucional do agente de propriedade industrial Bruno Armstrong.",
      author: { name: "Giovanni Garcia" },
      href: "https://acdradvocacia.com.br/",
    },
  ];
  return (
    <>
      <SEO
        title="Grsouza Desenvolvimento"
        description="Serviços de Desenvolvimentos de sites Wordpress, otimização SEO de sites, customização sob demanda e reestruturação de sites"
      />
      <Hero />

      <div className="bg-slate-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projetos
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Veja alguns dos projetos finalizados.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {projetos.map((post) => (
              <div
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between p-4 rounded-lg bg-white shadow-sm hover:shadow-lg"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <span className="absolute inset-0" />
                    <Link
                      target="_blank"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 gap-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      href="https://acdradvocacia.com.br/"
                    >
                      Ver projeto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
