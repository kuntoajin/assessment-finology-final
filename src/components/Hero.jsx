const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="img__left">
          <img src="../../assets/images/banner-rounded-001.svg" alt="" />
        </div>
        <div className="word">
          <h1>Make development easy with us.</h1>
          <p>
            Doing development can never be easy, and it takes time and
            resources.
            <br /> We at EasyWork has the solution.
          </p>
        </div>
        <div className="banner">
          <img src="../../assets/images/banner.png" alt="banner" />
        </div>
        <div className="img__right">
          <img src="../../assets/images/banner-rounded-002.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
