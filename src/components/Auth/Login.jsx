import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User logged in:", data);
    navigate("/movie");
  };

  return (
    <Container>
      <h2 style={{ fontSize: "30px", fontWeight: "900" }}>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </InputContainer>

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  max-width: 350px;
  margin: auto;
  margin-top: 70px;
  padding: 20px;
  text-align: center;
  height: 40vh;
  background-color: rgba(242, 242, 242, 0.6);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
`;
