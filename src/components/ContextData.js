import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextData = createContext();

export const ArticleProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-02-19&sortBy=publishedAt&apiKey=523146b4168947eaaaaab13c9d39fd73`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ContextData.Provider value={{ data }}>
      {props.children}
    </ContextData.Provider>
  );
};
