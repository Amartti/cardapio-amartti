import React from 'react';
import './menu.css'; // Importa os estilos do menu

// Componente que representa um item do cardápio
const MenuItem = ({ item, onAdd }) => {
    return (
        <div className="menu-item">
            <span>{item.nome} - R${item.preco.toFixed(2)}</span> {/* Exibe o nome e preço */}
            <button onClick={() => onAdd(item)}>Adicionar</button> {/* Botão de adicionar ao carrinho */}
        </div>
    );
};

export default MenuItem; // Exporta o componente
