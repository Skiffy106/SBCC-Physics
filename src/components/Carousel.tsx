"use client";
import Image from "next/image"
import { useState } from "react"

interface CarousellImage {
    src: string;
    alt: string;
}

const images: CarousellImage[] = [
    { src: "/carousel/douglasSpeaking.png", alt: "Douglas speaking" },
    { src: "/carousel/physicsBuilding.png", alt: "Physics building" },
    { src: "/carousel/classroom1.png", alt: "Classroom" },
    { src: "/carousel/selfie1.png", alt: "Selfie" },
]

const Carousell: React.FC = () => {
    const [carousellIndex, setCarousellIndex] = useState(0);

    const handleClickRight = () => {
        if (carousellIndex === 3) {
            setCarousellIndex(0);
        } else setCarousellIndex(carousellIndex + 1);
        console.log(carousellIndex);
    }

    const handleClickLeft = () => {
        if (carousellIndex === 0) {
            setCarousellIndex(3);
        } else setCarousellIndex(carousellIndex - 1);
        console.log(carousellIndex);
    }

    const handleIndicatorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const index = parseInt(event.currentTarget.getAttribute("data-carousel-slide-to")!);
        setCarousellIndex(index);
    }

    return (
        <div id="default-carousel" className="relative w-full z-10" data-carousel="slide" >
            {/* Carousel items */}
            <div className="relative w-full z-10 h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[36rem] 2xl:h-[40rem] overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${carousellIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full">
                            <Image src={image.src} width={1024} height={768} priority className="h-full w-full object-cover" alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Slider controls */}
            <button type="button" onClick={handleClickLeft} className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" onClick={handleClickRight} className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            {/* Carousel indicators */}
            <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 bg-slate-50/50 rounded-full p-2">
                {images.map((_, index) => (
                    <button key={index} type="button" onClick={handleIndicatorClick} className={`w-3 h-3 rounded-full bg-slate-800 transition-all duration-500 ${carousellIndex === index ? "scale-125 opacity-70" : "scale-100 opacity-50"}`} aria-current={carousellIndex === index ? "true" : "false"} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
                ))}
            </div>
        </div >
    )
}

export default Carousell;