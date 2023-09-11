import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "@/components/Logos/logos";
import LogosGithubIcon from "../Logos/GithubIcon";

export const Footer = () => {
  const links = [
    {
      id: 1,
      titulo: "Home",
      href: "/",
    },
    {
      id: 2,
      titulo: "Blog",
      href: "/blog",
    },
    {
      id: 3,
      titulo: "Contato",
      href: "/contato",
    },
    {
      id: 4,
      titulo: "Política de Privacidade",
      href: "/politica-de-privacidade",
    },
  ];
  return (
    <footer className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="py-6 px-4 grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col my-4 text-center items-center justify-center md:text-left md:justify-start md:items-start">
            <h3 className="text-xl">Grsouza</h3>
            <p className="text-gray-300">
              Serviços de Desenvolvimentos de sites Wordpress, otimização SEO de
              sites, customização sob demanda e reestruturação de sites
            </p>
            <p className="text-gray-300 pt-2">
              Eng. Giovanni Garcia R. de Souza
            </p>
            <small>&copy; GRsouza {new Date().getFullYear()}</small>
          </div>

          <div className="flex flex-col my-4 justify-start items-center">
            <h3 className="text-xl font-bold uppercase text-gray-400 py-2">
              Links
            </h3>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="link-hover py-2 px-4"
                target="_blank"
              >
                {link.titulo}
              </Link>
            ))}
          </div>

          <div className="flex flex-col my-4 justify-start items-center">
            <h3 className="text-xl font-bold uppercase text-gray-400 py-2">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/giovanni-garcia-ribeiro-de-souza-0263269a"
                className="bg-gray-300 rounded-full p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"
                target="_blank"
              >
                <LinkedinIcon width={"1.5em"} height={"1.5em"}></LinkedinIcon>
              </Link>
              <Link
                href="https://github.com/giovannigrs/"
                className="bg-gray-300 rounded-full p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"
                target="_blank"
              >
                <GithubIcon width={"1.5em"} height={"1.5em"}></GithubIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
