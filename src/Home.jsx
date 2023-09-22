import React from "react";
import {link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        <div className="navbar">
          
          <Link to="/shop" className="button-link">
            Comprar Flores
          </Link>
          <Link to="/about" className="button-link">
            Sobre Nós
          </Link>
          <Link to="/contact" className="button-link">
            Contato
          </Link>
        </div>
        <div className="introduction">
          <h1>Seja Bem-vindo à Nossa Floricultura Pequeno Jardim</h1>
          <p>Explore a beleza das flores em nossa loja. Cadastre-se para receber ofertas especiais de nossa floricultura.</p>
          <Link to="/signup" className="button-link">
            Cadastre-se
          </Link>
          <img src="imagem1.png" alt="Imagem de Flores" />
        </div>
      </div>
    );
  }