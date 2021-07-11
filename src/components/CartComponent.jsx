import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Typography, } from 'antd';
import ProductCartComponent from './ProductCartComponent';

const { Text } = Typography;

/**
 * Componente Carro.
 * Construye la lista de productos en el carro con sus controles.
 * Hace uso de ProductCartComponent para crear cada producto.
 */

const CartComponent = () => {

    const productsCart = useSelector(store => store.carro.productsCart)
    
    return ( 

        <div>
            <Row>

                <Col span={24} style={{textAlign: 'right'}}>
                    <Text className="spf">{productsCart.length}</Text> <Text strong>items</Text>
                </Col>

                <Col span={12}>
                    <h3>Item</h3>
                </Col>
                <Col span={6}>
                    <h3>Cantidad</h3>
                </Col>
                <Col span={6}>  
                    <h3>Precio</h3> 
                </Col>

            </Row>

            {
                productsCart.map(item => (<ProductCartComponent key={item.id} product={item} />))
            }

        </div>
     );
}
 
export default CartComponent;