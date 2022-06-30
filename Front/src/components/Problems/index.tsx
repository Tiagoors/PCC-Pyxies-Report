import React, { ReactNode, useState } from "react";

import answerImg from "../../assets/img/answer.svg";

import ModalSolution from "../../components/ModalSolution";
import { IAdmDepartment } from "../../interfaces/admDepartment";
import { IProblemPost } from "../../interfaces/problemPost";
import { instanceApi } from "../../services/api";

import "./styles.scss";
// { ReactNode } from react

// type ProblemProps = {
//   content: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   children?: ReactNode;
// };

// parametros pro problem
// {
//   content,
//   author,
//   children,
// }: ProblemProps

type ProblemProps = {
  problemData: IProblemPost;
  userData?: IAdmDepartment;
  children?: ReactNode;
};

export default function Problems({
  problemData,
  userData,
  children,
}: ProblemProps) {
  const [modalSolutionOpen, setModalSolutionOpen] = useState(false);

  const handleToSendSolution = async (solution: string) => {
    const response = await instanceApi.post('/solutions/create', {
      solution,
      email: userData?.email,
      problem: problemData.id
    })

    if (response.status === 201) {
      alert("Sua resposta foi enviada ao aluno, obrigado.")
    } else {
      alert("Algo deu errado, tente novamente.")
    }
  };

  return (
    <div className="problem">
      <p>{problemData.description}</p>
      {/*<p>{content}</p>*/}

      <footer>
        <div className="user-info">
          <img src="https://github.com/Tiagoors.png" alt="Tiago" />{" "}
          {/*<img src={author.avatar} alt={author.name} />*/}
          <span>Tiago</span> {/*<span>{author.name}</span>*/}
        </div>
        <div>
          {children}
          <button
            type="button"
            onClick={() => {
              setModalSolutionOpen(true);
            }}
          >
            <span>Responder</span>
            <img src={answerImg} alt="Responder a pergunta" />
          </button>
        </div>
      </footer>
      {modalSolutionOpen && (
        <ModalSolution
          setOpenModalSolution={setModalSolutionOpen}
          handleToSendSolution={handleToSendSolution}
        />
      )}
    </div>
  );
}
