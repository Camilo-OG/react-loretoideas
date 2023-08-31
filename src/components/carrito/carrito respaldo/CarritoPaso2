import React, { useState } from 'react';

function CarritoP2() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    comuna: '',
    fechaEntrega: '',
    telefono: '',
    correo: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí Realizar acción con los datos del formulario
    console.log(formData);
  };

  return (
    <div className="contenedor-carrito">
      <div className="cart-contenedor">
        <div className="cart-header t2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección de Calle</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comuna">Comuna</label>
              <input
                type="text"
                className="form-control"
                id="comuna"
                name="comuna"
                value={formData.comuna}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fechaEntrega">Fecha de Entrega</label>
              <input
                type="date"
                className="form-control"
                id="fechaEntrega"
                name="fechaEntrega"
                value={formData.fechaEntrega}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarritoP2;
