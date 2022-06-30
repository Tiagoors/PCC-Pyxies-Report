import React from "react";

import logoImg from "../../assets/img/logo.svg";
import logInIcon from "../../assets/icons/login.svg";

import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

import "./styles.scss";
import { instanceApi } from "../../services/api";
import { authenticateUser } from "../../services/authenticate";

export default function Login() {
  const navigator = useNavigate();

  type IUserLogin = {
    email: string;
    password: string;
  };

  const handleToLoginUser = async (user: IUserLogin) => {
    try {
      const response = await instanceApi.post("users/login", user);

      if (response.status === 200) {
        authenticateUser(response.data.token);
        navigator("/");
      }
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
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
          <p>Preencha os campos para entrar.</p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await handleToLoginUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form mt-20">
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemplo@email.com"
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="email">Senha</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha aqui"
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="footerInput">
                <button type="submit">
                  <img src={logInIcon} width="25" alt="Confirmar" />
                  Acessar conta
                </button>

                <br />

                <label>
                  Não possui uma conta ? <a href="/cadastro">Cadastre-se</a>{" "}
                </label>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
