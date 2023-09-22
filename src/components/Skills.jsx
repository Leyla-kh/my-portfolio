import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  background-color: #333533;
  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Container = styled.div`
  width: 95%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    :nth-child(1) {
      order: 1;
    }
    :nth-child(2) {
      order: 3;
    }
    :nth-child(3) {
      order: 2;
    }
  }
`;
const Part = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1290px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 576px) {
  }
`;

const TextWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 90%;
  @media only screen and (max-width: 576px) {
    margin-top: 10px;
  }
`;

const TextPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-left: 5px;
  }
  @media only screen and (max-width: 576px) {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

const Bullet1 = styled.div`
  position: absolute;
  left: 40px;
  top: -10px;
`;
const Bullet2 = styled.div`
  position: absolute;
  left: 40px;
  top: -10px;
  display: flex;
  gap: 5px;
`;
const Bullet3 = styled.div`
  position: absolute;
  left: 40px;
  top: -10px;
  display: flex;
  gap: 5px;
`;
const Bullet4 = styled.div`
  position: absolute;
  left: 40px;
  top: -10px;
  display: flex;
  gap: 5px;
`;
const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50px;
  background-color: #dbd283a3;
`;
const Desc = styled.p`
  text-align: justify;
  font-family: "Poppins", sans-serif;
  width: 80%;
  font-size: 15px;
  background-color: #80808036;
  padding: 15px;
  border-radius: 10px;
  color: gray;
  @media only screen and (min-width: 1290px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    font-size: 12px;
    width: 85%;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 576px) {
  }
`;

const Skill = styled.div`
  background-color: #b9b9b9;
  padding: 5px;
  border-radius: 10px;
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1290px) {
    margin: 5px;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 10px;
  }
  @media only screen and (max-width: 576px) {
    margin-right: 5px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

function SkillItem({ image }) {
  return (
    <>
      <Skill>
        <Logo src={image} />
      </Skill>
    </>
  );
}

const BoxAnimation = {
  offscreen: { x: -70, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  transition: {
    duration: "0.5s",
    type: "spring",
  },
};

export default function Skills() {
  return (
    <Section id="Skills">
      <Container>
        <Part>
          <TextWrapper>
            <TextPart>
              <Bullet1>
                <Circle />
              </Bullet1>
              <Desc>
                My first cooperation with the company where I am still working,
                was initially as a Graphic Designer and animator. During this
                time, I gained useful experiences in the field of working with
                software such as Photoshop, Illustrator, Adobe Animate, ...
                (even in 3D design such as Sketchup).
              </Desc>
            </TextPart>

            <TextPart>
              <Bullet2>
                <Circle />
                <Circle />
              </Bullet2>
              <Desc>
                After that, due to my interest, I went to web design and after
                upgrading my skills such as: Html , css , bootstrap , javascript
                , responsive design , react , api , ... , I worked as a front
                end developer for more than a year.
              </Desc>
            </TextPart>
          </TextWrapper>
        </Part>
        <Part>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={({ delayChildren: 0.15 }, { staggerChildren: 0.2 })}
          >
            <motion.div
              viewport={({ once: false }, { amount: 0.3 })}
              variants={BoxAnimation}
            >
              <SkillContainer>
                <SkillItem image={"./img/html-5.png"} />
                <SkillItem image={"./img/css-3.png"} />
                <SkillItem image={"./img/bootstrap.svg"} />
                <SkillItem image={"./img/tailwind.svg"} />
                <SkillItem image={"./img/java-script.png"} />
                <SkillItem image={"./img/structure.png"} />
                <SkillItem image={"./img/typescript.png"} />
                <SkillItem image={"./img/next-js.svg"} />
                <SkillItem image={"./img/node.png"} />
                <SkillItem image={"./img/mongodb.svg"} />
                <SkillItem image={"./img/express.png"} />
                <SkillItem image={"./img/GitHub.png"} />
                <SkillItem image={"./img/photoshop.png"} />
                <SkillItem image={"./img/Illustrator.png"} />
                <SkillItem image={"./img/Adobe_Animate.png"} />
              </SkillContainer>
            </motion.div>
          </motion.div>
        </Part>
        <Part>
          <TextWrapper>
            <TextPart>
              <Bullet3>
                <Circle />
                <Circle />
                <Circle />
              </Bullet3>
              <Desc>
                After acquiring enough skills, I started to learn backend and I
                have been working with this company as a full stack developer
                for more than 2 years. Some of the projects I worked on: MERN
                stack app, e-commerce , booking , real time chat app,...
              </Desc>
            </TextPart>

            <TextPart>
              <Bullet4>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
              </Bullet4>
              <Desc>
                I am currently learning new technologies to improve my skills
                and I will never stop learning new things
              </Desc>
            </TextPart>
          </TextWrapper>
        </Part>
      </Container>
    </Section>
  );
}
