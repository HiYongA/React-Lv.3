import React, { useState } from "react";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineRight } from "react-icons/ai";
import { styled } from "styled-components";

export default function Button() {
  const [active, setActive] = useState(false);

  const onClickPrimaryHandler = () => {
    alert("버튼을 만들어보세요");
  };

  const onClickNagativeHandler = () => {
    prompt("어렵나요?");
  };

  const onClickStyleHandler = () => {
    setActive(!active);
  };

  return (
    <>
      <div>
        <PrimaryButton
          backgroundColor="transparent"
          fontWeight="bold"
          padding="15px 20px"
          borderWidth="3px"
          borderColor="#53eec3"
          borderStyle="solid"
          onClick={onClickPrimaryHandler}
        >
          Large Primary Button <AiOutlineRight />{" "}
        </PrimaryButton>
        <PrimaryButton
          padding="12px 20px"
          active="#4cdfb5"
          onClick={onClickStyleHandler}
        >
          Medium
        </PrimaryButton>
        <PrimaryButton active="#4cdfb5" onClick={onClickStyleHandler}>
          Small
        </PrimaryButton>
      </div>
      <div>
        <NagativeButton
          backgroundColor="transparent"
          fontWeight="bold"
          padding="15px 16px"
          borderWidth="3px"
          borderColor="#FAB1A0"
          borderStyle="solid"
          onClick={onClickNagativeHandler}
        >
          Large Nagative Button <VscBellDot />
        </NagativeButton>
        <NagativeButton
          padding="12px 20px"
          active="#efa999"
          onClick={onClickStyleHandler}
        >
          Medium
        </NagativeButton>
        <NagativeButton active="#efa999" onClick={onClickStyleHandler}>
          Small
        </NagativeButton>
      </div>
    </>
  );
}

// 스타일 컴포넌트에서 자바스크립트 표현식을 사용해야 할 때, 템플릿 리터럴( =${}) 문법을 활용한다.
export const PrimaryButton = styled.button`
  /* 콜백 함수를 사용한 이유는 props의 값을 인자로 받아 동적인 스타일링을 하기 위해서이다. */
  background-color: ${(props) => props.backgroundColor || "#53eec3"};
  color: black;
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight || null};
  padding: ${(props) => props.padding || "10px 20px"};
  margin: 10px;
  border-width: ${(props) => props.borderWidth || null};
  border-color: ${(props) => props.borderColor || "transparent"};
  border-style: ${(props) => props.borderStyle || null};
  border-radius: 10px;
  position: ${(props) => props.position || null};
  right: ${(props) => props.right || null};
  bottom: ${(props) => props.bottom || null};
  cursor: pointer;

  &:active {
    background-color: ${({ active }) => active};
  }
`;

export const NagativeButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#FAB1A0"};
  color: #cc0808;
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight || null};
  padding: ${(props) => props.padding || "10px 20px"};
  margin: 10px;
  border-width: ${(props) => props.borderWidth || null};
  border-color: ${(props) => props.borderColor || "transparent"};
  border-style: ${(props) => props.borderStyle || null};
  border-radius: 10px;
  position: ${(props) => props.position || null};
  right: ${(props) => props.right || null};
  bottom: ${(props) => props.bottom || null};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => active};
  }
`;
