/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/tiket.css";
import "../styles/common.css";
import { useRef } from "react";

function Tour() {
  const swiperRef = useRef();

  return (
    <section class="tour">
      <div class="tour-inner">
        <div class="tour-header">
          <h2 class="tour-title">쇼핑추천</h2>
          <span class="tour-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div class="tour-main">
          <div class="tour-category">
            <ul class="tour-list">
              <li>
                <button class="tour-cate-bt tour-cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button class="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button class="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button class="tour-cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>

          <div class="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={27}
              slidesPerGroup={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-wrap .slide-next-bt",
                prevEl: ".tour-slide-wrap .slide-prev-bt",
              }}
              className="tour-slide"
            >
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="#" class="tour-link">
                    <div class="tour-img">
                      <img src="images/t1.jpg" alt="" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <p class="tour-good-info-desc-header">
                            닛폰바시역 도보 5분
                          </p>
                        </li>
                        <li>
                          <p class="tour-good-info-desc">
                            소테츠 그랜드 프레사 오사가 남바
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>34,000</em>원
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>

            <button class="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button class="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="recommend-footer"></div>
      </div>
    </section>
  );
}
export default Tour;
