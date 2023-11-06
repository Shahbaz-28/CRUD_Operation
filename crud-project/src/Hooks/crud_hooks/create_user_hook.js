import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserApi } from "../../store/create_user_slice";

const useCreate = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.create.result); 
  console.log("data from store to hook", userData);

  const [data, setdata] = useState({}); 

  useEffect(() => {
    dispatch(createUserApi());
  }, [dispatch]);

  useEffect(() => {
    setdata(userData);
  }, [userData]);

  return data;
};

export default useCreate;
