import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import WhatPeopleSay from "./components/WhatPeopleSay";
import ImportantPeople from "./components/ImportantPeople";
import Partners from "./components/Partner";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <div className="main__container">
        <Content />
        <WhatPeopleSay />
        <ImportantPeople />
        <Partners />
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
