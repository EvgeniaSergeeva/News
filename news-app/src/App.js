import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import ROUTES from "./constants/routes";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFound from "./pages/NotFound";
import { defaultUrl } from "./pages/HomePage";

const App = () => {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  console.log(defaultUrl);

  const getData = useCallback(async () => {
    //setLoading(true)
    setData(null);

    const data = await fetch(`${defaultUrl}`);
    if (!data.ok) {
      //setLoading(false)
      setData(null);
      return setError("Unfortunatelly, it was impossible to get data");
    }
    const updatedData = await data.json();

    //setLoading(false)
    setData(updatedData.articles);
    console.log(updatedData.articles);
  }, [setData, setError]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} exact element={<HomePage />} />
        {data?.map((item) => (
          <Route
            key={item.url}
            path={ROUTES.HOME + `${item?.url && item.url}`}
            element={<DetailsPage item={item} />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
