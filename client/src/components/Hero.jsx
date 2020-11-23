import {useSpring, animated} from 'react-spring'

const Hero = () => {
  const word = useSpring({
    opacity: 1, 
    marginLeft: 0, 
    from: {
      opacity: 0, 
      marginLeft: -500
    }
  })

  const banner = useSpring({
    opacity: 1, 
    marginRight: 0, 
    from: {
      opacity: 0, 
      marginRight: -500
    }
  })

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="img__left">
          <img src="../../assets/images/banner-rounded-001.svg" alt="" />
        </div>
        <animated.div style={word} className="word">
              <h1>Make development easy with us.</h1>
              <p>
                Doing development can never be easy, and it takes time and
                  resources.
                  <br /> We at EasyWork has the solution.
                </p>
            </animated.div>
        <animated.div style={banner} className="banner">
          <img src="../../assets/images/banner.png" alt="banner" />
        </animated.div>
        <div className="img__right">
          <img src="../../assets/images/banner-rounded-002.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
