import React, { useState, useEffect } from "react";
import EntradaDatos from "../components/EntradaDatos";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminPage = () => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaNombre, setCategoriaNombre] = useState("");
    const [productoDatos, setProductoDatos] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
        stock: "",
        categoria_id: "",
    });
    const [usuarioEmail, setUsuarioEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [productos, setProductos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        const cargarCategorias = async () => {
            try {
                const response = await fetch("http://localhost:3000/categorias");
                const data = await response.json();
                if (response.ok) {
                    setCategorias(data);
                } else {
                    console.error("Error al cargar categorías:", data.error);
                }
            } catch (error) {
                console.error("Error al cargar categorías:", error);
            }
        };

        const cargarProductos = async () => {
            try {
                const response = await fetch("http://localhost:3000/productos");
                const data = await response.json();
                if (response.ok) {
                    setProductos(data);
                } else {
                    console.error("Error al cargar productos:", data.error);
                }
            } catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };

        cargarProductos();
        cargarCategorias();
    }, []);


    const handleEliminarProducto = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/productos/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setMensaje("Producto eliminado con éxito.");
                setProductos(productos.filter((producto) => producto.id !== id));
            } else {
                const data = await response.json();
                setMensaje(data.error || "Error al eliminar producto.");
            }
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            setMensaje("Error al eliminar producto.");
        }
    };

    

    const handleCrearCategoria = async () => {
        try {
            const response = await fetch("http://localhost:3000/categorias", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre: categoriaNombre }),
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`Categoría "${data.nombre}" creada con éxito.`);
                setCategoriaNombre("");
                setCategorias([...categorias, data]);
            } else {
                setMensaje(data.error || "Error al crear categoría.");
            }
        } catch (error) {
            console.error("Error al crear categoría:", error);
            setMensaje("Error al crear categoría.");
        }
    };

    const handleCrearProducto = async () => {
        try {
            const response = await fetch("http://localhost:3000/productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productoDatos),
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`Producto "${data.nombre}" creado con éxito.`);
                setProductos([...productos, data]);
                setProductoDatos({
                    id: "",
                    nombre: "",
                    descripcion: "",
                    precio: "",
                    imagen: "",
                    stock: "",
                    categoria_id: "",
                });
                setMostrarModal(false);
            } else {
                setMensaje(data.error || "Error al crear producto.");
            }
        } catch (error) {
            console.error("Error al crear producto:", error);
            setMensaje("Error al crear producto.");
        }
    };

    const handleModificarProducto = async () => {
        try {
            const response = await fetch(`http://localhost:3000/productos/${productoDatos.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productoDatos),
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`Producto "${data.nombre}" modificado con éxito.`);
                setProductos(
                    productos.map((p) =>
                        p.id === data.id ? { ...p, ...productoDatos } : p
                    )
                );
                setMostrarModal(false);
            } else {
                setMensaje(data.error || "Error al modificar producto.");
            }
        } catch (error) {
            console.error("Error al modificar producto:", error);
            setMensaje("Error al modificar producto.");
        }
    };

    const abrirModal = (producto = null) => {
        if (producto) {
            setProductoDatos(producto); 
        } else {
            setProductoDatos({
                id: "",
                nombre: "",
                descripcion: "",
                precio: "",
                imagen: "",
                stock: "",
                categoria_id: "",
            }); 
        }
        setMostrarModal(true);
    };

    return (
        <>
            <Header />
            <div className="container mb-5 mt-5">
                <h1 className="text-center">Panel de Administración</h1>
                <div className="mt-5">
                    <h3>Crear Nueva Categoría</h3>
                    <EntradaDatos
                        label="Nombre de la categoría"
                        tipo="text"
                        valor={categoriaNombre}
                        setValor={setCategoriaNombre}
                        placeholder="Ingrese el nombre de la categoría"
                    />
                    <button className="btn btn-danger mt-2" onClick={handleCrearCategoria}>
                        Crear Categoría
                    </button>
                </div>

                <div className="mb-5 mt-5">
                    <h3>Lista de Productos</h3>
                    <button className="btn btn-success mb-3" onClick={() => abrirModal()}>
                        Crear Producto
                    </button>
                    <ul className="list-group">
                        {productos.map((producto) => (
                            <li
                                key={producto.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {producto.nombre}
                                <div>
                                    <button
                                        className="btn btn-warning me-2"
                                        onClick={() => abrirModal(producto)}
                                    >
                                        Modificar
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleEliminarProducto(producto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {mostrarModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {productoDatos.id ? "Modificar Producto" : "Crear Producto"}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setMostrarModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <EntradaDatos
                                    label="Nombre"
                                    tipo="text"
                                    valor={productoDatos.nombre}
                                    setValor={(value) =>
                                        setProductoDatos({ ...productoDatos, nombre: value })
                                    }
                                    placeholder="Ingrese el nombre del producto"
                                />
                                <EntradaDatos
                                    label="Descripción"
                                    tipo="text"
                                    valor={productoDatos.descripcion}
                                    setValor={(value) =>
                                        setProductoDatos({ ...productoDatos, descripcion: value })
                                    }
                                    placeholder="Ingrese la descripción"
                                />
                                <EntradaDatos
                                    label="Precio"
                                    tipo="number"
                                    valor={productoDatos.precio}
                                    setValor={(value) =>
                                        setProductoDatos({ ...productoDatos, precio: value })
                                    }
                                    placeholder="Ingrese el precio"
                                />
                                <EntradaDatos
                                    label="Stock"
                                    tipo="number"
                                    valor={productoDatos.stock}
                                    setValor={(value) =>
                                        setProductoDatos({ ...productoDatos, stock: value })
                                    }
                                    placeholder="Ingrese el stock"
                                />
                                <EntradaDatos
                                    label="Imagen"
                                    tipo="text"
                                    valor={productoDatos.imagen}
                                    setValor={(value) =>
                                        setProductoDatos({ ...productoDatos, imagen: value })
                                    }
                                    placeholder="Ingrese la URL de la imagen"
                                />
                                <div className="mb-2">
                                    <label className="form-label">Categoría</label>
                                    <select
                                        className="form-select"
                                        value={productoDatos.categoria_id}
                                        onChange={(e) =>
                                            setProductoDatos({
                                                ...productoDatos,
                                                categoria_id: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="" disabled>
                                            Seleccione una categoría
                                        </option>
                                        {categorias.map((categoria) => (
                                            <option key={categoria.id} value={categoria.id}>
                                                {categoria.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setMostrarModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={
                                        productoDatos.id ? handleModificarProducto : handleCrearProducto
                                    }
                                >
                                    {productoDatos.id ? "Guardar Cambios" : "Crear Producto"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default AdminPage;
