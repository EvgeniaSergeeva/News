import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Card from "../Card";
import { NewsContext } from "../../pages/HomePage";
import ROUTES from "../../constants/routes";

const CardContainer = () => {
  //props{data} removed because of context
  const { newsData: data } = useContext(NewsContext);
  return (
    <StyledCardsContainer>
      {data.map((item) => (
        <Link
          key={item.url}
          style={{ textDecoration: "none" }}
          to={ROUTES.HOME + `${item.url && item.url}`}
        >
          <Card item={item} />
        </Link>
      ))}
    </StyledCardsContainer>
  );
};

export default CardContainer;

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;
