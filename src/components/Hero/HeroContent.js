import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 800px;
  padding: 0 30px;
  background-color: #0c0c0c;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background-color: #232a34;
`;

export const HeroElements = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  max-width: 1200px;
  padding: 8px 24px;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-sie: 48px;
  text-align: center;

  @media and screen (max-width: 767px) {
    font-size: 40px;
  }

  @media and screen (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  max-width: 600px;
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;

  @media and screen (max-width: 767px) {
    font-size: 24px;
  }

  @media and screen (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 32px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
