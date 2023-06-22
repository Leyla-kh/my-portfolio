import styled from "styled-components";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const Container = styled.div`
  color: white;
  background-color: #010e55;
`;

function App() {
  return (
    <Container>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
