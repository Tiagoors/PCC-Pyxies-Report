import React, { useEffect, useState } from "react";
import Problems from "../../components/Problems";
import { IProblemPost } from "../../interfaces/problemPost";
import { instanceApi } from "../../services/api";
import { getUserData } from "../../services/authenticate";
import { profile } from "../../environment/environment.json";

import "./styles.scss";
import { IAdmDepartment } from "../../interfaces/admDepartment";

export default function Admin() {
  const [posts, setPosts] = useState<IProblemPost[]>();
  const [user, setUser] = useState<IAdmDepartment>();

  useEffect(() => {
    getPostsToFeed();
    setUser(getUserData());
  }, []);

  const getPostsToFeed = async () => {
    const response = await instanceApi.get("problems/listen");
    setPosts(response.data[0]);
  };

  return (
    <div id="page-profile">
      <div className="container">
        <aside className="card">
          <img
            src={profile}
            alt="foto do perfil"
          />
          <h2>Jackson Marcony</h2>
          {/*<h2>{username}</h2>*/}
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
        {posts ? (
          posts?.map((post) => {
            return <Problems problemData={post} userData={user} />;
          })
        ) : (
          <>
            <h1>Não há problemas por aqui ainda.</h1>
          </>
        )}
      </main>
    </div>
  );
}
