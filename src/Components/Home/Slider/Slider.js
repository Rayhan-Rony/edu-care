import React, { useRef } from 'react';
import aga from '../../../Assets/aga.webp'
import agaa from '../../../Assets/agaa.webp'
import hope from '../../../Assets/hope.jpg'
import pry from '../../../Assets/Pry.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './styles.css';




const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='min-h-screen lg:block hidden '>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}

                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"

            >

                <SwiperSlide><img className='w-full' src={aga} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={agaa} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={hope} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src={pry} alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
                <div className='absolute top-96  z-10'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;