import { Pais } from "../dao/Pais.js"; 
import { Departamento } from "../dao/Departamento.js";
import { Provincia } from "../dao/Provincia.js";
import { Distrito } from "../dao/Distrito.js";

// CRUD para Países

export const crearPaises = async (req, res) => {
  const { paises } = req.body; // Se espera que `paises` sea una lista de objetos
  try {
    await Promise.all(
      paises.map(async (pais) => await Pais.create(pais))
    );
    res.status(201).json({ error: "" }); // Respuesta modificada
  } catch (error) {
    res.status(500).json({ error: "Error al crear los países", detalle: error.message });
  }
};

export const obtenerPaises = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    res.status(200).json(paises);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los países", detalle: error.message });
  }
};

// CRUD para Departamentos

export const crearDepartamentos = async (req, res) => {
  const { departamentos } = req.body; // Se espera que `departamentos` sea una lista de objetos
  try {
    await Promise.all(
      departamentos.map(async (departamento) => await Departamento.create(departamento))
    );
    res.status(201).json({ error: "" }); // Respuesta modificada
  } catch (error) {
    res.status(500).json({ error: "Error al crear los departamentos", detalle: error.message });
  }
};

export const obtenerDepartamentos = async (req, res) => {
  try {
    const departamentos = await Departamento.findAll();
    res.status(200).json(departamentos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los departamentos", detalle: error.message });
  }
};

// CRUD para Provincias

export const crearProvincias = async (req, res) => {
  const { provincias } = req.body; // Se espera que `provincias` sea una lista de objetos
  try {
    await Promise.all(
      provincias.map(async (provincia) => await Provincia.create(provincia))
    );
    res.status(201).json({ error: "" }); // Respuesta modificada
  } catch (error) {
    res.status(500).json({ error: "Error al crear las provincias", detalle: error.message });
  }
};

export const obtenerProvincias = async (req, res) => {
  try {
    const provincias = await Provincia.findAll();
    res.status(200).json(provincias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las provincias", detalle: error.message });
  }
};

// CRUD para Distritos

export const crearDistritos = async (req, res) => {
  const { distritos } = req.body; // Se espera que `distritos` sea una lista de objetos
  try {
    await Promise.all(
      distritos.map(async (distrito) => await Distrito.create(distrito))
    );
    res.status(201).json({ error: "" }); // Respuesta modificada
  } catch (error) {
    res.status(500).json({ error: "Error al crear los distritos", detalle: error.message });
  }
};

export const obtenerDistritos = async (req, res) => {
  try {
    const distritos = await Distrito.findAll();
    res.status(200).json(distritos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los distritos", detalle: error.message });
  }
};
