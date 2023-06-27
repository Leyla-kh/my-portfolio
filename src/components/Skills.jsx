import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import Quote2 from "./Quote2/Quote2";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  background-color: #333533;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    height: 100%;
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  @media only screen and (min-width: 1290px) {
    margin-bottom: 120px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 80px;
    margin-left: 10px;
  }
`;
const LeftLine = styled.div`
  width: 80%;
  height: 3px;
  background-color: #f5cb5c;

  @media only screen and (min-width: 1290px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (max-width: 576px) {
  }
`;
const RightLine = styled.div`
  width: 30%;
  height: 3px;
  background-color: #cfdbd5;

  @media only screen and (max-width: 576px) {
  }
`;
const Top = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: 768px) {
  }
`;
const TextWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
const TextPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    margin-left: 5px;
  }
  @media only screen and (max-width: 576px) {
    margin-left: 5px;
    margin-bottom: 10px;
  }
`;

const Bullet = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

/* const YearText = styled.h3`
  transform: rotate(-90deg);
  color: #cfdbd5;
`; */

const Line = styled.div`
  height: 60px;
  width: 3px;
  background-color: #f5cb5c;
  border-radius: 5px;
`;

const Desc = styled.p`
  text-align: justify;
  font-family: "Poppins", sans-serif;
  width: 80%;
  font-size: 15px;
  @media only screen and (min-width: 1290px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    font-size: 13px;
    width: 85%;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    margin-left: 0px;
    flex-wrap: wrap;
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Skill = styled.div`
  background-color: #cfdbd5;
  height: 90px;
  width: 80px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1290px) {
    margin: 5px;
  }
  @media only screen and (max-width: 768px) {
    height: 60px;
    width: 70px;
    margin-right: 10px;
  }
`;
const Logo = styled.img`
  width: 55px;
  @media only screen and (max-width: 768px) {
    width: 30px;
  }
`;
const ProgressBar = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
  }
`;
const DarkLine = styled.div`
  height: 6px;
  width: 68px;
  background-color: #838583;
  border-radius: 50px;
  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;
const ColoredLine = styled.div`
  height: 6px;
  width: 48px;
  background-color: #001b03;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 90;
  border-radius: 50px;
  @media only screen and (max-width: 768px) {
    max-width: 70%;
  }
`;

function SkillItem({ w, image }) {
  return (
    <>
      <Skill>
        <Logo src={image} />
        <ProgressBar>
          <DarkLine />
          <ColoredLine style={{ width: w }} />
        </ProgressBar>
      </Skill>
    </>
  );
}

const BoxAnimation = {
  offscreen: { x: -70, opacity: 0 },
  onscreen: { x: 10, opacity: 1 },
  transition: {
    duration: "0.5s",
    type: "spring",
  },
};

export default function Skills() {
  return (
    <Section id="Skills">
      <Container>
        <Top>
          <TextWrapper>
            <TextPart>
              <Bullet>
                <Line />
              </Bullet>
              <Desc>
                My first cooperation with the company where I am still working,
                was initially as a Graphic Designer and animator. During this
                time, I gained useful experiences in the field of working with
                software such as Photoshop, Illustrator, Adobe Animate, ...
                (even in 3D design such as Sketchup).
              </Desc>
            </TextPart>

            <TextPart>
              <Bullet>
                <Line />
              </Bullet>
              <Desc>
                After that, due to my interest, I went to web design and after
                upgrading my skills such as: Html , css , bootstrap , javascript
                , responsive design , react , api , ... , I worked as a front
                end developer for more than a year.
              </Desc>
            </TextPart>

            <TextPart>
              <Bullet>
                <Line />
              </Bullet>
              <Desc>
                After acquiring enough skills, I started to learn backend and I
                have been working with this company as a full stack developer
                for more than 2 years. Some of the projects I worked on: MERN
                stack app, e-commerce , booking , real time chat app,...
              </Desc>
            </TextPart>

            <TextPart>
              <Bullet>
                <Line />
              </Bullet>
              <Desc>
                I am currently learning Next.js and TypeScript and I will never
                stop learning new things
              </Desc>
            </TextPart>
          </TextWrapper>
          <Quote2 />
        </Top>

        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={({ delayChildren: 0.15 }, { staggerChildren: 0.2 })}
        >
          <Bottom>
            <LeftLine />
            <motion.div
              viewport={({ once: false }, { amount: 0.3 })}
              variants={BoxAnimation}
            >
              <SkillContainer>
                <SkillItem w={"50px"} image={"./img/html-5.png"} />
                <SkillItem w={"50px"} image={"./img/css-3.png"} />
                <SkillItem w={"40px"} image={"./img/bootstrap.svg"} />
                <SkillItem w={"45px"} image={"./img/java-script.png"} />
                <SkillItem w={"50px"} image={"./img/structure.png"} />
                <SkillItem w={"45px"} image={"./img/GitHub.png"} />
                <SkillItem w={"45px"} image={"./img/node.png"} />
                <SkillItem w={"45px"} image={"./img/mongodb.svg"} />
                <SkillItem w={"45px"} image={"./img/express.png"} />
                <SkillItem w={"55px"} image={"./img/photoshop.png"} />
                <SkillItem w={"55px"} image={"./img/Illustrator.png"} />
                <SkillItem w={"50px"} image={"./img/Adobe_Animate.png"} />
              </SkillContainer>
            </motion.div>
            <RightLine />
          </Bottom>
        </motion.div>
      </Container>
    </Section>
  );
}
