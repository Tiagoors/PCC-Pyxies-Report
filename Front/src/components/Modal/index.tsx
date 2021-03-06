import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { instanceApi } from "../../services/api";
import { getToken, getUserData } from "../../services/authenticate";
import "./styles.scss";

type ModalProps = {
  setOpenModal: React.Dispatch<boolean>;
};

function Modal({ setOpenModal }: ModalProps) {
  const navigator = useNavigate();
  const [problem, setProblem] = useState("");
  const [sector, setSector] = useState("");
  const [userName, setUserName] = useState("");
  const [file, setFile] = useState<any>();

  useEffect(() => {
    const user = getUserData();
    setUserName(user.name);
  }, []);

  const sendProblem = async () => {
    const token = getToken();
    const user = getUserData();

    if (!token) {
      navigator("/login");
      return;
    }

    let data = new FormData();
    data.append("file", file);
    data.append("department", sector);
    data.append("description", problem);
    data.append("email", user.email);

    const response = await instanceApi.post("problems/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
    
    if (response.status === 201) {
      alert("Problema enviado com sucesso!");
      setOpenModal(false);
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div>
            Olá, nos informe seu problema
            {/*{username}*/}
          </div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="body">
          <textarea
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Insira aqui seu problema"
          ></textarea>
        </div>

        <div className="file-input">
          <input
            type="file"
            onChange={e => setFile(e.target.files[0])}
            name="file"
            id="file"
          />
        </div>
        <div className="select">
          <span>Escolha um</span>
          <select onChange={(e) => setSector(e.target.value)} name="select">
            <option selected>Setor</option>
            <option value="Esportivo">Esportivo</option>
            <option value="Biblioteca">Biblioteca</option>
            <option value="Refeitório">Refeitório</option>
            <option value="Laboratório">Laboratório</option>
            <option value="Almoxarifado">Almoxarifado</option>
          </select>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancelar
          </button>
          <button id="sendBtn" onClick={sendProblem}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
