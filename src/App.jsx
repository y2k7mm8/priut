import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Help } from "./components/help/Help";
import { Footer } from "./components/footer/Footer";
import { Card } from "./components/card/Card";
import { Animalist } from "./components/animalist/Animalist";


function ScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        backgroundColor: "#3b82f6",
        color: "white",
        padding: "8px 16px",
        borderRadius: "9999px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
    >
      Наверх
    </button>
  );
}



function App() {
  return (
    <>
      <Header />
      <Intro />
      <Help />
      <Animalist/>
      <Card />
      <Footer />
      <ScrollTop />

    </>
  );
}

export default App;
