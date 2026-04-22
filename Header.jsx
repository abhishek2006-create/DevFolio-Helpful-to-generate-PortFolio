import React, { useState } from "react";
import share from "./assets/share.svg";
import resetIcon from "./assets/reset.png";

export default function Header({setUserData}) {
  const [showReset, setShowReset] = useState(false);

  const resetData = ()=>{
      setShowReset(false)
      setUserData({
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
    })
    }

  return (
    <div className="flex-1 bg-[#0a0a0a]">
      <header className="fixed top-0 left-0 w-full h-16 px-6 flex items-center justify-between border-b border-[#2a2a2a] bg-[#141414] z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-white">
            D
          </div>
          <h1 className="text-xl font-bold text-white">DevFolio</h1>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setShowReset(true)}>
            <img
              src={resetIcon}
              alt="reset"
              className="grayscale invert cursor-pointer"
            />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white cursor-pointer">
            <img src={share} className="h-5 invert" />
            <span>Share</span>
          </button>
        </div>
      </header>

      {showReset && (
        <div className=" z-100 fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-[#141414] p-6 rounded-lg text-white">
            <p>Are you sure you want to reset?</p>

            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 border rounded hover:bg-sky-600 cursor-pointer"
                onClick={resetData}

              >
                Haan
              </button>

              <button
                onClick={() => setShowReset(false)}
                className="px-4 py-2 border rounded hover:bg-sky-600 cursor-pointer"
              >
                Nhi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
