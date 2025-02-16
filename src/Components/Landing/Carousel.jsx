import React from 'react'
import {useState , useEffect} from 'react';



const Carousel = ({customClass}) => {

  const slides = [
          {
            image: "./src/assets/man2.jpg",
            title: "Sell just about anywhere in the world.",
            description: "Whether you have an online shop or need to accept payments remotely, we can help you get paid fast.",
            buttons: [
              {buttonText:"Sign Up"},
              {buttonText:"Connect With Us"},
            ],
          
          },
          {
            image: "./src/assets/wom.jpeg",
            title: "Secure payments. Smooth shopping.",
            description: "More ways to pay and more places to shop. Send money quickly and easily around the globe.",
            buttons: [
              {buttonText:"Sign Up"},
            ],
          },
        ];
      
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const prevSlide = () => {
          setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        };
      
        const nextSlide = () => {
          setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        };
      
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000); 
        return () => clearInterval(interval);
      }, [currentIndex]); // Depend on currentIndex

  return (
    <div>
      {/* Carosel */}
        <div className={`relative w-full mx-auto ${customClass}`}>
          {/* Image + Text Container */}
          <div className="relative overflow-hidden h-[30rem]">
            <img
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[30rem] object-cover transition-all duration-500"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex  text-start  text-black  px-6">
              <div className="text-start w-[25rem] md:min-w-[40rem] lg:max-w-[50rem] !ml-20  md:!my-auto lg:!my-auto">
                  <h2 className="lg:text-6xl lg:!mt-0 !mt-20 md:text-6xl text-5xl font-bold ">{slides[currentIndex].title}</h2>
                  <p className="mb-4 text-2xl font-semibold !mt-5">{slides[currentIndex].description}</p>
                  <section className="!mt-9">

                        {slides[currentIndex].buttons.map((btn, index) => (
                          <a key={index}
                             className=" bg-blue-600 hover:bg-blue-600 text-white font-medium !py-2 !px-4 !mr-3 rounded-4xl transition">
                            {btn.buttonText}
                          </a>
                        ))}

                  </section>
              </div>
            </div>
          </div>
                      
          {/* Previous Button */}
          <button onClick={prevSlide} className="absolute left-2 top-1/2 transform cursor-pointer -translate-y-1/2 w-10 h-10 bg-black text-white p-2 rounded-full">
            ❮
          </button>
                      
          {/* Next Button */}
          <button onClick={nextSlide} className="absolute right-2 top-1/2 transform cursor-pointer -translate-y-1/2 w-10 h-10 bg-black  text-white p-2 rounded-full">
            ❯
          </button>
                      
          {/* Dots Navigation */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Carousel