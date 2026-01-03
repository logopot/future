import React from "react";
import data from "../../Data/Data.json";

import imgBehind from "../../../Img/TechInfo/rb.jpg";
import imgTop from "../../../Img/TechInfo/person.jpg";
import lines from "../../../Img/lines.png";

import robot from "../../../Img/TechInfo/Services/robot.svg";
import engineering from "../../../Img/TechInfo/Services/engineering.svg";
import construction from "../../../Img/TechInfo/Services/construction.svg";

import {
  TechInfoSection,
  TechInfoWrapper,
  Row,
  ColLeft,
  ColRight,
  ContentLeft,
  ContentLeftLines,
  ContentRight,
  ContentRightImgTop,
  ContentRightTitle,
  ServiceContainer,
  ServiceItem,
  ServiceIcon,
  ServiceTitle,
  ServiceDesc,
  Image,
  Title,
  Desc,
  Button,
  StyledRow,
} from "./TechInfo.styled";

const TechInfo = () => {
  return (
    <TechInfoSection>
      <TechInfoWrapper>
        <Row>
          <ColLeft>
            <ContentLeft>
              <Image src={imgBehind} alt={data.techInfo.title} />
              <ContentLeftLines>
                <Image src={lines} alt={data.techNews.subtitle} />
              </ContentLeftLines>
            </ContentLeft>
          </ColLeft>
          <ColRight>
            <ContentRight className="pera">
              <ContentRightImgTop>
                <Image src={imgTop} alt={data.techInfo.title} />
              </ContentRightImgTop>
              <ContentRightTitle>
                <Title>{data.techInfo.title}</Title>
              </ContentRightTitle>
              <Desc>{data.techInfo.desc}</Desc>
              <Button href="/ces">{data.techInfo.btn}</Button>
            </ContentRight>
          </ColRight>
        </Row>

        <Row>
          <ServiceContainer>
            <StyledRow>
              {Object.values(data.techInfo.services).map((service, index) => (
                <ServiceItem key={index}>
                  <ServiceIcon>
                    <img
                      src={
                        index === 0
                          ? robot
                          : index === 1
                          ? engineering
                          : construction
                      }
                      alt={service.title}
                    />
                  </ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDesc>{service.desc}</ServiceDesc>
                </ServiceItem>
              ))}
            </StyledRow>
          </ServiceContainer>
        </Row>
      </TechInfoWrapper>
    </TechInfoSection>
  );
};

export default TechInfo;
