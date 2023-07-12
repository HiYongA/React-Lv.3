import React, { useState } from "react";
import { NagativeButton, PrimaryButton } from "./Button";
import { styled } from "styled-components";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActive(!active);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
    setActive(!active);
  };

  const onClickStyleHandler = () => {
    setActive(!active);
  };

  const onClickOvelayHandler = (e) => {
    if (e.target === e.currentTarget) {
      closeModal2();
    }
  };

  return (
    <div>
      <PrimaryButton onClick={openModal}>open modal</PrimaryButton>
      {modalOpen && (
        <Overlay>
          <ModalContainer>
            <Text>
              닫기와 확인 버튼 2개가 있고, <br />
              외부 영역을 눌러도 모달이 닫히지 않아요.
            </Text>
            <NagativeButton
              position="absolute"
              right="85px"
              bottom="8px"
              active="#efa999"
              onClick={closeModal}
            >
              닫기
            </NagativeButton>
            <PrimaryButton
              position="absolute"
              right="8px"
              bottom="8px"
              active="#4cdfb5"
              onClick={onClickStyleHandler}
            >
              확인
            </PrimaryButton>
          </ModalContainer>
        </Overlay>
      )}
      <NagativeButton
        backgroundColor="transparent"
        fontWeight="bold"
        padding="15px 16px"
        borderWidth="3px"
        borderColor="#FAB1A0"
        borderStyle="solid"
        onClick={openModal2}
      >
        open modal
      </NagativeButton>
      {modalOpen2 && (
        <Overlay onClick={onClickOvelayHandler}>
          <ModalContainer>
            <Text>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
            </Text>
            <CloseBtn active="black" onClick={closeModal2}>
              X
            </CloseBtn>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  // position을 지정하고, inset요소와 상위 요소 사이의 거리를 설정
  inset: 0;
  background-color: #dddddda4;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 250px;
  /* 최상단 위치 */
  z-index: 999;
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 모달창 디자인 */
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`;

const Text = styled.p`
  padding-top: 20%;
  display: flex;
  justify-content: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid lightgray;
  font-weight: 530;
  cursor: pointer;

  &:hover {
    border-color: ${({ active }) => active};
  }
`;
