import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';
import "./Hero.css"

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns' id='abtme'>
        <div className="HeroCont">
        <div className='NameandAll'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hey, I am Nirbhay Luthra</h1>
        <p className='tracking-wide leading-relaxed'>
          I love Solving DSA Problems and Making Interesting Websites.
          I am a Btech undergrad studing in MAIT(GGSIPU), New Delhi.{' '}
        </p>
      </div>
      <div className='DancePic'>
        <div className='container' ref={container}></div>
      </div>
      </div>

    </section>
  );
};

export default Hero;
