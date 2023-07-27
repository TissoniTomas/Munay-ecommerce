import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url, id) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setDataFetch({
        data: data.products,
        loading: false,
      });
    } catch (error) {
      setDataFetch({
        data: null,
        loading: false,
        error,
      });
      console.error('Error fetching data:', error);
    }
  };

  const getDataId = async () => {
    try {
      const { data } = await axios(url + id);
      setDataFetch({
        data,
        loading: false,
      });
      console.log(data.products);
    } catch (error) {
      setDataFetch({
        data: null,
        loading: false,
        error,
      });
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (id) {
      getDataId();
    } else {
      getData();
    }
  }, []);

  return dataFetch;
};

export default useFetch;
