import React from "react";
import data from "../../Data/Data.json";

import trendImg1 from "../../../Img/TechTrends/robot-friendly-2.jpg";
import trendImg2 from "../../../Img/TechTrends/robot-friendly-3.jpg";
import trendImg3 from "../../../Img/TechTrends/robot-friendly-4.jpg";

import {
  TechTrendsSection,
  Wrapper,
  Container,
  Row,
  Col,
  Title,
  Image,
  Desc,
} from "./TechTrends.styled";

const TechTrends = () => {
  return (
    <TechTrendsSection>
      <Wrapper>
        <Container>
          <Row>
            <Col flex="0 0 16.6667%" maxWidth="16.6667%">
              <Title>{data.techTrends.title}</Title>
            </Col>
            <Col flex="0 0 33.3333%" maxWidth="33.3333%" marginTop="5rem">
              <Image src={trendImg1} alt={data.techTrends.title} />
            </Col>
            <Col flex="0 0 50%" maxWidth="50%">
              <Row>
                <Col flex="0 0 41.6667%" maxWidth="41.6667%" marginTop="2rem">
                  <Image src={trendImg2} alt={data.techTrends.title} />
                </Col>
                <Col flex="0 0 58.3333%" maxWidth="58.3333%" marginTop="3rem">
                  <Image src={trendImg3} alt={data.techTrends.title} />
                </Col>
                <Col flex="0 0 100%" maxWidth="100%">
                  <Desc>{data.techTrends.desc}</Desc>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </TechTrendsSection>
  );
};

export default TechTrends;
