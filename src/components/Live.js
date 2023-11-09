/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/live.css";
import "../styles/common.css";
import { useRef } from "react";

function Live() {
  const swiperRef = useRef();

  return (
    <section class="live">
      <div class="live-inner">
        <div class="live-header">
          <img src="images/park_live.svg" alt="" />
        </div>

        <div class="live-main">
          <div class="live-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(Swiper) => {
                swiperRef.current = Swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".live-slide-wrap .slide-next-bt",
                prevEl: ".live-slide-wrap .slide-prev-bt",
              }}
              className="live-slide"
            >
              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l1.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l2.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l3.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l4.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l1.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l1.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="live-slide-item">
                  <a href="#" class="live-link">
                    <div class="live-contents">
                      <img src="images/l1.jpg" alt="" />
                      <div class="live-info">
                        <div class="live-info-bt">VOD</div>
                        <div class="live-info-tit">
                          진에어 동계 잔여석 &amp; 3월 출발 단독 특가! 방송
                          중에만 제휴카드로 결제시 15% 추가 할인 🎁
                        </div>
                      </div>
                      <div class="live-tv">
                        <p class="live-date">xx월 xx일 (화)</p>
                        <p class="live-time">xx:xx</p>
                      </div>
                      <div class="spec-wrap">
                        <img class="spec-img" src="images/ls1.png" />
                        <div class="spec-desc">
                          <p class="spec-title">
                            [실시간 항공권] 인천 ↔ 오사카
                          </p>
                          <li>
                            <span class="spec-price">
                              <b>81%</b>
                              <em>217,900</em>
                              <span>원</span>
                            </span>
                          </li>
                        </div>
                      </div>
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

        <div class="live-footer">
          <button class="live-footer-bt">인터파크 라이브 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Live;
