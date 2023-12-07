import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ResultCard from "../components/ResultCard.js";
import getImages from "../services/hello.js";
import Link from "next/link.js";
export const revalidate = false;
function Resultat({ images }) {
    const router = useRouter();
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (router.query.data) {
            setAnswers(JSON.parse(router.query.data))
        } else {
            router.push('/')
            return;
        }
        // setAnswers([{ answer:"fake", img: "/assets/f/170008628132.webp"}, { answer:"real", img: "/assets/f/170008628132.webp"}])

        for (const answer of JSON.parse(router.query.data)) {
            if (answer.answer === "fake" && images.f.includes(answer.img) || answer.answer === "real" && images.r.includes(answer.img)) {
                setScore(prev => prev + 1)
            }
        }

    }, [])




    const resultat = answers.map((answer, i) => {
        let isCorrect = false;
        if (answer.answer === "fake" && images.f.includes(answer.img) || answer.answer === "real" && images.r.includes(answer.img)) {
            isCorrect = true;
        }
        return (
            <div key={i}>
                <ResultCard  isCorrect={isCorrect} src={answer.img} />
                <small>Cette photo est 
                {
                    isCorrect ?
                    <span className="uppercase">{answer.answer === "real" ? " réelle" : " fake"}</span>  
                    :
                    <span className="uppercase">{answer.answer === "real" ? " fake" : " réelle"}</span> 
                }
                </small>
            </div>
        )
    });

    return (
        <>            <div className="sticky top-0 end-0 bg-base-200 py-4 rounded-b-lg z-50 flex items-center justify-center gap-4">
                        <h3 className="text-center font-semibold">📣 Partagez votre résultat :</h3>
                        <div className="sharing-buttons flex flex-wrap gap-3">
                            <a className="btn btn-xs sm:btn-sm bg-[#3b5998] hover:bg-[#3b5998] text-white" target="_blank" rel="noopener" href={`https://www.facebook.com/sharer/sharer.php?u=https://game.all-images.ai`} aria-label="Share on Facebook" draggable="false">
                                <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                    <title>Facebook</title>
                                    <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z">
                                    </path>
                                </svg>
                            </a>
                            <a className="btn btn-xs sm:btn-sm bg-[#1da1f2] hover:bg-[#1da1f2] text-white"
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`J'ai essayé le jeu d'@all_images_ai où il faut différencier des images réelles et celles générées par IA 🤖                   
Voici mon score: ${score}/10.

Venez tester : https://game.all-images.ai 

#allimages  #ai #ia`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Twitter" draggable="false"
                            >
                                <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                    <title>Twitter</title>
                                    <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z">
                                    </path>
                                </svg>
                            </a>

                            <a className="btn btn-xs sm:btn-sm bg-[#0e76a8] hover:bg-[#0e76a8] text-white" target="_blank" rel="noopener" href="https://linkedin.com/shareArticle?url=game.all-images.ai" aria-label="Share on Linkedin">
                                <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                    <title>Linkedin</title>
                                    <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z">
                                    </path>
                                </svg>
                            </a>
                        </div>
            </div>
        <div className="flex flex-col justify-between min-h-screen pt-8 text-center">

            
            <div className="fixed start-0 top-1/2 -translate-y-1/2 -translate-x-1/3 rotate-90 text-lg hidden xl:block">👨‍💻 par <a href="https://brice-eliasse.com" className="link link-error no-underline" target="_blank">Brice Eliasse</a></div>
            <h1 className="text-4xl font-extrabold leading-9 text-gray-900 mb-6">Résultat</h1>
            <div>
                <div className='w-full'>
                    <div className='max-w-6xl px-4 text-center m-auto'>
                        <h2 className="text-2xl leading-9 text-gray-900 mb-8 text">Bravo, vous avez eu {score}/10, voici le résultat :</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                            {resultat}
                        </div>
                    </div>
                </div>
                <div>

                    <Link href="/" >
                        <button className="btn btn-primary text-white btn-xl btn-wide mt-10 mb-6 md:mb-0 text-lg">Retentez votre chance !</button>
                    </Link>
                </div>
            </div>
            <div className="bg-base-200 mt-8 py-4 ">
                <div className="max-w-6xl flex flex-col md:flex-row justify-between m-auto text-left px-6 xl:px-0 items-center">
                        <div className="flex items-center mb-6 md:mb-0">
                            Images générées via
                            <a target='_blank' className="ms-2" href="https://all-images.ai">
                                <img src="/logo.webp" className="h-8" alt="Logo all images" />
                            </a>
                          
                        </div>
                        <div className="text-lg text-center md:text-end">👨‍💻 par <a href="https://brice-eliasse.com" className="link link-error no-underline" target="_blank">Brice Eliasse</a></div>
                </div>

            </div>
            
        </div>
        </>

    )
}

export async function getStaticProps() {

    const data = getImages();

    return {
        props: {
            images: data,
        },
    };
}

export default Resultat; 