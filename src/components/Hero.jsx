import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-color: #ccc5b9;
`;

const Container = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Hello = styled.h2`
  font-family: "Concert One", cursive;
  font-size: 40px;
  color: #333533;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Span = styled.h2`
  font-size: 40px;
  font-family: "Concert One", cursive;
  color: #333533;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Name = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-size: 60px;
  letter-spacing: 2px;
  color: #242423;
  @media only screen and (max-width: 576px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  letter-spacing: 3px;
  font-weight: 500;
  color: #333533;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 50%;
  }
`;

const Img = styled.img`
  width: 450px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 200px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

export default function Hero() {
  /* const [color, setColor] = useState("#8EAC50");
  setInterval(() => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }, 2000); */
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Hello>Hi 👋</Hello>
          <Title>
            <Span>I'm</Span> <Name>Leyla Kheiry</Name>
          </Title>

          <SubTitle>A Web Developer based in Iran</SubTitle>
        </Left>
        <Right>
          <Canvas width="500" height="500">
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.1}>
              <MeshDistortMaterial
                color="#213363"
                attach="material"
                distort={0.45}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/hero2.png" />
        </Right>
      </Container>
    </Section>
  );
}
