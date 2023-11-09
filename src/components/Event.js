import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/event.css";
import "../styles/common.css";
import { useRef } from "react";

function Event() {
  const swiperRef = useRef();

  return (
    <section class="event">
      <div class="event-inner">
        <div class="event-header">
          <h2 class="event-tit">이벤트</h2>
          <span class="event-txt">인터파크에서 할인혜택을 꼭 챙기세요</span>
        </div>

        <div class="event-main">
          <div class="event-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(Swiper) => {
                swiperRef.current = Swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".event-slide-wrap .slide-next-bt",
                prevEl: ".event-slide-wrap .slide-prev-bt",
              }}
              className="event-slide"
            >
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e1.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e2.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e3.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e4.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e5.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e6.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="event-slide-item">
                    <a href="#" class="event-link">
                      <div class="event-img">
                        <img src="images/e7.jpg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <button
              class="slide-prev-bt"
              tabindex="0"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-36683bd98dd7369c"
              aria-disabled="false"
            >
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button
              class="slide-next-bt"
              tabindex="0"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-36683bd98dd7369c"
              aria-disabled="false"
            >
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="event-footer"></div>
      </div>
    </section>
  );
}
export default Event;
