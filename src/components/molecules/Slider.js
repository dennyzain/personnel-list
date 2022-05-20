import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import Card from '../atoms/Card';

export default function Slider() {
  const users = useSelector((state) => state.data.users);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <Swiper
          ref={sliderRef}
          slidesPerView={4}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
        >
          {users.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="hidden lg:flex lg:flex-row justify-center mt-4">
          <button
            type="button"
            onClick={handlePrev}
            className="bg-[#eaeaea] animate-hover px-[11px] h-[32px] mr-[25px] hidden md:block"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="pr-1" />
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-bg-[#eaeaea] animate-hover px-[11px] h-[32px] mr-[25px] hidden md:block"
          >
            Next
            <FontAwesomeIcon icon={faAngleRight} className="pl-1" />
          </button>
        </div>
      </div>
      <div className="block lg:hidden">
        {users.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </>
  );
}
