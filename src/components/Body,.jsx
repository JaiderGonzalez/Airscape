import React from 'react';
import  { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Estilos CSS
import './App.css';



// Componente del formulario de búsqueda
const SearchForm = () => {
  return (
    <form className="search-form">
      <input type="text" className="search-input" placeholder="Destino" />
      <input type="text" className="search-input" placeholder="Fecha de salida" />
      <input type="text" className="search-input" placeholder="Fecha de regreso" />
      <button type="submit" className="search-button">Buscar</button>
    </form>
  );
};

// Componente del resultado de búsqueda
const SearchResult = ({ title, subtitle, price }) => {
  return (
    <div className="search-result">
      <h2 className="result-title">{title}</h2>
      <p className="result-subtitle">{subtitle}</p>
      <p className="result-price">{price}</p>
    </div>
  );
};

const Slider = () => {
  return(
    <div className="slider">

    <Carousel>
      <div>
        <img src="https://easyfly.com.co/glide//files/destinos/VUP/Vuelos_Medellin_Valledupar.png?w=1920" alt="Imagen 1" />
        <p className="legend">Leyenda de la imagen 1</p>
      </div>
      <div>
        <img src="https://www.avianca.com/content/dam/avianca_new/contenido/proaruba/viajes-a-aruba-oranjestad-arquitectura-holandesa.jpg" alt="Imagen 2" />
        <p className="legend">Leyenda de la imagen 2</p>
      </div>
      <div>
        <img src="https://www.avianca.com/content/dam/avianca_new/contenido/banner-home/scy/viajes-a-Guayaquil-para-conocer-el-barrio-las-penas.jpg?lazy=true" alt="Imagen 3" />
        <p className="legend">Leyenda de la imagen 3</p>
      </div>
    </Carousel>
  </div>
  );
  
};

// Componente principal de la aplicación
const App = () => {
  return (
    <div className="app">
      
      <Slider />
      <SearchForm />
      <div className="search-results">
        <SearchResult title="Vuelo a Miami" subtitle="Salida: 10 de junio, Regreso: 20 de junio" price="$500" />
        <SearchResult title="Hotel en Cancún" subtitle="Fecha: 15 de julio - 22 de julio" price="$800" />
        {/* Agrega más resultados de búsqueda según sea necesario */}
      </div>
    </div>
  );
};

export default App;