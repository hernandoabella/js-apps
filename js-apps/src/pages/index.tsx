import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "/project1.png",
    link: "/proyecto1",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "/project2.png",
    link: "/proyecto2",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "/project3.png",
    link: "/proyecto3",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured projects={projects}/>
    </div>
  );
}
