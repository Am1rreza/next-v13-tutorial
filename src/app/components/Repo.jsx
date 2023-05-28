import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/am1rreza/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repos = await response.json();

  return repos;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2 className="mb-1 font-bold">{repo.name}</h2>
      <p className="ml-2">{repo.description}</p>
      <div className="flex my-4">
        <div className="flex items-center mr-4 ml-2">
          <FaStar className="mr-2" />
          <span className="text-sm">{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center mr-4">
          <FaCodeBranch className="mr-2" />
          <span className="text-sm">{repo.forks_count}</span>
        </div>
        <div className="flex items-center mr-4">
          <FaEye className="mr-2" />
          <span className="text-sm">{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
