import React, {
  useEffect,
  useState,
  memo,
  useCallback,
  createContext,
} from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import styled from "styled-components";
import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";

export const NewsContext = createContext(null);

export const defaultUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=7948227cd27043218b3e59bbcd5b050e";

const HomePage = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    setData(null);

    const data = await fetch(`${defaultUrl}`);
    if (!data.ok) {
      setLoading(false);
      setData(null);
      return setError("Unfortunatelly, it was impossible to get data");
    }
    const updatedData = await data.json();

    setLoading(false);
    setData(updatedData.articles);
    console.log(updatedData);
  }, [setLoading, setData, setError]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <NewsContext.Provider value={{ title: "Breaking News", newsData: data }}>
      <Container>
        <Header />

        {loading && (
          <>
            <Loader />
            Loading...
          </>
        )}
        {error && <Alert severity="error">{error}</Alert>}

        {data && <CardContainer />}
      </Container>
    </NewsContext.Provider>
  );
};

export default memo(HomePage);

const Container = styled.div``;
const Loader = styled(CircularProgress)`
  margin-top: 20px;
  color: purple !important;
`;
