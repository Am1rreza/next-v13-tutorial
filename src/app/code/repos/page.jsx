import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/am1rreza/repos");
  const repos = await response.json();

  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="max-w-screen-md mx-auto py-8">
      <h2 className="text-2xl font-bold">Repositories</h2>
      <ul className="">
        {repos.map((repo) => {
          return (
            <li key={repo.id} className="my-8">
              <Link
                className="block bg-white text-[#333] p-4 rounded shadow-md transition-all hover:-translate-y-1"
                href={`/code/repos/${repo.name}`}
              >
                <h3 className="text-xl font-bold">{repo.name}</h3>
                <p className="text-[#666]">{repo.description}</p>
                <div className="flex justify-between mt-4 text-[#999]">
                  <span className="flex items-center">
                    <FaStar className="mr-2" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center">
                    <FaCodeBranch className="mr-2" /> {repo.forks_count}
                  </span>
                  <span className="flex items-center">
                    <FaEye className="mr-2" /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReposPage;
