import LeftSideBar from "@/app/components/LeftSideBar";
import Apps from "@/app/components/Apps";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <LeftSideBar />
        <Apps />
        <Footer />
      </div>
    </div>
  );
}
