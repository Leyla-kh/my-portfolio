import React, { useState } from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import Quote1 from "./Quote1/Quote1";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  @media only screen and (max-width: 768px) {
    padding: 0;
    height: 90%;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 4;
  display: flex;
  gap: 15px;
  margin: 0 auto;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;

    align-items: center;
    gap: 10px;
  }
`;

const About = styled.div`
  @media only screen and (max-width: 768px) {
    width: 80%;
    margin-left: 5px;
  }
`;

const Work1 = styled.div`
  background-color: #210d29;
  height: fit-content;
  width: fit-content;
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 210px;
  @media only screen and (max-width: 768px) {
    height: 90%;
    width: 80%;
    position: relative;
    margin-top: 10px;
    display: flex;
  }
`;

const Work2 = styled.div`
  background-color: #210d29;
  height: fit-content;
  width: fit-content;
  padding: 10px;
  margin-top: 115px;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    height: 90%;
    width: 80%;
    position: relative;
    margin-top: 0px;
    display: flex;
  }
`;

const Work3 = styled.div`
  background-color: #210d29;
  height: fit-content;
  width: fit-content;
  max-width: 300px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 5px;

  @media only screen and (max-width: 768px) {
    height: 90%;
    width: 80%;
    position: relative;
    margin-top: 0px;
    display: flex;
  }
`;

const Image = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    height: 170px;
    width: 95%;
    display: block;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #f6f8fa;
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
`;
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
    font-size: 12px;
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
          <Work1>
            <Image src="./img/flapy.JPG" />
            <About>
              <Title>Flapy Bird</Title>
              <Desc>
                A clone of Flapy Bird , The game is a side-scroller where the
                player controls a bird, attempting to fly between rows of green
                pipes without coming into contact them. If the player touches
                the pipes, it ends the game.
              </Desc>
              <Detail>java script</Detail>
              <Detail> Canvas</Detail>
              <Detail> Game loop</Detail>
              <Detail> Sound</Detail>
            </About>
          </Work1>

          <Work2>
            <Image src="./img/e-commerc-4.jpg" />
            <About>
              <Title>MYSTORE</Title>
              <Desc>
                An online store that users can :<br />
                Browse through categories , Filter products by type or price ,
                Add product to cart and pay with PayPal
              </Desc>
              <Detail>java script</Detail>
              <Detail>scss</Detail>
              <Detail>redux</Detail>
              <Detail>strapi</Detail>
              <Detail>paypal payment</Detail>
            </About>
          </Work2>

          <Work3>
            <Image src="./img/social.png" />
            <About>
              <Title>Friends - Social Media</Title>
              <Desc>
                A social media application that users can :<br /> create an
                account , make posts , like posts and write comments , follow
                other friends and send message privately to them , get
                notifications for like , comment or new message
                <br />
                Test account 1 : Email : <br />
                Test account 2 : Email :
              </Desc>
              <Detail>java script</Detail>
              <Detail>React</Detail>
              <Detail>Context api</Detail>
              <Detail>Node js</Detail>
              <Detail>MongoDB</Detail>
              <Detail>Express</Detail>
              <Detail>Socket io</Detail>
            </About>
          </Work3>
        </Right>
      </Container>
    </Section>
  );
}
