import React, { useState } from 'react';
import PedidoItem from './PedidoItem'; 

const Pedidos = () => {
    const pedidosPorDefecto = [
        { id: 1, fecha: "03/10/24", monto: 50.25, productos: [{ nombre: "Producto A", cantidad: 2, precio: 25.12 }] },
        { id: 2, fecha: "04/10/24", monto: 30.00, productos: [{ nombre: "Producto B", cantidad: 1, precio: 30.00 }] },
        { id: 3, fecha: "05/10/24", monto: 75.50, productos: [{ nombre: "Producto C", cantidad: 3, precio: 25.17 }] },
        { id: 4, fecha: "06/10/24", monto: 20.00, productos: [{ nombre: "Producto D", cantidad: 1, precio: 20.00 }] },
    ];

    const [pedidos] = useState(pedidosPorDefecto);

    return <>
        <div className="container">
            <h2 className="text-center mb-4">Tus Pedidos</h2>
            <div className="row">
                {pedidos.map((pedido, index) => (
                    <div key={pedido.id} className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                        <PedidoItem pedido={pedido} />
                    </div>
                ))}
            </div>
        </div>
    </>
};

export default Pedidos;
