import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/get_user_slice";

const useGetApi = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getReadApi.loading);
  const getUserdata = useSelector((state) => state.getReadApi.data);
  console.log("data from store to hook", getUserdata);
  const [data, setdata] = useState([]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  useEffect(() => {
    setdata(getUserdata);
  }, [getUserdata]);

  return {
    loading,
    data,
  };
};

export default useGetApi;
