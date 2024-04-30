import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const appPage = () => {
  return (
    <>
      {/* <div className="p-10 dark:bg-slate-900">
        <div
          className="flex fixed right-5 top-5 justify-items-center items-center center place-content-center
"
        >
          <a
            href="https://hernandoabella.gumroad.com/l/hoocc"
            target="_blank"
            className="float right"
          >
            <button className="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
              </svg>
              Download All Apps
            </button>
          </a>
        </div>
      </div> */}
      <Header />
      {/* <Projects /> */}
      <Footer />
    </>
  );
};

export default appPage;
