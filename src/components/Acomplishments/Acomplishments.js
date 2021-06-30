import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Virtual Experience Developer Program by accenture'},
  { number: 1000, text: 'AMCAT Employability Test', },
  { number: 1900, text: 'HPE Certificate of Competency in Android', },
  { number: 5000, text: 'Cambridge English Language Assessment Cleared', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>{
        return <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;
