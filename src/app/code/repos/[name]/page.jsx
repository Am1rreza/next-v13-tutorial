import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params }) => {
  return (
    <div className="border border-[#ccc] rounded p-4 m-4 bg-white text-[#333]">
      <Link
        className="inline-block bg-[#0070f3] text-white py-2 px-4 border-0 rounded text-sm mb-5 cursor-pointer transition-all hover:bg-[#0058b7]"
        href={"/code/repos"}
      >
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading directoris...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
