import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main__container">
        <Hero />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default App;
