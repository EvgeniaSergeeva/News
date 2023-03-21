import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import ROUTES from "../../constants/routes";
import Button from "../../components/Button";

//item
const DetailsPage = ({ item }) => {
  console.log(item);

  return (
    <Container>
      <PhotoContainer>
        <NewsPhoto src={item?.urlToImage && item.urlToImage}></NewsPhoto>
      </PhotoContainer>

      <Author>{item?.author && item.author}</Author>
      <Date>{item?.publishedAt && item.publishedAt}</Date>
      <Title>{item?.title && item.title}</Title>
      <Desc>{item?.description && item.description}</Desc>
      <NewsLink>
        <Link to={item?.url && item.url}>{item.url}</Link>
      </NewsLink>
      <ButtonContainer>
        <Button>
          <LinkHome to={ROUTES.HOME}>Back</LinkHome>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default DetailsPage;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: beige;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 50px;
  padding: 40px 40px;
  text-align: start;
`;
const PhotoContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const NewsPhoto = styled.img`
  width: 100%;
`;

const Author = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: start;
`;
const Title = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Desc = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Date = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const NewsLink = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LinkHome = styled(Link)`
  text-decoration: none;
  color: white;
`;
const ButtonContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

{
  /* <Container>
        <NewsPhoto src={item?.url && item.url}></NewsPhoto>
        <Author>{item?.author && item.author}</Author>
        <Date>{item?.publishedAt && item.publishedAt}</Date>
        <Title>{item?.title && item.title}</Title>
        <Desc>{item?.description && item.description}</Desc>
        <NewsLink>
            <Link to={item?.url && item.url}>
                {item.url}
            </Link>
        </NewsLink>

        <Button>
            <LinkHome to={ROUTES.HOME}>Back</LinkHome>
        </Button>


    </Container> */
}
