import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border border-slate-300 rounded-md px-24 py-16">
        <p className="text-lg font-mono">Enter your Name</p>

        <form>
          <input className="mt-5 h-10 w-full rounded-lg font-mono text-black" />
          <button className="border border-slate-300 hover:border-indigo-300 text-sm mt-5 h-10 w-full font-mono">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
