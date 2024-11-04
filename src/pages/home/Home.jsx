import Navbar from '../../components/Navbar';
import { FaPlay } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import TitleCards from "../../components/TitleCards";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className='bg-black text-white'>
          <Navbar />
          {/* hero */}
      <section className='p-8 flex flex-col gap-4 place-items-start'>
        <img
          src='https://th.bing.com/th/id/OIP.wdG3R5tCatyc0UJPPQ8kVAHaLO?pid=ImgDet&w=179&h=271&c=7&dpr=1.3'
          alt='Transformers'
          className='w-full bg-gradient-to-r transparent to-black'
        />
        <p className='text-red-700 font-bold text-3xl'>
          N<span className='text-white '>series</span>{' '}
        </p>
        <h1 className='text-5xl font-bold uppercase'>Transformers</h1>
        <p className=' w-1/2 text-start'>
          An ancient struggle between two Cybertronian races, the heroic
          Autobots and the evil Decepticons, comes to Earth, with a clue to the
          ultimate power held by a teenager.
        </p>
        <article className='flex justify-evenly gap-4 place-items-center [&_button]:bg-white [&_button]:px-3 [&_button]:py-2 [&_button]:rounded-xl [&_button]:text-black [&_button]:hover:bg-[#ffffffbf]'>
          <button className='flex gap-2 justify-evenly place-items-center'>
            Play
            <FaPlay />
          </button>
          <button className='flex gap-2 justify-evenly place-items-center'>
            More Info
            <FaInfoCircle />
          </button>
        </article>
          </section>
          {/* hero */}
          {/* cards */}
          <TitleCards />
          {/* categories */}
          <TitleCards title={'Blockbuster movies'}/>
          <TitleCards title={'only on Netflix'}/>
          <TitleCards title={'Upcoming'}/>
          <TitleCards title={'Blockbuster'} />
          {/* footer */}
          <Footer/>
    </div>
  );
};

export default Home;
