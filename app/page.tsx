// import Header from "@/components/my_components/header";

import Header from "@/components/my_components/header";
import MySideBar from "@/components/my_components/sidebar";
import AboutMe from "@/components/parts/aboutme";
import Awards from "@/components/parts/awards";
// import MySideBar from "@/components/my_components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header/>
      <main className="flex ">
        <MySideBar/>
        <div className="flex-1 p-10 ml-[300px]">
          <AboutMe/>
          <Awards/>
        </div>
      </main>
    </div>
  );
}
