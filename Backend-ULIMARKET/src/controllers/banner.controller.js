import Banner from '../dao/Banner.js'; 


export const obtenerBannerPorCategoriaId = async (req, res) => {
    try {
        const { categoria_id } = req.params;
        const banners = await Banner.findAll({ where: { categoria_id } });
        if (banners.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron registros para la categoría especificada' });
        }
        res.json(banners);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};


export const crearBanner = async (req, res) => {
    try {
        const { imagen, categoria_id } = req.body;
        const nuevoBanner = await Banner.create({ imagen, categoria_id });
        res.status(201).json(nuevoBanner);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
