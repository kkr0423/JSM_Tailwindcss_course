export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black group">
        <button className="py-2 px-4 bg-blue-500 text-white rounded cursor-pointer text-lg group-hover:text-yellow-400">
          Click Me
        </button>
      </div>
      <div className="bg-gray-500 hover:bg-blue-600 ...">Hover Me</div>
    </>
  );
}
