import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
      <div className="flex justify-between gap-4 bg-black text-white p-8 cursor-pointer">
          {/* left */}
          <div className="flex gap-4 place-items-center">
              <h1 className="font-bold text-5xl text-[#C9180E] uppercase">Netflix</h1>
              <ul className="flex gap-4 place-items-center">
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>New & Popular</li>
                  <li>My List</li>
                  <li>Browse by List</li>
              </ul>
          </div>
          {/* right */}
          <div className="flex gap-4 place-items-center justify-evenly">
              <CiSearch size={25} />
              <p className="">Children</p>
              
              <p className=""><IoMdArrowDropdown /> <span className="bg-[#191919] p-2 rounded-xl absolute z-10 hidden hover:visible">Sign Out</span></p>

          </div>
    </div>
  )
}

export default Navbar