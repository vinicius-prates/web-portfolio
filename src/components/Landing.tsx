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
      </div>
    </div>
  );
};
