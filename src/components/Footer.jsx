import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
      <div className="p-12 m-auto flex flex-col gap-6">
          <section className="flex gap-2 place-items-center text-3xl">
              <FaFacebook />
              <FaSquareInstagram />
              <FaXTwitter />
              <FaYoutube/>
          </section>
          <section className="grid grid-cols-4 grid-rows-4 underline text-start mt-8">
              <p className="">FAQ</p>
              <p className="">Help Center</p>
              <p className="">Account</p>
              <p className="">Media Center</p>
              <p className="">Investor Relations</p>
              <p className="">Jobs</p>
              <p className="">Ways to watch</p>
              <p className="">Terms of use</p>
              <p className="">Privacy</p>
              <p className="">Cookie Prefernce</p>
              <p className="">Contact Us</p>
              <p className="">Leagl notices</p>
          </section>
          <p className="">© 1998-2004 All rights reserved</p>
    </div>
  )
}

export default Footer