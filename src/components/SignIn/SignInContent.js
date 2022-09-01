import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 692px;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
  overflow: hidden;
  z-index: 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-top: 32px;
  margin-left: 32px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: grid;
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 4px;
  padding: 80px 32px;
  background-color: #010101;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  z-index: 1;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
`;

export const FormInput = styled.input`
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  padding: 16px 16px;
`;

export const FormButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 16px 0;
  background-color: #01bf71;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;
