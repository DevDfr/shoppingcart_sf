import React from 'react'
import { Tooltip, Typography, } from 'antd';

const { Text } = Typography;

/**
 * Control de producto.
 * Componente que crea sello con tooltip para cada producto de la tienda.
 * @param {object} props.control
 */

const ProductControlComponent = props => {

    const text = (<span >
        <Text className="tooltpttl" strong>Producto</Text> <br />
            <span> {props.control.name} </span>
        </span>);

    return ( 

        <div style={{marginTop: '5px'}}>

            <Tooltip placement="right" title={text} color={'#065f71'}>
                <img style={{width: '20px', height: '20px'}} alt="" src={props.control.image} />
            </Tooltip>

        </div>

     );
}
 
export default ProductControlComponent;