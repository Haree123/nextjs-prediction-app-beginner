"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    push(`/prediction/${name}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border border-slate-300 rounded-md px-24 py-16">
        <p className="text-lg font-mono">Enter your Name</p>

        <form onSubmit={handleSubmit}>
          <input
            className="mt-5 h-10 w-full rounded-lg font-mono text-black"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="border border-slate-300 disabled:border-slate-300 hover:border-indigo-300 text-sm mt-5 h-10 w-full font-mono"
            type="submit"
            disabled={!Boolean(name.length > 3)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
