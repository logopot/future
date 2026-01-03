import React from "react";
import data from "../../Data/Data.json";

import robotArm from "../../../Img/TechNews/robot-arm.jpg";
import techImg1 from "../../../Img/TechNews/tech1.jpg";
import techImg2 from "../../../Img/TechNews/tech2.jpg";
import techImg3 from "../../../Img/TechNews/tech3.jpg";
import techImg4 from "../../../Img/TechNews/tech4.jpg";
import techImg5 from "../../../Img/TechNews/tech5.jpg";
import techImg6 from "../../../Img/TechNews/tech6.jpg";
import lines from "../../../Img/lines.png";

import {
  TechNewsSection,
  Row,
  ColLeft,
  ColRight,
  ImgWrapp,
  Img,
  Content,
  ContentLeft,
  ContentLeftLines,
  ContentRight,
  ContentRightImg,
  Subtitle,
  Title,
  Desc,
  Button,
  Image,
  ServiceImage,
} from "./TechNews.styled";

const TechNews = () => {
  return (
    <TechNewsSection>
      <Row>
        <ColRight
          style={{
            flex: "0 0 41.6667%",
            maxWidth: "41.6667%",
            marginLeft: "auto",
          }}
        >
          <ImgWrapp>
            <Img>
              <Image src={robotArm} alt={data.techNews.subtitle} />
            </Img>
          </ImgWrapp>
        </ColRight>
      </Row>

      <Row>
        <ColLeft
          style={{
            flex: "0 0 41.6667%",
            maxWidth: "41.6667%",
            marginLeft: "16.6667%",
          }}
        >
          <Content>
            <ContentLeft>
              <Subtitle>{data.techNews.subtitle}</Subtitle>
              <Title>{data.techNews.title}</Title>
              <Desc>{data.techNews.desc1}</Desc>
              <Button href="/tech-news">{data.techNews.btn}</Button>
              <ContentLeftLines>
                <Image src={lines} alt={data.techNews.subtitle} />
              </ContentLeftLines>
            </ContentLeft>
          </Content>
        </ColLeft>

        <ColRight
          style={{ flex: "0 0 25%", maxWidth: "25%", marginLeft: "8.3333%" }}
        >
          <Content>
            <ContentRight>
              <h3>{data.techNews.title2}</h3>
              <p>{data.techNews.desc2}</p>
              <Row>
                {[
                  techImg1,
                  techImg2,
                  techImg3,
                  techImg4,
                  techImg5,
                  techImg6,
                ].map((img, i) => (
                  <ColRight
                    key={i}
                    style={{ flex: "0 0 50%", maxWidth: "50%" }}
                  >
                    <ContentRightImg>
                      <ServiceImage src={img} alt={data.techNews.title2} />
                    </ContentRightImg>
                  </ColRight>
                ))}
              </Row>
            </ContentRight>
          </Content>
        </ColRight>
      </Row>
    </TechNewsSection>
  );
};

export default TechNews;
