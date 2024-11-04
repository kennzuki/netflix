import Navbar from '../../components/Navbar';
import { FaPlay } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import TitleCards from '../../components/TitleCards';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      {/* hero */}
      <section className='p-8 flex flex-col gap-4 place-items-start'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Nf4HBjqFmfH7RJWb-dJCPQHaEo%26pid%3DApi&f=1&ipt=4fd9e313b57f92c10c0cb6fe80bab8de59fc2f4b9094dc2866d34395fab549c7&ipo=images'
          alt='Transformers'
          className='w-full bg-gradient-to-r from-transparent to-blue-400 relative h-full'
        />
        {/* top */}
        <section className='absolute z-30 w-1/2 p-8 flex flex-col gap-3 place-items-start'>
          <p className='text-red-700 font-bold text-3xl'>
            N<span className='text-white '>series</span>{' '}
          </p>
          <h1 className='text-5xl font-bold uppercase'>Transformers</h1>
          <p className=' w-1/2 text-start'>
            An ancient struggle between two Cybertronian races, the heroic
            Autobots and the evil Decepticons, comes to Earth, with a clue to
            the ultimate power held by a teenager.
          </p>
          <article className='flex justify-evenly gap-4 place-items-center text-start w-1/2 [&_button]:bg-white [&_button]:px-3 [&_button]:py-2 [&_button]:rounded-xl [&_button]:text-black [&_button]:hover:bg-[#ffffffbf]'>
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
        <TitleCards title={'Blockbuster movies'} />
        <TitleCards title={'Only on Netflix'} />
        <TitleCards title={'Upcoming'} />
        <TitleCards title={'Blockbuster'} />
        {/* footer */}
        <Footer />
      </section>
    </div>
  );
};

export default Home;
