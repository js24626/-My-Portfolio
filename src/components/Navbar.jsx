
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
      <h1 className=" ml-8 text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"  >HM</h1>
      
      <div className="absolute top-4 right-8 flex items-center gap-4 text-2xl">
  <a
    href="https://www.linkedin.com/in/hassan-mehmood-6a0349250"
    target="_blank"
    rel="noopener noreferrer"
    className=" text-blue-400 cursor-pointer"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/js24626" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-white cursor-pointer"
  >
    <FaGithub />
  </a>
</div>
    </nav>
  );
};

export default Navbar;
