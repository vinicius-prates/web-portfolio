import me from "../assets/yo.jpg";
export const Landing = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white p-10">
      <div className="flex flex-col tracking-wider gap-4 justify-center items-center ">
        <div>
          <p className=" tracking-wide text-4xl text-left">Welcome, i'm </p>
          <p className=" tracking-wide text-teal-400 text-4xl text-left">
            vinicius-prates!
          </p>
        </div>
        <div className=" w-72 h-72 rounded-2xl hover:shadow-2xl transition  shadow-md shadow-teal-600/80">
          <img src={me} alt="Me" className="rounded-2xl w-72 h-72" />
        </div>
        <a href="https://github.com/vinicius-prates" target="_blank" className="p-1 bg-teal-500 rounded-md">
          <div className=" text-black  tracking-widest text-ms flex flex-row gap-2 justify-center items-center">
            <p>Check my GitHub</p>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5"/>
          </div>
        </a>
      </div>
    </div>
  );
};
