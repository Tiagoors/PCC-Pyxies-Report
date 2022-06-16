import React from "react";

import "./styles.scss";

export default function Profile() {
  const avatar = "https://github/Tiagoors.png";

  return (
    <div id="page-profile">
      <div className="container">
        <aside className="card">
          <img src={avatar} alt="" />
          <h2>Tiago Rodrigues</h2>
          <p>
            Estudante do <br />
            <strong>
              Instituição Federal De Ciências e Tecnologia Baiano{" "}
            </strong>
          </p>
          <button form="form-profile" type="submit">
            Salvar dados
          </button>
        </aside>
        <main>
          <form id="form-profile" method="post" action="/profile">
            <fieldset>
              <legend>Dados do perfil</legend>
              <div className="separator light"></div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>Nome</label>
                  <input type="text" id="name" name="name" value="Tiago" />
                </div>

                <div className="input-wrapper">
                  <label>Escolha um foto</label>
                  <input
                    placeholder="https://"
                    type="url"
                    id="avatar"
                    name="avatar"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Atualizar</legend>
              <div className="separator light"> </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>Instituição</label>
                  <input
                    type="text"
                    id="inst"
                    name="instituição"
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
                    name="senha"
                    placeholder="Digite a nova senha"
                  />
                </div>

                <div className="input-wrapper">
                  <label>Confirmar senha</label>
                  <input
                    type="password"
                    id="confirm-pass"
                    name="confirm-senha"
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
