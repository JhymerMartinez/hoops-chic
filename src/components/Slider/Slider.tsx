import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export const Slider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F7F5F5",
        height: "500px",
      }}
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            fill
            alt="Nature"
            src="https://picsum.photos/id/15/1280/720"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt="Nature"
            src="https://picsum.photos/id/29/1280/720"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt="Nature"
            src="https://picsum.photos/id/347/1280/720"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            alt="Nature"
            src="https://picsum.photos/id/926/1280/720"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
