import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addingDataFetching } from '../redux/reducer';

const useFetch = () => {
  const dispatch = useDispatch();

  const fetch = useCallback(async () => {
    const res = await axios.get('https://randomuser.me/api/?results=28');
    dispatch(addingDataFetching(res.data.results));
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);
};

export default useFetch;
