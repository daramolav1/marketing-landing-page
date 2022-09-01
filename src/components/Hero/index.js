import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroElements,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroContent";
import Video from "../../video/video.mp4";
import { Btn } from "../Btn";

function Hero() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroElements>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Btn
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth
              duration={500}
              spy
              exact
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Btn>
          </HeroBtnWrapper>
        </HeroElements>
      </HeroContainer>
    </>
  );
}

export default Hero;
