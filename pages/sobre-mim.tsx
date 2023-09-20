import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { SEO } from "@/components/SEO";

export default function HomePage({ posts }: { posts: any }) {
  const formacoes = [
    {
      id: 1,
      title: "Bacharelado em Engenharia da Computação",
      institution: "FACENS - Faculdade de Engenharia de Sorocaba",
      description: "",
      start: new Date(2014, 0, 1),
      end: new Date(2020, 11, 1),
    },
  ];
  /** mes é de 0 (jan) a 11 (dez) */
  const experiencias = [
    {
      id: 1,
      title: "Desenvolvedor de Software",
      company: "Dental Morelli",
      description:
        "Desenvolvimento e manutenção de software, utilizando .NET, Adobe ColdFusion, HTML5, Javascript, jQuery, MS SQL, Python, versionamento SVN e outras tecnologias. Apoio aos usuários de sistemas utilizados nas atividades produtivas e administrativas da empresa, implementando correções e melhorias sob demanda. Além da realização de pesquisa e desenvolvimento de novas ferramentas",
      start: new Date(2021, 8, 20),
      end: new Date(),
    },
    {
      id: 2,
      title: "Desenvolvimento de sistema de automação",
      company: "ACDR Advocacia e Constante Marcas",
      description: "Desenvolvimento de uma ferramenta para automação de processo repetitivos, utilizando python e Django para criar a IA que servirá de suporte para as tarefas. O frontend será desenvolvido utilizando React com a framework Nextjs.",
      start: new Date(2022, 11, 1),
      end: new Date(),
    },
    {
      id: 3,
      title: "Desenvolvimento de Site Wordpress e Gestão de tráfego pago",
      company: "ACDR Advocacia",
      description:
        "Desenvolvimento do site utilizando Wordpres junto com o contrutor de sites Elementor, otimização para SEO, criação de layout do blog, criação de landing pages e gestão do tráfego pago em diversas plataformas, sendo elas Bing, Google e Meta (Facebook e Instagram). O site é disponibilizado através do Quic.Cloud e hospedagem Hostgator.",
      start: new Date(2021, 0, 10),
      end: new Date(),
    },
    {
      id: 4,
      title: "Desenvolvimento de Site Wordpress",
      company: "Constante Marcas",
      description:
        "Desenvolvimento do site utilizando Wordpres junto com o contrutor de sites Spectra, criação de layout do blog e otimização para SEO. O site foi disponibilizado através do Cloudflare e da hospedagem em container da umbler, garantido boa performance ao navegar pelo site.",
      start: new Date(2023, 4, 10),
      end: new Date(2023, 5, 20),
    },
  ];
  const projetos = [
    {
      id: 1,
      title: "ACDR Advocacia",
      description: "Site institucional do escritório da advogada Audry Rocha.",
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
        title="Currículo"
        description="Giovanni Garcia Ribeiro de Souza, engenheiro de computação e desenvolvedor .net e SQL. Além de conhecimentos em Wordpress, Reac.js e Next.js, Docker, Python e Django. Saiba mais..."
      />
      <div className="bg-slate-100 py-12 sm:py-6">
        <div className="mx-auto bg-white max-w-7xl px-6 py-12 rounded-md shadow lg:px-8">
          {/** Resumo */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resumo
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Escrever resumo.
            </p>
          </div>
          {/** Experiencia profissional */}
          <div className="mx-auto max-w-2xl mt-8 lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experiência
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Trabalhos desenvolvidos e posições relevantes.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 border-t border-gray-200 lg:mx-0 lg:max-w-none ">
            {experiencias.map((xp) => (
              <div key={xp.id} className="flex items-start justify-between p-4">
                <div className="group relative ">
                  {/** Titulo */}
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {xp.title}
                  </h3>
                  {/** Identificacao empresa */}
                  <div className="flex items-start">
                    <p className="mt-5 text-base font-semibold leading-6 text-gray-600">
                      Empresa:
                    </p>
                    <p className="mt-5 pl-2 text-base leading-6 text-gray-600">
                      {xp.company}
                    </p>
                  </div>
                  {/** Periodo */}
                  <div className="flex items-start">
                    <p className="mt-5 text-base font-semibold leading-6 text-gray-600">
                      Período:
                    </p>
                    <p className="mt-5 pl-2 text-base leading-6 text-gray-600">
                      {xp.start.toLocaleDateString("pt-br")} -{" "}
                      {xp.end.toLocaleDateString("pt-br") !==
                      new Date().toLocaleDateString("pt-br")
                        ? xp.end.toLocaleDateString("pt-br")
                        : "atual"}
                    </p>
                  </div>
                  {/** Descricao das Atividades */}
                  <div className="flex flex-col">
                    <p className="mt-5 text-base font-semibold leading-6 text-gray-600">
                      Descição:
                    </p>
                    <p className="mt-5 pl-2 text-base leading-6 text-gray-600">
                      {xp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/** Projetos desenvolvidos */}
          <div className="mx-auto max-w-2xl mt-8 lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projetos
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Veja alguns dos projetos finalizados.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 border-t border-gray-200 lg:mx-0 lg:max-w-none ">
            {projetos.map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col items-start justify-between p-4"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
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
          {/** Formação academica */}
          <div className="mx-auto max-w-2xl mt-8 lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Formação
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Experiência acadêmica.
            </p>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 border-t border-gray-200 lg:mx-0 lg:max-w-none ">
            {formacoes.map((forma) => (
              <div
                key={forma.id}
                className="flex flex-col items-start justify-between p-4"
              >
                <div className="group relative">
                  {/** Titulo */}
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {forma.title}
                  </h3>
                  {/** Identificacao instituicao */}
                  <div className="flex items-start">
                    <p className="mt-5 text-base font-semibold leading-6 text-gray-600">
                      Instituição:
                    </p>
                    <p className="mt-5 pl-2 text-base leading-6 text-gray-600">
                      {forma.institution}
                    </p>
                  </div>
                  {/** Periodo */}
                  <div className="flex items-start">
                    <p className="mt-5 text-base font-semibold leading-6 text-gray-600">
                      Período:
                    </p>
                    <p className="mt-5 pl-2 text-base leading-6 text-gray-600">
                      {forma.start.toLocaleDateString("pt-br")} -{" "}
                      {forma.end.toLocaleDateString("pt-br") !==
                      new Date().toLocaleDateString("pt-br")
                        ? forma.end.toLocaleDateString("pt-br")
                        : "atual"}
                    </p>
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
