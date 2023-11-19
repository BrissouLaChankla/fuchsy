import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import getImages from '../services/hello';


const Home = ({ images }) => {
  const router = useRouter()

  const [answers, setAnswers] = useState([]);
  const [indexImg, setIndexImg] = useState(1);

  if(indexImg > 10) {
    router.push({
      pathname: '/resultat',
      query: {data : JSON.stringify(answers)}
  }, '/resultat')
  }

  const handleVote = (answer) => {
    setAnswers([...answers, { answer, img: images[0]}]);
    images.shift();
    setIndexImg(() => indexImg + 1)
  }

 


  return (
    <div className="flex flex-col justify-center h-screen text-center">
      <h3 className='text-xl tracking-tight mb-2'>{indexImg}/10</h3>
      <h1 className="text-4xl font-extrabold leading-9 text-gray-900 mb-10">Cette image est elle réelle ?</h1>
      <div className='w-full'>
        <div className='max-w-2xl px-4 text-center m-auto'>
          <div className='skeleton rounded-none h-[50vh] rounded-t-lg relative overflow-hidden'>
            <Image src={images[0]} layout='fill' objectFit="cover" priority alt='Photo à découvrir' />
          </div>
          <div className='mb-12'>
            <button className="btn btn-success text-white rounded-none rounded-bl-lg w-3/6 text-2xl" onClick={() => handleVote("real")}>Réelle</button>
            <button className="btn btn-error text-white rounded-none rounded-br-lg w-3/6 text-2xl" onClick={() => handleVote("fake")}>Fake</button>
          </div>
        </div>
      </div>
    </div>
  )

};

export async function getStaticProps() {

   const data = getImages();

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffled = shuffle([...data.r, ...data.f]).slice(0, 10);

  return {
    props: {
      images: shuffled,
    },
  };
}





export default Home;
