import "./Main.css";
import { useState } from "react";
import Container from "../Container";
import { Outlet } from "react-router";
function Main() {
  return (
    <main className="main">
      <Container className="main__container">
        <Outlet />
      </Container>
    </main>
  );
}

export default Main;
