/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../Detalles/Detalles.css'
import Modal from 'react-bootstrap/Modal';
import "../productos/productos.css"
import 'bootstrap/dist/css/bootstrap.min.css'


 
export default function CardTortas(props) {
  const src = 'img/'
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(props.precio[0])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-producto">
      <div className="card m-0">
        <div className="img-container m-2">
          <div className="m-3 imagen-producto">
            <img src={src+props.imagen} id="imagen-card" className="card-img-top " alt={props.img_descripcion}/>
          </div>
          <div className="btn-detalle mb-2">
            <button className="btn detalle card-text" onClick={handleShow}>+ Detalle</button>
          </div>
        </div>
        <div className="card-body p-0">
          <div>
            <h5 className="card-title">{props.nombre}</h5>
          </div>
          <div className="d-inline">
            <p className="card-text porciones">{props.porciones[0]} porciones</p>
           </div>
          <div className="d-flex text-center align-items-center justify-content-around mt-2 ">
            <p className="card-text precio">$ {props.precio[0]}</p>
            <a href="#" className="btn boton-agregar-carrito align-content-end">Agregar</a>
          </div>
        </div>
      </div>
      
      <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>
        <div className="mitad-arriba">
        <button className='boton-flecha p-0 ' onClick={handleClose}>
          <img className="flecha" src="icons/flecha naranja.png" alt="flecha" />
        </button>
        <a href="#">
          <img
            className="kuchen"
            src={src+props.imagen}
            alt={props.img_descripcion}
          />
        </a>
        <div className="contenedor">
          <div className="izquierda">
            <h5 className='m-0'>Medidas</h5>
            <div className="medidas btn-group">
              <button type="button" className="btn btn-medidas" onClick={()=> setPrice(props.precio[0])}>S</button>
              <button type="button" className="btn btn-medidas" onClick={()=> setPrice(props.precio[1])}>M</button>
              <button type="button" className="btn btn-medidas" onClick={()=> setPrice(props.precio[2])}>L</button>
              <button type="button" className="btn btn-medidas" onClick={()=> setPrice(props.precio[3])}>XL</button>
              <button type="button" className="btn btn-medidas" onClick={()=> setPrice(props.precio[4])}>XXL</button>
            </div>
          </div>
          <div className="derecha">
            <a href="#">
              <img className="corazon" src="icons/Me-gusta.png" alt="corazon" />
            </a>
            <br></br>
           $ {price}
          </div>
        </div>
      </div>

      <div className="mitad-abajo">
        <p className="titulo"> {props.nombre} </p>
        <p className='descripcion'>{props.descripcion}</p>
        <div className="medidas-productos">
          <ul className='porciones'>
            <li className='item-lista-titulo'>Medidas</li>
            <li className='item-lista'>S= {props.porciones[0]} porciones</li>
            <li className='item-lista'>M= {props.porciones[1]} porciones</li>
            <li className='item-lista'>L= {props.porciones[2]} porciones</li>
            <li className='item-lista'>XL= {props.porciones[3]} porciones</li>
            <li className='item-lista'>XXL= {props.porciones[4]} porciones</li>
          </ul>
          
        </div>
        
          <a className='btn btn-carrito'>Agregar <img className="carrito" src="icons/carrito.png" alt="carrito" /></a>
       
      </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

