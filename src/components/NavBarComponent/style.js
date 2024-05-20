import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WrapperLabelText = styled.h4`
  color: rgb(56, 56, 61);
  font-size: 14px;
  font-weight: 500;
`;

export const WrapperTextValue = styled.span`
  color: rgb(56, 56, 61);
  font-size: 12px;
  font-weight: 400;
`;

export const WrapperContent = styled.div`
  display: flex;
  //align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const WrapperTextPrice = styled.div`
  padding: 4px;
  color: rgb(56, 56, 61);
  border-radius: 10px;
  background-color: rgb(238, 238, 238);
  width: fit-content;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
  width: 100%;
  text-align: center;
`;
