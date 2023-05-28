const RepoPage = ({ params }) => {
  return (
    <div className="border border-[#ccc] rounded p-4 m-4 bg-white text-[#333]">
      <h2 className="text-xl font-bold">{params.name}</h2>
      <p>Repo Details</p>
    </div>
  );
};

export default RepoPage;
