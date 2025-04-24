import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Help } from "./components/help/Help";
import { Footer } from "./components/footer/Footer";
import { Card } from "./components/card/Card";
import { Animalist } from "./components/animalist/Animalist";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Help />
      <Animalist/>
      <Card />
      <Footer />
    </>
  );
}

export default App;
