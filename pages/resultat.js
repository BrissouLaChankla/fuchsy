import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard.js";

function Resultat({ images }) {
    const router = useRouter();
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if(router.query.data) {
            setAnswers(JSON.parse(router.query.data))
        } else {
            router.push('/')
            return;
        }
        // setAnswers([{ answer:"fake", img: "/assets/f/170008628132.webp"}, { answer:"real", img: "/assets/f/170008628132.webp"}])

        for (const answer of JSON.parse(router.query.data)) {
            if(answer.answer === "fake" && images.f.includes(answer.img) || answer.answer === "real" && images.r.includes(answer.img)) {
                setScore(prev => prev + 1)
            }
        }
    }, [])


   
    const resultat = answers.map((answer, i) => {
        let isCorrect = false;
        if(answer.answer === "fake" && images.f.includes(answer.img) || answer.answer === "real" && images.r.includes(answer.img)) {
            isCorrect = true;
        }
        return(<ResultCard key={i} isCorrect={isCorrect} src={answer.img} />)
    });

    return (
        <div className="flex flex-col justify-center min-h-screen py-8 text-center">
            <h1 className="text-4xl font-extrabold leading-9 text-gray-900 mb-10">Résultat</h1>
            <div className='w-full'>
                <div className='max-w-6xl px-4 text-center m-auto'>
                    <h2 className="text-2xl leading-9 text-gray-900 mb-10">Bravo, vous avez eu {score}/10, voici le résultat :</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
                    {resultat}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
  
  
    return {
      props: {
        images: data,
      },
    };
  }

export default Resultat; 