import React from 'react';

import { Container, Image } from 'react-bootstrap';
import Self from '../images/self.jpg';

const LeftSide = () => (
  <Container className="default-left">
    <a href="http://cathleenmjia.com/">
      <Image
        width="300"
        height="300"
        className="self-image"
        src={Self}
        roundedCircle
      />
    </a>
    <h1>
      Zachary Kirby
    </h1>
    <p>
      Hi there! My name is Zach, I'm a web-developer with a passion for building user-centric applications.
    </p>
    <p>
      I'm currently working on building <a href="https://www.vessel.land/">Vessel.</a> We're hiring, come check us out!
    </p>
    <p className="text-secondary">
      Off the web I enjoy writing,
      <a className="mx-1 text-secondary" href="https://amovieaminute.gatsbyjs.io/">cinema,</a>
      and learning languages.
      {/* If
      you're interested in learning a little more
      <span className="ml-1">
        <Link className="about-me-link" to="/writing/about-me">
          look here.
        </Link>
      </span> */}
    </p>
    <a href="https://drive.google.com/a/berkeley.edu/file/d/1NcNQ4Z8nVl6Nro3bgpwU07zbAE9gFYl7/view?usp=sharing">
      Resume
    </a>
    <a href="https://www.linkedin.com/in/zkirby/">LinkedIn</a>
    <a href="https://github.com/zkirby">Github</a>
    <a href="https://twitter.com/zkirby2020">Twitter</a>
  </Container>
);

export default LeftSide;
