import { HomePage } from "./home"
import { AboutPage } from "./about"
import { ProjectPage } from "./project"
import { ContactPage } from "./contact"
import { NavBar } from "../components/NavBar"
import type { ReactNode } from "react";
import { Footer } from "../components/footer"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />  
        </>
    );
};
export {HomePage,AboutPage,ProjectPage,ContactPage,Layout}