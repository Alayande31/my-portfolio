import { HomePage, ContactPage, AboutPage, ProjectPage } from "./";
export const allPages = [
  { label: "Home", path: "/", view: HomePage },
  { label: "About", path: "/about", view: AboutPage },
  { label: "Projects", path: "/projects", view: ProjectPage },
  { label: "Contact", path: "/contact", view: ContactPage },
];
