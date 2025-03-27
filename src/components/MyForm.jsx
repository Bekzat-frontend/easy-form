import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function MyForm() {
  const { register, control } = useForm();
  return (
    <FormWrapper>
      <h1>Example form</h1>
      <StyledForm>
        <label>Email</label>
        <StyledInput type="email" placeholder="email" {...register("email")} />

        <label>password</label>
        <StyledInput
          type="password"
          placeholder="password"
          {...register("password")}
        />

        <StyledButton type="submit">Click</StyledButton>
      </StyledForm>
      <DevTool control={control} />
    </FormWrapper>
  );
}

export default MyForm;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 300px;
`;

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
