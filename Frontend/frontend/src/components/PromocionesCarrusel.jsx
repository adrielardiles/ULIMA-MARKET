const PromocionesCarrusel = ({ promociones }) => (
    <div id="promocionesCarrusel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {promociones.map((promocion, index) => (
          <div key={promocion.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={promocion.imagen}
              alt={promocion.titulo}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{promocion.titulo}</h5>
              <p>{promocion.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  export default PromocionesCarrusel