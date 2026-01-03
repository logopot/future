import React from "react";
import data from "../../Data/Data.json";
import worksImg from "../../../Img/Works/works.png";

import {
  WorksSection,
  Container,
  Row,
  ColLeft,
  ColRight,
  Content,
  ContentImg,
  ContentDesc,
  Title,
  Desc,
  Image,
} from "./Works.styled";

const Works = () => {
  return (
    <WorksSection>
      <Container>
        <Row>
          <ColLeft>
            <Content>
              <ContentImg>
                <Image src={worksImg} alt={data.works.title} />
              </ContentImg>
            </Content>
          </ColLeft>
          <ColRight>
            <Content>
              <ContentDesc>
                <Title>{data.works.title}</Title>
                <Desc>{data.works.desc}</Desc>
              </ContentDesc>
            </Content>
          </ColRight>
        </Row>
      </Container>
    </WorksSection>
  );
};

export default Works;
