import React, { useState } from 'react';
import CardTartaleta from '../pages/productos/CardTartaleta';
import ElementoCarrito from './ElementoCarrito';

export default function EstadoCarrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const disminuirCantidad = (index) => {
    if (index >= 0 && index < carrito.length) {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
        console.log(`Se disminuyó la cantidad del ${carrito[index].nombre}. Cantidad actual: ${carrito[index].cantidad}`);
      } else {
        console.log(`No se puede disminuir más la cantidad del ${carrito[index].nombre}.`);
      }
    } else {
      console.log('Índice inválido.');
    }
  };
  // Llamada a la función para disminuir la cantidad del producto en el índice 1
  disminuirCantidad(1);

  const aumentarCantidad = (index) => {
    if (index >= 0 && index < carrito.length) {
      carrito[index].cantidad++;
      console.log(`Se aumentó la cantidad del ${carrito[index].nombre}. Cantidad actual: ${carrito[index].cantidad}`);
    } else {
      console.log('Índice inválido.');
    }
  };
  
  // Llamada a la función para aumentar la cantidad del producto en el índice 0
  aumentarCantidad(0);

  const eliminarProducto = (index) => {
    if (index >= 0 && index < carrito.length) {
      const productoEliminado = carrito.splice(index, 1);
      console.log(`Se eliminó el ${productoEliminado[0].nombre} del carrito.`);
    } else {
      console.log('Índice inválido.');
    }
  };
  
  // Llamada a la función para eliminar el producto en el índice 1
  eliminarProducto(1);

  return (
    <div>
      {/* Renderizar la lista de productos */}
      {productos.map((producto, index) => (
        <CardTartaleta key={index} {...producto} agregarAlCarrito={agregarAlCarrito} />
      ))}

      {/* Renderizar la lista de elementos en el carrito */}
      {carrito.map((producto, index) => (
        <ElementoCarrito
          key={index}
          {...producto}
          disminuirCantidad={() => disminuirCantidad(index)}
          aumentarCantidad={() => aumentarCantidad(index)}
          eliminar={() => eliminarProducto(index)}
        />
      ))}
    </div>
  );
}
