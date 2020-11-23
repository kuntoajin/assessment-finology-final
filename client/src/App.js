import "./App.scss";
import "./AppResponsive.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import WhatPeopleSay from "./components/WhatPeopleSay";
import ImportantPeople from "./components/ImportantPeople";
import Partners from "./components/Partner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [width, setWidth] = useState()

  useEffect(() => {
    const root = document.getElementById("root")
    setWidth(root.clientWidth)
  })

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
      <Footer />
    </div>
  );
};

export default App;
