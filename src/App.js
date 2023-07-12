import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";
import { styled } from "styled-components";

export default function App() {
  return (
    <Layout>
      <h2>Button</h2>
      <Button />
      <h2>Input</h2>
      <Input />
      <h2>Modal</h2>
      <Modal />
      <h2>Select</h2>
      <Select />
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0px 10px;
`;
