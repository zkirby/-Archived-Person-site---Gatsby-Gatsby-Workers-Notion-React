import React from 'react';

import { Container, Image } from 'react-bootstrap';
import Self from '../images/self.jpg';
import NavLink from '../features/shared/NavLink';

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
      Hello, my name is Zach. I'm a web-developer by trade currently living in SF. I hail from the same 'small' town as Olivia Rodrigo and 
    </p>
    <p>
      I'm currently building <a href="https://www.vessel.land/">Vessel.</a> We're an API company unifying the notoriously fragmented CRM space through a developer-first lense.
    </p>
    <p>
      When I'm not working on Vessel
      <a className="mx-1" href="https://amovieaminute.gatsbyjs.io/">cinema,</a>
      and learning languages.
    </p>
    {/* <p>If you're still curious, you can read a little more <NavLink className="clear-style" to="/entry" params={{ postId: 'd40f73eaee9149a7aea1c7c8b01aaa8c' }}>about me here</NavLink></p> */}
    <a href="https://drive.google.com/a/berkeley.edu/file/d/1NcNQ4Z8nVl6Nro3bgpwU07zbAE9gFYl7/view?usp=sharing">
      Resume
    </a>
    <a href="https://www.linkedin.com/in/zkirby/">LinkedIn</a>
    <a href="https://github.com/zkirby">Github</a>
    <a href="https://twitter.com/zkirby2020">Twitter</a>
  </Container>
);

export default LeftSide;
