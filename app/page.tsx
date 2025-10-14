// import Header from "@/components/my_components/header";

import Header from "@/components/my_components/header";
import MySideBar from "@/components/my_components/sidebar";
// import MySideBar from "@/components/my_components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <main className="flex ">
        <MySideBar/>
      </main>
    </div>
  );
}
