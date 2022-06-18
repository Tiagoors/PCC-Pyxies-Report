import React from "react";
import Problems from "../../components/Problems";

import "./styles.scss";

export default function Admin() {

  return (
      <div id="page-profile">
        <div className="container">
          <aside className="card">
            <img src="https://github.com/JacksonMarcony.png" alt="foto do perfil" />
            <h2>Jackson Marcony</h2>{/*<h2>{username}</h2>*/}
            <p>
              Administrador do setor <br />
              <strong>Esportivo</strong> {/*<strong>{setorName</strong>*/}
            </p>
            <button form="form-profile" type="submit">
              Enviar Solução
            </button>
          </aside>
        </div>

        <main>
          <Problems />
          <Problems />
          <Problems />
          <Problems />
        </main>
      </div>
  );
}
