import React from "react";
import { useAppState } from "../../Context/useAppContext";
import Login from "../Login-Reg/Login";

function Home() {
  const { auth } = useAppState();

  return (
    <>
      {auth ? (
        <>Home Page</>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default Home;
