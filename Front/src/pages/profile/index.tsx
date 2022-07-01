import React from "react";

import "./styles.scss";

export default function Profile() {
  return (
    <div id="page-profile">
      <div className="container">
        <aside className="card">
          <img
            src="https://www.pngmart.com/files/21/Account-User-PNG-Transparent.png"
            alt=""
          />
          <h2>Tiago Rodrigues</h2>
          <p>
            Estudante do <br />
            <strong>IF Baiano </strong>
          </p>
          <button form="form-profile" type="submit">
            Salvar dados
          </button>
        </aside>
        <main>
          <form id="form-profile" method="post">
            <fieldset>
              <legend>Mudar dados do perfil</legend>
              <div className="separator light"></div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="insira seu nome"
                  />
                </div>

                <div className="input-file">
                  <label>Escolha uma foto</label>
                  <input
                    type="file"
                    id="input-file"
                    accept=".png, .jpg, .jpeg"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Atualizar informações de entrada</legend>
              <div className="separator light"> </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>Instituição</label>
                  <input
                    type="text"
                    id="inst"
                    name="inst"
                    value="Instituto Federal Baiano"
                    disabled
                    placeholder="Instituição"
                  />
                </div>

                <div className="input-wrapper">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@gmail.com"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite a nova senha"
                  />
                </div>

                <div className="input-wrapper">
                  <label>Confirmar senha</label>
                  <input
                    type="password"
                    id="pwd"
                    name="pwd"
                    placeholder="Digite a nova senha"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
}
