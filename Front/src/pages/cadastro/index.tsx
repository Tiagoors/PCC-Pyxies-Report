import React from "react";

import logoImg from "../../assets/img/logo.svg";
import logInIcon from "../../assets/icons/login.svg";

import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

import "./styles.scss";
import { instanceApi } from "../../services/api";
import { authenticateUser } from "../../services/authenticate";

export default function Cadastro() {
  const navigator = useNavigate();

  interface User {
    name: string;
    email: string;
    password: string;
    registry: string;
  }

  const handleRegisterUser = async (user: User) => {
    const response = await instanceApi.post("users/create", {
      ...user,
      isVerify: false,
    });

    if (response.status === 201) {
      authenticateUser(response.data.token)
      navigator("/")
    }
  };

  return (
    <div id="login-page">
      <main className="form-container box-shadow">
        <Link to="/">
          <img src={logoImg} width="200" height="100" alt="Pyxies Report" />
        </Link>

        <div className="text-center mt-20">
          <h2>Seja bem-vindo</h2>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            registry: "",
          }}
          onSubmit={async (values: User) => {
            await handleRegisterUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form mt-20">
              <div className="field-group">
                <label htmlFor="email">Name</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Insira seu nome"
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemplo@email.com"
                />
              </div>

              <div className="field-group">
                <label htmlFor="registry">Matrícula</label>
                <Field
                  id="registry"
                  name="registry"
                  type="registry"
                  placeholder="Insira sua matrícula do suap"
                />
              </div>

              <div className="field-group">
                <label htmlFor="password">Senha</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Crie uma senha"
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">Confirmar senha</label>
                <Field
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Digite a senha novamente"
                />
              </div>

              <div className="footerInput">
                <button type="submit">
                  <img src={logInIcon} width="25" alt="Confirmar" />
                  Criar conta
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
