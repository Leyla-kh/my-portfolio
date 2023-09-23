import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: #333533;
`;
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Items = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 30px;
  margin-right: 5px;
  border: 3px solid #e8eddf;
  border-radius: 50px;
  padding: 5px;
  &:hover {
    border: 3px solid #f5cb5c;
  }

  @media only screen and (max-width: 576px) {
    margin-left: 5px;
    width: 25px;
    border: 2px solid #e8eddf;
    &:hover {
      border: 2px solid #f5cb5c;
    }
  }
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 15px;
  color: #e8eddf;
  font-family: "Mogra", cursive;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding-right: 10px;
    gap: 20px;
  }
  @media only screen and (max-width: 576px) {
    gap: 5px;
  }
`;

const Link = styled.a`
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-size: 14px;
  color: #e8eddf;
  text-decoration: none;
  padding: 5px;
  border-bottom: 1px solid #333533;
  transition: all 300ms ease;
  &:hover {
    border-bottom: 1px solid #f5cb5c;
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Items>
          <a href="/">
            <Logo src="./img/girl-1.png" />
          </a>
          <Title>Leyla | Javascript Full Stack Developer</Title>
        </Items>
        <Links>
          <Link href="#Projects">Projects</Link>
          <Link href="#Skills">Skills</Link>
          <Link href="#Contact">Contact</Link>
        </Links>
      </Container>
    </Section>
  );
}
