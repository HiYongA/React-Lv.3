import React, { useState } from "react";
import { styled } from "styled-components";
import { PrimaryButton } from "./Button";

export default function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitHandler = () => {
    alert(`{ name: ${name}, price: ${price.replace(/,/g, "")} }`);
  };

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangePriceHandler = (e) => {
    const value = e.target.value.replace(/,/g, ""); // 콤마 제거
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 콤마 추가
    setPrice(formattedValue);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>이름</label>
      <StInput
        type="text"
        value={name}
        onChange={onChangeNameHandler}
        required
      />
      <label>가격</label>
      <StInput
        type="text"
        value={price}
        onChange={onChangePriceHandler}
        required
      />
      <PrimaryButton>저장</PrimaryButton>
    </form>
  );
}

const StInput = styled.input`
  margin: 0px 10px;
  width: 120px;
  height: 20px;
  border-radius: 7px;
`;
