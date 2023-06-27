import React, { useState } from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import Quote1 from "./Quote1/Quote1";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-color: #e8eddf;
`;
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  @media only screen and (max-width: 768px) {
    padding: 0;
    height: 90%;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  margin-top: 350px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1290px) {
    margin-top: 500px;
  }
`;

const Right = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    align-items: center;
    gap: 20px;
  }
`;

const Work1 = styled.div`
  background-color: #403d39;
  height: 12.4rem;
  width: 60%;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    border-radius: 10px;
    position: relative;
    margin-top: 10px;
    display: flex;
  }
  @media only screen and (min-width: 1290px) {
    height: 15.5rem;
  }
`;

const Work2 = styled.div`
  background-color: #403d39;
  height: 12.4rem;
  width: 75%;
  margin-left: 100px;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    border-radius: 10px;
    position: relative;
    margin-top: 0px;
    display: flex;
    margin-left: 0px;
  }
  @media only screen and (min-width: 1290px) {
    height: 15.5rem;
  }
`;

const Work3 = styled.div`
  background-color: #403d39;
  height: 12.4rem;
  width: 90%;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 576px) {
    width: 100%;
    height: fit-content;
    position: relative;
    margin-top: 0px;
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    margin-top: 0px;
    display: flex;
    width: 90%;
    border-radius: 10px;
  }
  @media only screen and (min-width: 1290px) {
    height: 15.5rem;
  }
`;
const About = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-left: 5px;
  }
`;
const Logos = styled.div`
  display: flex;
  gap: 5px;
`;
const Links = styled.a`
  text-decoration: none;
`;
const GitLogo = styled.img`
  background-color: #cfdbd5;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  padding: 3px;
`;
const DemoLogo = styled.div`
  color: #cfdbd5;
  background-color: black;
  width: 27px;
  height: 27px;
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border: 3px solid #cfdbd5;
`;

const Image = styled.img`
  flex: 1;
  min-width: 250px;
  max-width: 250px;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background-color: #e8eddf;
  @media only screen and (max-width: 768px) {
    height: 190px;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  @media only screen and (max-width: 576px) {
    width: auto;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;
const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  color: #f5cb5c;
  letter-spacing: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const Desc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-align: justify;
  margin-bottom: 10px;
  color: gray;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1290px) {
    font-size: 16px;
  }
`;
const Details = styled.div``;

const Detail = styled.p`
  padding: 5px;
  background-color: #8080808d;
  color: #0f0122ef;
  border-radius: 5px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const GitIcon = styled.img``;

export default function Projects() {
  return (
    <Section id="Projects">
      <Container>
        <Left>
          <Quote1 />
        </Left>
        <Right>
          <Work3>
            <Image src="./img/social.png" />

            <About>
              <TopPart>
                <Title>Friends</Title>
                <Logos>
                  <Links
                    href="https://github.com/Leyla-kh/Flappy-Bird"
                    target="_blank"
                  >
                    <GitLogo src="./img/GitHub.png" />
                  </Links>
                  <Links
                    href="https://my-social-app-cso6.onrender.com"
                    target="_blank"
                  >
                    <DemoLogo>DEMO</DemoLogo>
                  </Links>
                </Logos>
              </TopPart>
              <Desc>
                A social media application that users can :<br /> create an
                account , make posts , like posts and write comments , follow
                other friends and send message privately to them , get
                notifications for like , comment or new message
                <br />
                <b>Test account 1 </b>- Email : Ross@gmail.com , Pass : 123456{" "}
                <br />
                <b>Test account 2 </b>- Email : Rachel@gmail.com , Pass : 123456
              </Desc>
              <Details>
                <Detail>java script</Detail>
                <Detail>React</Detail>
                <Detail>Context api</Detail>
                <Detail>Node js</Detail>
                <Detail>MongoDB</Detail>
                <Detail>Express</Detail>
                <Detail>Socket io</Detail>
              </Details>
            </About>
          </Work3>
          <Work2>
            <Image src="./img/e-commerc-4.jpg" />

            <About>
              <TopPart>
                <Title>MYSTORE</Title>
                <Logos>
                  <Links
                    href="https://github.com/Leyla-kh/Flappy-Bird"
                    target="_blank"
                  >
                    <GitLogo src="./img/GitHub.png" />
                  </Links>
                  <Links
                    href="https://e-commerc-zm9y.onrender.com"
                    target="_blank"
                  >
                    <DemoLogo>DEMO</DemoLogo>
                  </Links>
                </Logos>
              </TopPart>
              <Desc>
                An online store that users can :<br />
                Browse through categories , Filter products by type or price ,
                Add product to cart and pay with PayPal
              </Desc>
              <Details>
                <Detail>java script</Detail>
                <Detail>scss</Detail>
                <Detail>redux</Detail>
                <Detail>strapi</Detail>
                <Detail>paypal payment</Detail>
              </Details>
            </About>
          </Work2>
          <Work1>
            <Image src="./img/flapy.JPG" />

            <About>
              <TopPart>
                <Title>Flapy Bird</Title>
                <Logos>
                  <Links
                    href="https://github.com/Leyla-kh/Flappy-Bird"
                    target="_blank"
                  >
                    <GitLogo src="./img/GitHub.png" />
                  </Links>
                  <Links
                    href="https://mini-flapy-bird.netlify.app/"
                    target="_blank"
                  >
                    <DemoLogo>DEMO</DemoLogo>
                  </Links>
                </Logos>
              </TopPart>
              <Desc>
                A clone of Flapy Bird , The game is a side-scroller where the
                player controls a bird, attempting to fly between rows of green
                pipes without coming into contact them. If the player touches
                the pipes, it ends the game.
              </Desc>
              <Details>
                <Detail>java script</Detail>
                <Detail> Canvas</Detail>
                <Detail> Game loop</Detail>
                <Detail> Sound</Detail>
              </Details>
            </About>
          </Work1>
        </Right>
      </Container>
    </Section>
  );
}
