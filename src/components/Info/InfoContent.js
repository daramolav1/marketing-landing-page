import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  color: #fff;

  @media screen and (max-width: 767px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  height: 860px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 767px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  margin-bottom: 16px;
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (max-width: 480px;) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  font-size: 18px;
  line-height: 24px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 555px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
