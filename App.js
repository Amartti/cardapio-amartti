import React, { useState } from 'react'; // Importa o React e o hook useState
import MenuItem from './components/MenuItem'; // Importa o componente MenuItem
import Cart from './components/Cart'; // Importa o componente Cart
import './styles/global.css'; // Importa os estilos globais

// Lista de itens do cardápio
const menuItems = [
    { nome: "Bombom Trufado", preco: 6.99 },
    { nome: "ChupChup Gourmet", preco: 4.50 },
    { nome: "Torta de Chocolate", preco: 12.00 }
];

const App = () => {
    const [cart, setCart] = useState([]); // Estado do carrinho

    // Função que adiciona um item ao carrinho
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // Função para enviar o pedido pelo WhatsApp
    const sendOrder = () => {
        const message = cart.map(item => `${item.nome} - R$${item.preco.toFixed(2)}`).join("\n"); // Formata a mensagem
        const total = cart.reduce((acc, item) => acc + item.preco, 0); // Calcula o total
        const whatsappMessage = `Olá, gostaria de fazer um pedido:\n${message}\nTotal: R$${total.toFixed(2)}`;
        window.open(`https://wa.me/SEUNUMERO?text=${encodeURIComponent(whatsappMessage)}`, '_blank'); // Abre o WhatsApp
    };

    return (
        <div className="menu">
            <h1>Amartti - Cardápio Digital</h1>
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} onAdd={addToCart} /> // Renderiza os itens do menu
            ))}
            <Cart cartItems={cart} /> {/* Renderiza o carrinho */}
            <button onClick={sendOrder}>Enviar Pedido pelo WhatsApp</button> {/* Botão de envio */}
        </div>
    );
};

export default App; // Exporta o App
