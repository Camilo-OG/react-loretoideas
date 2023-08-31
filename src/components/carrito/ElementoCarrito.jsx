import React from 'react';
//import CardTartaleta from '../pages/productos/CardTartaleta.jsx';

function ElementoCarrito({ data, cantidad, disminuirCantidad, aumentarCantidad, eliminar }) {
  const src = 'img/'
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={src+data.imagen} alt={data.img_descripcion} className='img-carrito-pequeña'/>
      </div>
      <div className="item-details">
        <div className="item-title">{data.nombre}</div>
        <div className="item-price">${data.precio[2]}</div>
      </div>
      <div className="item-quantity">
        <button className="quantity-button" onClick={disminuirCantidad}>-</button>
        <span className="quantity">{cantidad}</span>
        <button className="quantity-button" onClick={aumentarCantidad}>+</button>
        <button className="btn btn-danger btn-sm" onClick={eliminar}>Eliminar</button>
      </div>
    </div>
  );
}

export default ElementoCarrito;
