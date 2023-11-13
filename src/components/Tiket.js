/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tiket.css";
import "../styles/common.css";
import { useRef } from "react";

function Tiket() {
  const swiperRef = useRef();

  return (
    <section class="tiket">
      <div class="tiket-inner">
        <div class="tiket-header">
          <h2 class="tiket-title">티켓 랭킹</h2>
          <span class="tiket-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>

        <div class="tiket-main">
          <div class="tiket-category">
            <ul class="tiket-list">
              <li>
                <button class="tiket-cate-bt tiket-cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button class="tiket-cate-bt">뮤지컬</button>
              </li>
              <li>
                <button class="tiket-cate-bt">콘서트</button>
              </li>
              <li>
                <button class="tiket-cate-bt">스포츠</button>
              </li>
              <li>
                <button class="tiket-cate-bt">전시/행사</button>
              </li>
              <li>
                <button class="tiket-cate-bt">클래식/무용</button>
              </li>
              <li>
                <button class="tiket-cate-bt">아동/가족</button>
              </li>
              <li>
                <button class="tiket-cate-bt">연극</button>
              </li>
              <li>
                <button class="tiket-cate-bt">레저/캠핑</button>
              </li>
            </ul>
          </div>

          <div class="tiket-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tiket-slide-wrap .slide-next-bt",
                prevEl: ".tiket-slide-wrap .slide-prev-bt",
              }}
              className="tiket-slide"
            >
              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tiket-slide-item">
                  <a href="#" class="tiket-link">
                    <div class="tiket-img">
                      <img src="images/tk1.gif" alt="" />
                    </div>
                    <div class="ticket-info">
                      <ul class="ticket-good-list">
                        <li>
                          <p class="ticket-good-info-tit">
                            태양의서커스 〈루치아〉 - 부산
                          </p>
                        </li>
                        <li>
                          <p class="ticket-good-info-desc">
                            신세계 센텀시티 내 빅탑
                          </p>
                        </li>
                        <li>
                          <span class="ticket-good-info-date">
                            2024.01.13 - 2024.02.04
                          </span>
                        </li>
                        <li>
                          <span class="ticket-good-info-boxb">좌석우위</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>

            <button class="slide-prev-bt tiket-swiper-bt-prev">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button class="slide-next-bt tiket-swiper-bt-next">
              <img src="images/slider_arrow.svg " alt="" />
            </button>
          </div>
        </div>

        <div class="tiket-footer">
          <button class="book-footer-bt">티켓 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Tiket;
