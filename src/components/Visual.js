import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/visual.css";
import { useRef } from "react";

function Visual() {
  // js 코드 자리
  // jsx에 작성된 html 태그를 React에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="visual-slide"
        >
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={process.env.PUBLIC_URL + "images/v1.png"}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v2.jpg`}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="/images/v3.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v4.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v5.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v6.png" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          className="visual-slide-prev"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        ></button>
        <button
          className="visual-slide-next"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        ></button>
      </div>
    </section>
  );
}
export default Visual;
