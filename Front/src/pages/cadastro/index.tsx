import React from "react";

import logoImg from "../../assets/img/logo.svg";
import logInIcon from "../../assets/icons/login.svg";

import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Cadastro() {
  return (
    <div id="login-page">
      <main className="form-container box-shadow">
        <Link to="/">
          <img src={logoImg} width="300" alt="Pyxies Report" />
        </Link>

        <div className="text-center mt-20">
          <h1>Seja bem-vindo</h1>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {}}
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
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

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
                  placeholder="Crie uma senha"
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="email">Confirmar senha</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Digite a senha novamente"
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="footerInput">
                <Link to="/login">
                  <button type="submit">
                    <img src={logInIcon} width="30" alt="Confirmar" />
                    Criar conta
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
}
