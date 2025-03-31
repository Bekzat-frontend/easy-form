import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User registered:", data);
    navigate("/login");
  };

  return (
    <Container>
      <h2 style={{ fontSize: "30px", fontWeight: "900" }}>Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            type="text"
            {...register("fullName")}
            placeholder="Full Name"
            required
          />
          {errors.fullName && <Error>{errors.fullName.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="email"
            {...register("email")}
            placeholder="Email"
            required
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputContainer>

        <InputContainer>
          <Input
            type="password"
            {...register("password", {
              minLength: {
                value: 6,
                message: "пароль должен быть 6 символов",
              },
            })}
            placeholder="Password"
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </InputContainer>

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  background-color: rgba(242, 242, 242, 0.6);
  max-width: 350px;
  margin: auto;
  margin-top: 95px;
  padding: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
