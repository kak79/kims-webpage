import React, { useState, useEffect } from 'react';

const APIStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const UseAPI = url => {
  const [data, setData] = useState({
    state: APIStates.LOADING,
    error: '',
    data: [],
  });

  const setPartData = (partialData) => setData({ ...data, ...partialData });

  useEffect(() => {
    setPartData({
      state: APIStates.LOADING,
    });
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setPartData({
          state: APIStates.SUCCESS,
          data
        });
      })
      .catch(() => {
       setPartData({
          state: APIStates.ERROR,
          error: 'fetch failed'
        });
      });
  }, []);

  return data;
};

export {APIStates};
export {UseAPI};