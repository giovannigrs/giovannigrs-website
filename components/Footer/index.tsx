import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "@/components/Logos/logos";
import LogosGithubIcon from "../Logos/GithubIcon";

export const Footer = () => {
  return (
    <footer className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="py-6 grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col my-4">
            <h3 className="text-xl">Grsouza</h3>
            <p className="text-gray-300">
              Serviços de Desenvolvimentos de sites Wordpress, otimização SEO de
              sites, customização sob demanda e reestruturação de sites
            </p>
            <p className="text-gray-300 pt-2">Eng. Giovanni Garcia R. de Souza</p>
            <small>
              &copy; GRsouza{" "} {new Date().getFullYear()}
            </small>
          </div>

          <div className="flex flex-col items-center justify-center my-4">
            <h3 className="text-xl font-bold uppercase text-gray-400">Links</h3>
            <Link
              href="https://www.linkedin.com/in/giovanni-garcia-ribeiro-de-souza-0263269a"
              className="link-hover px-4"
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/giovannigrs/" className="link-hover px-4">
              Git Hub
            </Link>
            <Link href="/politica-de-privacidade" className="link-hover px-4">
              política&nbsp;de&nbsp;privacidade
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 my-4">
            <h3 className="text-xl font-bold uppercase text-gray-400">Redes Sociais</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/giovanni-garcia-ribeiro-de-souza-0263269a"
                className="bg-gray-300 rounded-full p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"
              >
                <LinkedinIcon width={"2em"} height={"2em"}></LinkedinIcon>
              </Link>
              <Link href="https://github.com/giovannigrs/" className="bg-gray-300 rounded-full p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
                <GithubIcon width={"2em"} height={"2em"}></GithubIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
