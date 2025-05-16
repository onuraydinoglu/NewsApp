import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider from "../../../../shared/data/slider";

const CarouselSection = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className} text-black font-semibold text-lg mx-1">${index + 1}</span>`,
  };

  return (
    <Swiper
      loop={true} // <--- Loop
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slider.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt={`slide-${item.id}`} className="w-full h-[60vh] object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSection;
