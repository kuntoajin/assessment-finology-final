import {useSpring, animated} from 'react-spring'

const Content = () => {
  const left = useSpring({
    opacity: 1, 
    marginLeft: 0, 
    from: {
      opacity: 0, 
      marginLeft: -500
    }
  })

  const right = useSpring({
    opacity: 1, 
    marginRight: 0, 
    from: {
      opacity: 0, 
      marginRight: -500
    }
  })

  return (
    <div className="content__container">
      <div className="content">
        <animated.div style={left} className="images__content">
          <img
            src="../../assets/images/content-001.png"
            alt="We can give you our best user experience to your system"
            width="800"
          />
        </animated.div>
        <animated.div style={right} className="word">
          <h2>We can give you our best user experience to your system</h2>
          <p style={{color: '#A0A0BE', lineHeight: '30px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Qui exercitationem quisquam quidem explicabo ducimus fugiat 
            a molestiae ipsa, non, fugit dicta odio blanditiis excepturi. 
            Vitae quisquam adipisci doloribus aut amet.</p>
        </animated.div>
      </div>
      <div className="content">
        <div className="word">
          <h2>Easy access. Whenever, wherever you want</h2>
          <p style={{color: '#A0A0BE', lineHeight: '30px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Qui exercitationem quisquam quidem explicabo ducimus fugiat 
            a molestiae ipsa, non, fugit dicta odio blanditiis excepturi. 
            Vitae quisquam adipisci doloribus aut amet.</p>
        </div>
        <div className="images__content">
          <img
            src="../../assets/images/content-002.png"
            alt="We can give you our best user experience to your system"
            width="800"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
