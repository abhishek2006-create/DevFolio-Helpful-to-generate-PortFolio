import React, { useState } from "react";
import Header from "./Header";
import Side from "./Sidebar/Side";
import PortFolio from "./MainContent/PortFolio";
import Footer from "./Footer";

export default function App() {
  const [userData, setUserData] = useState({
    name: "Abhishek Bairwa",
    bio: "Frontend Developer & Creative Designer",
    tagline: "B.Tech in CSE , IIT Indore",
    skills: ["React", "Html", "Css", "Tailwind", "JavaScript", "C++"],
    projects: [
      {
        title: "DevFolio",
        description: "An interactive portfolio builder for developers.",
        url: "https://github.com/abhishek2006-create",
        image:
          "https://imgs.search.brave.com/8kQjrRzQuWbUL6cbq9lMcSmPG4OL_-yRZavImqmQ_8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzA4NDU5/ODgvNDI2NzYvaS80/NTAvZGVwb3NpdHBo/b3Rvc180MjY3NjUy/MjQtc3RvY2stcGhv/dG8td2ViLWRldmVs/b3BtZW50LWluc2Ny/aXB0aW9uLWxhcHRv/cC1jb2RlLmpwZw",
      },
    ],
    social: {
      github: "https://github.com/abhishek2006-create",
      email: "cse250001002@iiti.ac.in",
      linkedin: "https://www.linkedin.com/in/abhishek-bairwa",
      insta: "https://www.instagram.com/2410_abhishek.01",
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Header setUserData={setUserData} />

      <main className="flex flex-1 pt-16 relative">
        <Side userData={userData} setUserData={setUserData} />
        <div className="flex-1 lg:ml-[450px] p-4 lg:p-12 flex justify-center">
          <PortFolio userData={userData}  />
        </div>
      </main>

      <div className="lg:ml-[450px]">
        <Footer />
      </div>
    </div>
  );
}
