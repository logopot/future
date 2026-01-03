import React from "react";
import data from "../../Data/Data.json";
import perspectiveImg from "../../../Img/Perspective/perspective.jpg";
import {
  PerspectiveSection,
  Overlay,
  ContentWrapper,
  Header,
  Subtitle,
  Title,
  BodyRow,
  BodyColText,
  BodyColImg,
  Desc,
  Button,
  Image,
} from "./Perspective.styled";

const Perspective = () => {
  return (
    <PerspectiveSection>
      <Overlay />
      <ContentWrapper>
        <Header>
          <Subtitle>{data.perspective.subtitle}</Subtitle>
          <Title>{data.perspective.title}</Title>
        </Header>

        <BodyRow>
          <BodyColText>
            <Desc>{data.perspective.desc}</Desc>
            <Button href="/perspective">{data.perspective.btn}</Button>
          </BodyColText>
          <BodyColImg>
            <Image src={perspectiveImg} alt={data.perspective.title} />
          </BodyColImg>
        </BodyRow>
      </ContentWrapper>
    </PerspectiveSection>
  );
};

export default Perspective;
