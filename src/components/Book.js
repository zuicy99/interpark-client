import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/book.css";
import "../styles/common.css";
import { useRef } from "react";

function Book() {
  const swiperRef = useRef();

  return (
    <section class="book">
      <div class="book-inner">
        <div class="book-header">
          <h2 class="book-tit">오늘의 도서</h2>
          <span class="book-txt">지금 읽기 딱 좋은 책, 놓치지 마세요!</span>
        </div>

        <div class="book-main">
          <div class="book-category">
            <ul class="book-list">
              <li>
                <button class="book-cate-bt book-cate-bt-active">
                  MD’s Pick
                </button>
              </li>
              <li>
                <button class="book-cate-bt">베스트셀러</button>
              </li>
              <li>
                <button class="book-cate-bt">신간추천</button>
              </li>
              <li>
                <button class="book-cate-bt">특가할인</button>
              </li>
            </ul>
          </div>

          <div class="book-slide-wrap">
            <Swiper
              slidesPerView={5}
              spaceBetween={27}
              slidesPerGroup={5}
              onSwiper={(Swiper) => {
                swiperRef.current = Swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".book-slide-wrap .slide-next-bt",
                prevEl: ".book-slide-wrap .slide-prev-bt",
              }}
              className="book-slide"
            >
              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b1.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b1.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b2.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b3.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b4.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b5.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b3.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b1.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="swiper-slide">
                  <div class="book-slide-item">
                    <a href="#" class="book-link">
                      <div class="book-img">
                        <img src="images/b4.jpg" alt="" />
                      </div>

                      <div class="book-info">
                        <ul class="book-good-list">
                          <li>
                            <p class="book-good-info-tit">최애의 아이</p>
                          </li>
                          <li>
                            <span class="book-good-info-price">
                              <em>6,900</em>원
                            </span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <button
              class="slide-prev-bt book-swiper-bt-prev"
              tabindex="0"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-36683bd98dd7369c"
              aria-disabled="false"
            >
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button
              class="slide-next-bt book-swiper-bt-next"
              tabindex="0"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-36683bd98dd7369c"
              aria-disabled="false"
            >
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="book-footer">
          <button class="book-footer-bt">도서 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Book;
