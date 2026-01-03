import React from "react";
import data from "../../Data/Data.json";
import testimonialQuote from "../../../Img/Testimonials/quote.svg";

import {
  TestimonialsSection,
  Container,
  Card,
  Icon,
  Text,
  Author,
  Role,
} from "./Testimonials.styled";

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <Card>
          <Icon src={testimonialQuote} alt={data.testimonials.title} />
          <Text>"{data.testimonials.desc}"</Text>
          <Author>{data.testimonials.name}</Author>
          <Role>{data.testimonials.role}</Role>
        </Card>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
