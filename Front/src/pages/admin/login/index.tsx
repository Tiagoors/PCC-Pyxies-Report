import React from "react";

import logoImg from "../../../assets/img/logo.svg";
import logInIcon from "../../../assets/icons/login.svg";

import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

import "./styles.scss";
import { instanceApi } from "../../../services/api";
import {
  authenticateUser,
  setAdminLocal,
} from "../../../services/authenticate";

export default function AdminLogin() {
  const navigator = useNavigate();

  type IUserLogin = {
    cpf: string;
    password: string;
  };

  const handleToLoginUser = async (user: IUserLogin) => {
    try {
      const response = await instanceApi.post("admin/login", user);

      console.log(response.data);

      authenticateUser(response.data.token);
      setAdminLocal(response.data.infos);
      navigator("/admin");
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
            cpf: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await handleToLoginUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form mt-20">
              <div className="field-group">
                <label htmlFor="cpf">CPF</label>
                <Field
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="Digite seu CPF cadastrado"
                />
              </div>

              <div className="field-group">
                <label htmlFor="password">Senha</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite sua senha aqui"
                />
              </div>

              <div className="footerInput">
                <button type="submit">
                  <img src={logInIcon} width="25" alt="Confirmar" />
                  Acessar conta
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
