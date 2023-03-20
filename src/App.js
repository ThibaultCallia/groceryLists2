import SideBar from "./modules/SideBar";
import "./styles.css";
import Footer from "./modules/Footer";
import Container from "./modules/Container";
import Header from "./modules/Header";

import MainContent from "./modules/MainContent";

export default function App() {
  return (
    <Container>
      <SideBar />
      <MainContent />
    </Container>
  );
}
