import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import Quote2 from "./Quote2/Quote2";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 30px;
`;
const Container = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;
const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    margin-top: 80px;
    align-items: center;
    margin-left: 10px;
  }
`;
const Right = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  @media only screen and (max-width: 768px) {
  }
`;

const Desc = styled.p`
  text-align: justify;
  width: 400px;
  position: absolute;
  right: -40px;
  bottom: -180px;
  font-family: "Poppins", sans-serif;
  @media only screen and (max-width: 768px) {
    right: 0px;
    top: 80px;
    width: 300px;
  }
`;

const SkillContainer = styled.div`
  transform: rotate(-20deg);
  margin-left: 15px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 5px;
    display: flex;
    transform: rotate(0deg);
    margin-left: 0px;
  }
`;

const Skill = styled.div`
  background-color: #38363a;
  height: 95px;
  width: 115px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
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
  background-color: #252525;
  border-radius: 50px;
  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;
const ColoredLine = styled.div`
  height: 6px;
  width: 48px;
  background-color: #4311cc;
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
    duration: "1.5s",
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
};

export default function Skills() {
  return (
    <Section id="Skills">
      <Container>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          transition={({ delayChildren: 0.15 }, { staggerChildren: 0.2 })}
        >
          <Left>
            <motion.div
              viewport={({ once: false }, { amount: 0.5 })}
              variants={BoxAnimation}
            >
              <SkillContainer>
                <SkillItem w={"50px"} image={"./img/html-5.png"} />
                <SkillItem w={"50px"} image={"./img/css-3.png"} />
                <SkillItem w={"40px"} image={"./img/bootstrap.svg"} />
              </SkillContainer>
            </motion.div>
            <motion.div
              viewport={({ once: false }, { amount: 0.5 })}
              variants={BoxAnimation}
            >
              <SkillContainer>
                <SkillItem w={"45px"} image={"./img/java-script.png"} />
                <SkillItem w={"50px"} image={"./img/structure.png"} />
                <SkillItem w={"45px"} image={"./img/GitHub.png"} />
              </SkillContainer>
            </motion.div>
            <motion.div
              viewport={({ once: false }, { amount: 0.5 })}
              variants={BoxAnimation}
            >
              <SkillContainer>
                <SkillItem w={"45px"} image={"./img/node.png"} />
                <SkillItem w={"45px"} image={"./img/mongodb.svg"} />
                <SkillItem w={"45px"} image={"./img/express.png"} />
              </SkillContainer>
            </motion.div>
            <motion.div
              viewport={({ once: false }, { amount: 0.5 })}
              variants={BoxAnimation}
            >
              <SkillContainer>
                <SkillItem w={"55px"} image={"./img/photoshop.png"} />
                <SkillItem w={"55px"} image={"./img/Illustrator.png"} />
                <SkillItem w={"50px"} image={"./img/Adobe_Animate.png"} />
              </SkillContainer>
            </motion.div>
          </Left>
        </motion.div>

        <Right>
          <Quote2 />
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            soluta mollitia quo eos ad ipsam esse rerum molestiae aliquam nisi!
          </Desc>
        </Right>
      </Container>
    </Section>
  );
}
