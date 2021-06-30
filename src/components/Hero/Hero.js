import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There !<br/>
        I Am Shivam Mehra
      </SectionTitle>
      <SectionText>
        I am student with an appetite of learning and sharing new skills and technoligies with people at any given time.
      </SectionText>
      <Button onClick={()=> window.location='https://www.google.com/'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;