export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black group">
        <button className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer text-lg group-hover:text-yellow-400">
          Click Me
        </button>
      </div>
      <div>
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          Download
        </button>
      </div>
      <div className="bg-gray-500 hover:bg-blue-600 ...">Hover Me</div>
      <div className="animate-ping h-6 w-6 ...">Spin</div>
      <div className="animate-bounce h-6 w-6 ...">Bounce</div>

      <a href="#">
        <svg></svg>
        <span className="sr-only sm:not-sr-only">User Profile</span>
      </a>
    </>
  );
}
