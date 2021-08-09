import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { getUsersAsync } from "../modules/sample";
import Sample from "../components/Sample";

const SampleContainer = () => {
  const dispatch = useDispatch();
  const { users, loading, hasErrors } = useSelector(({ sample }) => ({
    users: sample.users,
    loading: sample.loading,
    hasErrors: sample.hasErrors,
  }));
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return <Sample users={users} loading={loading} hasErrors={hasErrors} />;
};

export default React.memo(SampleContainer);
