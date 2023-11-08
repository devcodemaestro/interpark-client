import styled from "@emotion/styled";

export const SectionTag = styled.section`
  position: relative;
  padding-top: ${(props) => (props.pt === 0 ? "0px" : props.pt + "px")};
  padding-bottom: ${(props) => (props.pb === 0 ? "0px" : props.pb + "px")};
`;
export const InnerArea = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;
