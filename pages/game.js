import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import getImages from '../services/generateImages';


const Game = ({ images }) => {
  const router = useRouter()

  const [answers, setAnswers] = useState([]);
  const [indexImg, setIndexImg] = useState(1);
  const [counter, setCounter] = useState(60);

  const handleVote = (answer) => {
    if (indexImg <= 10) {
      setAnswers([...answers, { answer, img: images[0] }]);
      images.shift();
      setIndexImg(prevIndex => prevIndex + 1)
    } 
  }
  

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0 || indexImg > 10) {
      router.push({
        pathname: '/resultat',
        query: { data: JSON.stringify(answers) }
      }, '/resultat')
    }
  }, [answers, counter])




  return (
    <div className="flex flex-col justify-center h-screen text-center">
      <span className="countdown font-mono text-4xl top-0 right-0 px-8 py-4 absolute">
        <span style={{"--value":counter}}></span>
      </span>
      <div>
        <h3 className='text-xl tracking-tight mb-2 badge badge-primary p-4 font-semibold tracking-wide'>{indexImg <= 10 ? indexImg : 10}/10</h3>
      </div>
      <h1 className="text-4xl font-extrabold leading-9 text-gray-900 mb-10">Cette image est elle réelle ?</h1>
      <div className='w-full'>
        <div className='max-w-2xl px-4 text-center m-auto'>
          <div className='skeleton rounded-none h-[50vh] rounded-t-lg relative overflow-hidden'>
            {
              images[0] &&
              <Image src={images[0]} layout='fill' objectFit="cover" priority alt='Photo à découvrir' />
            }
          </div>
          <div className='mb-12'>
            <button className="btn btn-success text-white rounded-none rounded-bl-lg w-3/6 text-2xl" onClick={() => handleVote("real")}>Réelle</button>
            <button className="btn btn-error text-white rounded-none rounded-br-lg w-3/6 text-2xl" onClick={() => handleVote("fake")}>IA</button>
          </div>
        </div>
      </div>
    </div>
  )

};

export async function getStaticProps() {


  return {
    props: {
      images: getImages(),
    },
  };
}





export default Game;
