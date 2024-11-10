const BannerPromocion = ({ categoriaId }) => {
  // Array de banners de promoción
  const banners = [
      { id: 1, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/bebidas.webp`, categoriaId: 'bebidas' },
      { id: 2, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/carnes.png`, categoriaId: 'carnes y aves' },
      { id: 3, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.webp`, categoriaId: 'lácteos y huevos' },
      { id: 4, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/frutasVerduras.webp`, categoriaId: 'frutas y verduras' },
  ];

  // Normalización de categoriaId para comparación
  const normalizedCategoriaId = categoriaId.toLowerCase().replace(/\s/g, '');

  // Encontrar el banner correspondiente
  const bannerSeleccionado = banners.find(banner =>
      banner.categoriaId.toLowerCase().replace(/\s/g, '') === normalizedCategoriaId
  );

  return bannerSeleccionado ? <>
      <div className="mb-4">
          <img
              src={bannerSeleccionado.imagen}
              alt={`Promoción para categoría ${categoriaId}`}
              className="img-fluid w-100"
              style={{
                  maxHeight: '200px',
                  objectFit: 'cover',
                  borderRadius: '5px',
              }}
          />
      </div>
      </> : null;
};

export default BannerPromocion;
