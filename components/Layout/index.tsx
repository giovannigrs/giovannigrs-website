import { ReactNode } from "react";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Nav />
      <>{children}</>
      <Footer />
    </main>
  );
};
