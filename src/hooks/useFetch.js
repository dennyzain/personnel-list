import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState();
  const fetch = useCallback(async () => {
    const res = await axios.get('https://randomuser.me/api/?results=28');
    setData(res.data);
  });
  useEffect(() => {
    fetch();
  }, []);

  return data;
};

export default useFetch;
