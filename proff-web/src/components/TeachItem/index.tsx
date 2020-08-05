import React from "react";
import wppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeachItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1271115818089226240/gnMXsHvk_400x400.jpg"
          alt="Jose Ivan"
        />
        <div>
          <strong>Jose Ivan</strong>
          <span>Matematica</span>
        </div>
      </header>
      <p>
        Quase lá!
        <br />
        Você esta lá
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$1,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="WhatApp" />
          Reache me!
        </button>
      </footer>
    </article>
  );
};

export default TeachItem;
