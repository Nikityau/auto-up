import React from "react";
import { useFetchTest } from "../helpers/hooks/use-fetch-test";

const TestProvider = ({children}:React.PropsWithChildren) => {

  useFetchTest()

  return (
    <>
      {children}
    </>
  );
};

export default TestProvider;