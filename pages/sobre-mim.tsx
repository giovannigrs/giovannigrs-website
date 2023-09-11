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
      href: "https://constantemarcas.com/",
    },
  ];
  return (
    <>
      <SEO
        title="Sobre mim"
        description="Olá, sou o Giovanni Garcia Ribeiro de Souza, sou engenheiro de computação e desenvolvedor de software..."
      />
      <div className="bg-slate-100 py-12 sm:py-6">
        <div className="mx-auto bg-slate-50 max-w-7xl px-6 py-12 rounded-md shadow lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Formação
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Veja alguns dos projetos finalizados.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 py-10 sm:py-16 lg:mx-0 lg:max-w-none ">
            {projetos.map((proj) => (
              <div
                key={proj.id}
                className="flex max-w-xl flex-col items-start justify-between p-4"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {proj.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <span className="absolute inset-0" />
                    <Link
                      target="_blank"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 gap-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      href={proj.href}
                    >
                      Ver projeto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experiência
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Veja alguns dos projetos finalizados.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 py-10  sm:py-16 lg:mx-0 lg:max-w-none ">
            {projetos.map((proj) => (
              <div
                key={proj.id}
                className="flex max-w-xl flex-col items-start justify-between p-4"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {proj.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <span className="absolute inset-0" />
                    <Link
                      target="_blank"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 gap-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      href={proj.href}
                    >
                      Ver projeto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projetos
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Veja alguns dos projetos finalizados.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 py-10 sm:py-16 lg:mx-0 lg:max-w-none ">
            {projetos.map((proj) => (
              <div
                key={proj.id}
                className="flex max-w-xl flex-col items-start justify-between p-4"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {proj.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <span className="absolute inset-0" />
                    <Link
                      target="_blank"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 gap-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      href={proj.href}
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
