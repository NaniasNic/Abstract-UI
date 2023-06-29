import { register } from "swiper/element";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Header } from "./components/Header";

import { data } from "./database/data";

export default function App() {
  return (
    <div className="w-full">
      <Header />

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >        
        {data.map((item) => (
          <SwiperSlide key={item.id} className="items-center flex justify-center">          
            <div className="absolute flex flex-col justify-center items-center gap-6">
              <h1 className="text-white text-9xl tracking-[40px] uppercase font">Abstract</h1>

              <hr className="w-48 bg-white" />

              <h2 className="text-white text-2xl uppercase">Designing for the future</h2>

              <button className="border-2 mt-12 px-16 py-1 rounded-full">
                <h1 className="text-white text-base font-medium uppercase">Join Us</h1>
              </button>
            </div>

            <img src={item.img} alt="" className="w-full h-[753px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>      
    </div>
  )
}