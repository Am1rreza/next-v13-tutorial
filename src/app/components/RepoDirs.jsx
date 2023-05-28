import Link from "next/link";

async function fetchRepoContent(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/am1rreza/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();

  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContent(name);

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {contents &&
          contents.map((content) => {
            return (
              <li key={content.path}>
                <Link href={`code/repos/${name}/${content.path}`}>
                  {content.path}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RepoDirs;
