import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between bg-[#ffbd88] ">
      <a href="/" className="">
      <img className="h-16 w-16" src="https://static.vecteezy.com/system/resources/previews/014/723/086/original/mac-n-cheese-line-icon-vector.jpg" alt="" />
      </a>
      <a href="/Get" className="h-16 w-32 bg-[#ffbd88] transition-opacity ease-in duration-200 opacity-100 hover:opacity-70 text-center flex items-center justify-center text-white">
        GET
      </a>
      <a href="/Post" className="h-16 w-32 bg-[#ffbd88] transition-opacity ease-in duration-200 opacity-100 hover:opacity-70 text-center flex items-center justify-center text-white">
        Add Recipe
      </a>
      <a href="/Put" className="h-16 w-32 bg-[#ffbd88] transition-opacity ease-in duration-200 opacity-100 hover:opacity-70 text-center flex items-center justify-center text-white">
        PUT
      </a>
      <a href="/Delete" className="h-16 w-32 bg-[#ffbd88] transition-opacity ease-in duration-200 opacity-100 hover:opacity-70 text-center flex items-center justify-center text-white">
        DELETE
      </a>
    </nav>
  );
};
