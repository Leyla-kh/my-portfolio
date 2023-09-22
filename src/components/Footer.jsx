import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";

const Section = styled.section`
  height: 400px;
  scroll-snap-align: start;
`;
const Container = styled.div`
  background-color: #242423;
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid white;
  padding: 5px;
`;

const Line = styled.hr`
  color: white;
  width: 80%;
`;
const Menu = styled.div`
  display: flex;
  gap: 50px;
`;
const Item = styled.a`
  list-style: none;
  padding: 30px 40px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 9px;
  }
`;
const BottomPart = styled.div`
  width: 800px;
  display: flex;
  gap: 40px;
  align-items: center;
`;
const GitIcon = styled.img`
  width: 40px;
  display: block;
  margin: 0 auto;
  background-color: #e8eddf;
  padding: 3px;
  border-radius: 50%;
`;
const Name = styled.p`
  flex: 1;
  text-align: end;
  font-family: "Mogra", cursive;
  font-size: 13px;
  letter-spacing: 1.5px;
`;
const Title = styled.p`
  flex: 1;
  font-family: "Mogra", cursive;
  font-size: 13px;
  letter-spacing: 1.5px;
`;

export default function Projects() {
  return (
    <Section>
      <Container>
        <a href="/">
          <Image src="./img/girl-1.png" />
        </a>
        <Line />
        <Menu>
          <Item href="#Projects">Project</Item>
          <Item href="#Skills">Skills</Item>
          <Item href="#Contact">Contact</Item>
        </Menu>
        <Line />
        <BottomPart>
          <Name> Leyla Kheiry</Name>
          <a href="https://github.com/Leyla-kh" target="_blank">
            <GitIcon src="./img/GitHub.png" />
          </a>
          <Title> Web Developer</Title>
        </BottomPart>
      </Container>
    </Section>
  );
}
