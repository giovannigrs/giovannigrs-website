import { ReactNode } from "react";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full">
      <Nav />
      <>{children}</>
      <Footer />
    </main>
  );
};
