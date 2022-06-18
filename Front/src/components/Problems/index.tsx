import React, { ReactNode } from "react";

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
  children?: ReactNode;
};

export default function Problems({ children }: ProblemProps) {
  return (
    <div className="problem">
      <p>
        Dependendo do tipo de revestimento usado, como, por exemplo, quando se
        usa pisos de madeira especial para esportes, a necessidade de pequenas
        manutenções em decorrência do uso da quadra pode custar caro. Além
        disso, certos pisos exigem mão de obra extremamente especializada, o que
        diminui a gama de opções de fornecedores e pode fazer com que você tenha
        que esperar algum tempo pelo serviço.
      </p>
      {/*<p>{content}</p>*/}

      <footer>
        <div className="user-info">
          <img src="https://github.com/Tiagoors.png" alt="Tiago" />{" "}
          {/*<img src={author.avatar} alt={author.name} />*/}
          <span>Tiago</span> {/*<span>{author.name}</span>*/}
        </div>
        <div>{children}</div> {/*<div>{children}</div>*/}
      </footer>
    </div>
  );
}
