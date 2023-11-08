import styled from "@emotion/styled";
// 슬라이드 좌측 이동버튼
export const BtSlidePrev = styled.button`
  position: absolute;
  top: 50%;
  left: 0px;

  width: 50px;
  height: 50px;
  border: 1px solid #e5e1e5;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;

  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transform: translateX(-50%) translateY(-50%);
  transform: translate(-50%, -50%);
  border-radius: 50%;

  &::before {
    content: "";
    position: relative;
    width: 10px;
    height: 18px;
    display: block;
    margin: 0 auto;
    background: url("../../images/slider_arrow.svg") no-repeat center;

    transform: rotateY(180deg);
  }
`;

// 슬라이드 우측 이동 버튼
export const BtSlideNext = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid #e5e1e5;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transform: translate(50%, -50%);
  border-radius: 50%;

  &::before {
    content: "";
    position: relative;
    width: 10px;
    height: 18px;
    display: block;
    margin: 0 auto;
    background: url("../../images/slider_arrow.svg") no-repeat center;
  }
`;
//  카테고리 버튼
export const BtCate = styled.button`
  position: relative;
  display: block;

  padding: 0px 20px;
  line-height: 42px;

  border: 1px solid ${(props) => (props.active ? "transparent" : "#e5e5e5")};
  border-radius: 44px;
  background-color: ${(props) => (props.active ? "#111" : "#fff")};
  cursor: pointer;
  font-size: 1.4rem;
  color: ${(props) => (props.active ? "#fff" : "#111")};
  font-weight: ${(props) => (props.active ? 700 : 400)};
`;
