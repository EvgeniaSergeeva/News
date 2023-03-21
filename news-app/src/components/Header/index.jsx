import React, { memo, useContext } from "react";
import styled from "styled-components";

import { NewsContext } from "../../pages/HomePage";

const Header = ({ title }) => {
  const { title: newsPageTitle } = useContext(NewsContext);
  return <HeaderTitle> {newsPageTitle}</HeaderTitle>;
};

const HeaderTitle = styled.h1`
  color: darkgrey;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;
export default memo(Header);
