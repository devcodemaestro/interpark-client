/* eslint-disable jsx-a11y/anchor-is-valid */

import { BtCate } from "../components/ui/buttons";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/book.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import styled from "@emotion/styled";
import { InnerArea, SectionTag } from "./layout/layout";

function Recommend() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();
  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동하기 (axios 이용)
  const axiosJsonData = () => {
    axios
      .get("book.json")
      .then(function (res) {
        console.log(res.data);

        const result = res.data;
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["good_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
        const dmObj = {
          total: 10,
          good_1: {
            image: "images/book1.jpg",
            title: "세계미래보고서 2024-2034",
            price: "17550",
            url: "a.html",
          },
          good_2: {
            image: "images/book2.jpg",
            title: "[그린키즈] 룰루랄라 사운드북 모음전",
            price: "8400",
            url: "a.html",
          },
          good_3: {
            image: "images/book3.jpg",
            title: "어스본 대표사운드북 모음 낱권선택",
            price: "17100",
            url: "a.html",
          },
          good_4: {
            image: "images/book4.jpg",
            title: "고양이 해결사 깜냥 6",
            price: "10800",
            url: "a.html",
          },
          good_5: {
            image: "images/book5.jpg",
            title: "재개발·재건축 투자 무작정 따라하기",
            price: "24750",
            url: "a.html",
          },
          good_6: {
            image: "images/book6.jpg",
            title: "옷뜨는 김뜨개의 쉬운 니트 레시피",
            price: "21600",
            url: "a.html",
          },
          good_7: {
            image: "images/book7.jpg",
            title: "어린왕자 행성b612 소포 세트",
            price: "9900",
            url: "a.html",
          },
          good_8: {
            image: "images/book8.png",
            title: "리딩게이트 No.1 영어독서 프로그램 12개월 이용권",
            price: "240000",
            url: "a.html",
          },
          good_9: {
            image: "images/book9.jpg",
            title: "오감발달 첫 놀잇감",
            price: "128900",
            url: "a.html",
          },
          good_10: {
            image: "images/book10.jpg",
            title: "흔한남매의 흔한 호기심 10",
            price: "12600",
            url: "a.html",
          },
        };
        let arr = [];
        for (let i = 0; i < dmObj.total; i++) {
          const obj = dmObj["good_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
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

  // html 이 준비가 되면, json 을 불러들이겠다.
  // 1. 외부데이터 부르기 좋은 자리
  // 2. html 태그 참조 (useRef 할때 )
  // 3. window 참조할때
  // 4. window.addEventListener("scroll"...)
  // 5. cleanUp 할때 : 컴포넌트 화면에서 사라질때 실행할 함수
  // 6. 타이머 만들고, 제거할때.
  // 컴포넌트가 화면에 보여질 때 실행할 내용 기재 장소
  // use 는 Hook 이라고 합니다.
  // 원하는 시점을 감시하고 실행할 함수
  useEffect(() => {
    // 외부 데이터 불러들이기
    axiosJsonData();
    // getJsonData();
  }, []);

  return (
    <SectionTag pt={0} pb={90}>
      <InnerArea>
        <div className="recommend-header">
          <h2 className="recommend-title">쇼핑추천</h2>
          <span className="recommend-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div className="recommend-main">
          <div className="recommend-category">
            <ul className="recommend-list">
              <li>
                <BtCate active={true}>쎈딜</BtCate>
              </li>
              <li>
                <BtCate>베스트</BtCate>
              </li>
              <li>
                <BtCate>블프데이</BtCate>
              </li>
              <li>
                <BtCate>디지털프라자</BtCate>
              </li>
              <li>
                <a href="#" className="recommend-cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <div className="recommend-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".recommend-slide-wrap .slide-next-bt",
                prevEl: ".recommend-slide-wrap .slide-prev-bt",
              }}
              className="recommend-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <div className="seeAll">
                        <a href="#" className="seeAll-a">
                          <i></i>
                          <p>전체보기</p>
                        </a>
                      </div>
                    ) : (
                      <div className="recommend-slide-item">
                        <a href={item.url} className="recommend-link">
                          <div className="recommend-img">
                            <img src={item.image} alt={item.desc} />
                          </div>
                          <div className="recommend-info">
                            <ul className="recommend-good-list">
                              <li>
                                <span className="recommend-good-info-price">
                                  <b>{item.discount}%</b>
                                  <em>{item.price}</em>원
                                </span>
                              </li>
                              <li>
                                <p className="recommend-good-info-desc">
                                  {item.desc}
                                </p>
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

        <div class="recommend-footer">
          <a href="#!">쇼핑 홈 바로가기</a>
        </div>
      </InnerArea>
    </SectionTag>
  );
}
export default Recommend;
