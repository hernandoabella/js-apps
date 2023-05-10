import LearnCard from "../LearnCard/LearnCard";

const Learn = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-bold text-4xl mb-8">Aprende</h1>
      <p className="text-center text-gray-500 text-lg mb-10">
        ¡Aprende desarrollo web con nosotros! Ofrecemos cursos y recursos en HTML,
        CSS, JavaScript y Git, diseñados para ayudarte a empezar o mejorar tus habilidades
        en el desarrollo web. Ya seas un principiante o un experto, estamos aquí para
        apoyarte en tu camino hacia el éxito en el mundo del desarrollo web.
      </p>
      <div className="flex flex-wrap justify-center">
        <LearnCard
          title={"HTML"}
          description={"Aprende a crear contenido web con HTML."}
          image={"/html5-original.svg"}
          url={"/html-course"}
        />
        <LearnCard
          title={"CSS"}
          description={"Aprende a estilizar tus páginas web con CSS."}
          image={"/css3-original.svg"}
          url={"/css-course"}
        />
        <LearnCard
          title={"JavaScript"}
          description={"Aprende a programar interactividad en tus páginas web con JavaScript."}
          image={"/javascript-original.svg"}
          url={"/javascript-course"}
        />
        <LearnCard
          title={"Git"}
          description={"Aprende a controlar versiones y colaborar con otros desarrolladores usando Git."}
          image={"/git-original.svg"}
          url={"/git-course"}
        />
      </div>
    </div>
  );
};

export default Learn;
