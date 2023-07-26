import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getData = async () => {
    const { data } = await axios(url);
    setDataFetch({
      data: data.products,
      loading: false,
    });
    console.log(data.products);
  };

  useEffect(() => {
    return () => {
      getData();
    };
  }, []);

  return dataFetch;
};

export default useFetch;
