import { useState } from "react";
import { Link } from "react-router-dom";
import 'todo.css';

export default function Todo() {
  const [produtos, setProdutos] = useState([]);
  const [id, setId] = useState(1);
  const [nomeProduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  

  function adicionarProduto(e) {
    e.preventDefault();
    setProdutos([
      ...produtos,
      {
        id: id,
        nomeProduto: nomeProduto,
        preco: preco,
        quantidadeEstoque: quantidadeEstoque,
      },
    ]);
    setId(id + 1);
    setNomeProduto("");
    setPreco("");
    setQuantidadeEstoque("");
   
  }

  const removerProduto = (id) => {
    const produtosFiltrados = produtos.filter((produto) => produto.id !== id);
    setProdutos(produtosFiltrados);
  }

  return (
    <div className="container">
      <h1>Floricultura - Gerenciamento de Produtos</h1>
      <h1>Lista de Produtos</h1>
      <form onSubmit={adicionarProduto}>
        <div className="input-container">
          <label htmlFor="nomeProduto">Nome do Produto:</label>
          <input
            id="nomeProduto"
            
            onChange={(e) => setNomeProduto(e.target.value)}
            type="text"
            value={nomeProduto}
          />
          <label htmlFor="preco">Preço:</label>
          <input
            id="preco"
    
            onChange={(e) => setPreco(e.target.value)}
            type="text"
            value={preco}
          />
          <label htmlFor="quantidadeEstoque">Quantidade em Estoque:</label>
          <input
            id="quantidadeEstoque"
          
            onChange={(e) => setQuantidadeEstoque(e.target.value)}
            type="text"
            value={quantidadeEstoque}
          />
          <button className="">Adicionar Produto</button>
        </div>
      </form>

      {exibirMensagem && (
        <p className="exibir  mensagem">Produto adicionado com sucesso!</p>
      )}

      <div>
        <div className="values-area">
          {produtos.map((produto) => (
            <div key={produto.id}>
              <p>Nome do Produto: {produto.nomeProduto}</p>
              <p>Preço: {produto.preco}</p>
              <p>Quantidade em Estoque: {produto.quantidadeEstoque}</p>
              <button className onClick={() => removerProduto(produto.id)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}