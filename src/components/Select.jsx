import React, { useState } from "react";
import { styled } from "styled-components";

export default function Select() {
  const options = [
    {
      id: 1,
      name: "리액트",
    },
    {
      id: 2,
      name: "자바",
    },
    {
      id: 3,
      name: "스프링",
    },
    {
      id: 4,
      name: "리액트네이티브",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const onChangeOptionHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const onChangeOptionHandler2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  return (
    <Container>
      {/* select의 value속성은 문자열로 처리된다. */}
      <ParentSelect>
        <StSelect value={selectedOption} onChange={onChangeOptionHandler}>
          {options.map((option) => (
            <option key={option.value} value={option.id}>
              {option.name}
            </option>
          ))}
        </StSelect>
      </ParentSelect>
      <ChildSelect>
        <StSelect value={selectedOption2} onChange={onChangeOptionHandler2}>
          {options.map((option) => (
            <option key={option.value} value={option.id}>
              {option.name}
            </option>
          ))}
        </StSelect>
      </ChildSelect>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  border: 3px solid lightgray;
  margin-bottom: 20px;
  display: flex;
`;

const StSelect = styled.select`
  width: 200px;
  height: 35px;
  margin: 15px;
  padding-left: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const ParentSelect = styled.div``;

const ChildSelect = styled.div`
  overflow: hidden;
`;
