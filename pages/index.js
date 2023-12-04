import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = ({ images }) => {


  return (
    <>

      <div className="hero min-h-screen bg-base-200">
          <a href="https://all-images.ai" target='_blank' className='fixed left-1/2 top-4 -translate-x-1/2 w-64 lg:hidden'>
          <img src="/logo.webp" alt="Logo"  />
          </a>
        <div className="hero-content grid grid-cols-12 lg:gap-8 ">

        <div className='col-span-6 lg:col-span-5 relative h-full lg:order-2 hidden lg:block'>
            <img src="/assets/robot.webp" className="absolute z-10 -top-20 floating" />
            <img src="/assets/socle.webp" className="absolute -top-20"  />
          </div>
          <div className='col-span-12 lg:col-span-7 lg:order-1'>
            {/* <div className="relative h-14 w-40">
            <Image src="/logo.webp" alt="Logo" layout={'fill'} objectFit={'contain'} />
          </div> */}
            <div className='flex items-end'>
              <h1 className="text-5xl font-bold">IA ou pas IA ? 🤔
              </h1>
              <div className='items-center hidden lg:flex'>
              <small className='ms-2'>by</small>
              <a target='_blank' href="https://all-images.ai">
                <img src="/logo.webp" className='w-40 ms-2' alt="logo All Images" />
              </a>
              </div>
            </div>

            <p className="py-10 leading-8 text-xl line">Bienvenue dans notre mini jeu captivant ! Êtes-vous prêt à relever le défi de discerner si une image est générée par une intelligence artificielle ou non ? Mettez vos compétences à l'épreuve et découvrez jusqu'où votre instinct peut vous mener. Attention, vous n'avez qu'une minute !</p>
            <Link href="/game">
              <button className="btn btn-primary btn-lg w-full sm:w-56" >
                Jouer maintenant !
              </button>
            </Link>
          </div>

       
        </div>
      </div>
    </>

  )

};

export default Home;
