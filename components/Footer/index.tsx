import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <h3 className="text-xl">Links Importantes</h3>
        <div className="flex items-center justify-center my-4 underline">
          <Link href="https://www.linkedin.com/in/giovanni-garcia-ribeiro-de-souza-0263269a" className="px-4">
            LinkedIn
          </Link>
          <Link href="https://github.com/giovannigrs/" className="px-4">
            Git Hub
          </Link>
        </div>
        <small>Eng. Giovanni Garcia R. de Souza &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
