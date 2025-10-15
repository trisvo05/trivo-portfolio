// import Header from "@/components/my_components/header";

import Header from "@/components/my_components/header";
import MySideBar from "@/components/my_components/sidebar";
import AboutMe from "@/components/parts/aboutme";
import Awards from "@/components/parts/awards";
import Contact from "@/components/parts/contact";
import Experience from "@/components/parts/experience";
import Skills from "@/components/parts/skills";
import SkillsSection from "@/components/parts/skills";
// import Skills from "@/components/parts/skills";
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
          <Experience/>
          {/* <SkillsSection/>
           */}
          <Skills/>
          <Contact/>

        </div>
      </main>
    </div>
  );
}
