/* eslint-classNamedisable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../styles/tour.css";
import "../styles/common.css";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Tour() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();
  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동하기 (axios 이용)
  const axiosJsonData = () => {
    axios
      .get("tour.json")
      .then((res) => {
        // 자료를 원하는데로 처리하겠다.
        // result를 화면에 출력하겠다.
        // 자료가 바뀌면 화면을 변경하는 기능을 생성하겠다.
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["tour_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch((error) => {
        // 에러가 발생했다.
        console.log("error : ", error);
      });
  };
  // 외부 데이터 연동하기 (fetch 이용)
  // const getJsonData = () => {
  //   fetch("recommend.json")
  //     .then((response) => {
  //       console.log("response : ", response);
  //       // 자료가 불러들여졌을 때
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log("result : ", result);
  //       // 자료를 원하는데로 처리하겠다.
  //       // result를 화면에 출력하겠다.
  //       // 자료가 바뀌면 화면을 변경하는 기능을 생성하겠다.
  //       let arr = [];
  //       for (let i = 0; i < result.total; i++) {
  //         const obj = result["good_" + (i + 1)];
  //         arr[i] = obj;
  //       }
  //       console.log(arr);
  //       setHtmlTag(arr);
  //     })
  //     .catch((error) => {
  //       // 에러가 발생했다.
  //       console.log("error : ", error);
  //     });
  // };

  //html이 준비가 되면 josn을 불러 들이겠다.
  // 1. 외부데이터 부르기 좋은 자리
  // 2. html 태그 참조 (useRef 할 때)
  // 3. window 참좀할 때
  // 4. window.addEventListener("scroll".charAt.apply.)
  // 5. cleanup 할 때 : 컴포넌트 화면에서 사라질 때 실생할 함수
  // 6. 타이머 만들고, 제거할 때
  // 컴포넌트가 화면에 보여질 때, 실행할 내용 기재 장소
  // use 는 Hook 이라고 합니다.
  // 원하는 시점을 감시하고 실행할 함수

  useEffect(() => {
    axiosJsonData();
  }, []);

  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>
          <span className="tour-txt">해외 여행은 인터파크다</span>
        </div>

        <div className="tour-main">
          <div className="tour-category">
            <ul className="tour-list">
              <li>
                <button className="tour-cate-bt tour-cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button className="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button className="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button className="tour-cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>
          <div className="tour-slide-wrap">
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
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <a href={item.url}>바로가기</a>
                    ) : (
                      <div className="tour-slide-item">
                        <a href={item.url} className="tour-link">
                          <div className="tour-img">
                            <img src={item.image} alt={item.desc} />
                          </div>
                          <div className="tour-info">
                            <ul className="tour-good-list">
                              <li className="tour-good-info">
                                <i className="tour-good-info-badge">
                                  {item.badge}
                                </i>
                              </li>
                              <li className="tour-good-info">
                                <p className="tour-good-info-benefit">
                                  {item.benefit}
                                </p>
                                <span className="tour-good-info-desc">
                                  {item.desc}
                                </span>
                              </li>
                              <li className="tour-good-info">
                                <span>
                                  <b>{item.price}</b>
                                  원~
                                </span>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="tour-footer">
          <a href="#!">투어 홈 바로가기</a>
        </div>
      </div>
    </section>
  );
}
export default Tour;
