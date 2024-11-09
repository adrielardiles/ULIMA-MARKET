const BannerPromocion = ({ categoriaId }) => {
    // Array of promotion banners
    const banners = [
      { id: 1, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/bebidas.webp`, categoriaId: 'bebidas' },
      { id: 2, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/carnes.png`, categoriaId: 'carnes y aves' },
      { id: 3, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/leche.webp`, categoriaId: 'lácteos y huevos' },
      { id: 4, imagen: `${process.env.PUBLIC_URL}/imagenes/productos/frutasVerduras.webp`, categoriaId: 'frutas y verduras' },
    ];
  
    // Normalize categoryId for consistent comparison
    const normalizedCategoriaId = categoriaId.toLowerCase().replace(/\s/g, '');
    console.log('Normalized Categoria ID:', normalizedCategoriaId);
  
    // Find the corresponding banner
    const bannerSeleccionado = banners.find(banner =>
      banner.categoriaId.toLowerCase().replace(/\s/g, '') === normalizedCategoriaId
    );
  
    if (!bannerSeleccionado) {
      console.log('No matching banner found for:', categoriaId);
    }
  
    return bannerSeleccionado ? (
      <div className="mb-4" style={{ marginBottom: '16px' }}>
        <img
          src={bannerSeleccionado.imagen}
          alt={`Promoción para categoría ${categoriaId}`}
          className="img-fluid w-100"
          style={{
            maxHeight: '200px',
            objectFit: 'cover',
            width: '100%',
            borderRadius: '5px',
          }}
        />
      </div>
    ) : null;
  };
  
export default BannerPromocion;
