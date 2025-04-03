import React from 'react';

// Componente do carrinho que mostra os itens adicionados
const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.preco, 0); // Calcula o total da compra

    return (
        <div className="cart">
            <h2>Seu Pedido</h2>
            {cartItems.map((item, index) => (
                <p key={index}>{item.nome} - R${item.preco.toFixed(2)}</p> // Lista os produtos adicionados
            ))}
            <h3>Total: R${total.toFixed(2)}</h3> {/* Exibe o total da compra */}
        </div>
    );
};

export default Cart; // Exporta o componente
