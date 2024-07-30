import React, { useEffect, useState, useRef } from 'react';
import './NextLevel.scss';
import { Link } from 'react-router-dom';

function NextLevel() {
  const [projectsCount, setProjectsCount] = useState(300);
  const [loremCount, setLoremCount] = useState(50);
  const [clientsCount, setClientsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const projectsTarget = 500;
      const loremTarget = 120;
      const clientsTarget = 98;

      const incrementValue = (setFunction, target, duration) => {
        let startValue = 0;
        const increment = target / (duration / 10);
        const interval = setInterval(() => {
          startValue += increment;
          if (startValue >= target) {
            setFunction(target);
            clearInterval(interval);
          } else {
            setFunction(Math.round(startValue));
          }
        }, 10);
      };

      incrementValue(setProjectsCount, projectsTarget, 2000);
      incrementValue(setLoremCount, loremTarget, 2000);
      incrementValue(setClientsCount, clientsTarget, 2000);
    }
  }, [isVisible]);

  return (
    <section id='nextLevel' ref={sectionRef}>
      <div className="upBox">
        <h1 data-aos="fade-right" data-aos-duration="1000">Ready to take your business to the </h1>
        <h5 data-aos="fade-right" data-aos-duration="1000">next level?</h5>
        <div className="normalBox">
          <div className="counBox">
            <p>{projectsCount}+</p>
            <h6>Successful Projects</h6>
          </div>
          <span></span>
          <div className="counBox">
            <p>{loremCount}+</p>
            <h6>Lorem Ipsum</h6>
          </div>
          <span></span>
          <div className="counBox">
            <p>{clientsCount}%</p>
            <h6>Satisfied Clients</h6>
          </div>
        </div>
      </div>
      <div className="downBox">
        <Link className='link'>
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
        </Link>
        <Link className='link'>
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" alt="" />
        </Link>
        <Link className='link'>
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
        </Link>
        <Link className='link'>
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2015-2016.png" alt="" />
        </Link>
      </div>
    </section>
  );
}

export default NextLevel;
