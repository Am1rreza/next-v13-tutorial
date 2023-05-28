import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-[#0047ab] p-2 mb-4 border-b-4">
      <div className="max-w-screen-lg mx-auto px-1">
        <div className="text-center mb-2">
          <Link className="text-2xl font-bold" href={"/"}>
            Traversy Media
          </Link>
        </div>
        <div>
          <Link className="mx-2" href={"/about"}>
            About
          </Link>
          <Link className="mx-2" href={"/about/team"}>
            Our Team
          </Link>
          <Link className="mx-2" href={"/code/repos"}>
            Code
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
