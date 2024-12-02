import React, { useState, useEffect } from 'react';

const BannerPromocion = ({ categoriaId }) => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  const fetchBanners = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3000/banners/categoria/${categoriaId}`);
      if (!respuesta.ok) {
        if (respuesta.status === 404) {
          setBanners([]);
          return;
        }
        throw new Error('Error al obtener los banners');
      }
      const data = await respuesta.json();
      setBanners(data);
    } catch (err) {
      setError(err.message);
      setBanners([]);
    }
  };

  useEffect(() => {
    if (categoriaId) {
      fetchBanners();
    }
  }, [categoriaId]);

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="banner-promocion">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner.imagen.startsWith('http') ? banner.imagen : `${process.env.PUBLIC_URL}${banner.imagen}`}
          alt={`Banner de categoría ${categoriaId}`}
          style={{ 
            width: '100%', 
            height: 'auto', 
            maxHeight: '200px', 
            objectFit: 'cover' 
          }}
        />
      ))}
    </div>
  );
};

export default BannerPromocion;
