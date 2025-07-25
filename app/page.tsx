import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Apps from "@/app/components/Apps";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div>
      <div>
        <RightSideBar />
        <LeftSideBar />
        <Apps />
        <Footer />
      </div>
    </div>
  );
}
