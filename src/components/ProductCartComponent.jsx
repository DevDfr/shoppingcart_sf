import React, { useState } from 'react'
import { MinusOutlined, PlusOutlined, DeleteOutlined, } from '@ant-design/icons';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux'
import { Row, Col, Typography, Divider, } from 'antd';
import { removeProductCartAction } from '../redux/cartDuck'

const { Text } = Typography;

/**
 * Producto de carro.
 * Componente para crear cada uno de los productos en el carro.
 * @param {object} props.product
 */

const ProductCartComponent = (props) => {

    const price_real = parseInt(props.product.price_real)

    const [totalProduct, setTotalProduct] = useState(price_real);
    const [cantProduct, setcantProduct] = useState(1);

    const dispatch = useDispatch()
    const removeProductCart = () =>  dispatch(removeProductCartAction(props.product))

    const upCant = () => {
        setcantProduct(cantProduct + 1)
        setTotalProduct(totalProduct + price_real)
    }

    const downCant = () => {
        if(cantProduct > 1){
            setcantProduct(cantProduct - 1)
            setTotalProduct(totalProduct - price_real)
        } 
    }

    return ( 

        <Row>

            <Divider />

            <Col span={12}>

                <Row>

                    <Col span={8}>
                        <img
                            style={{width: '130px', height: '130px'}}
                            alt="img"
                            src={props.product.thumbnail}
                        />
                    </Col>
                    <Col span={16}>
                        <Text className="prodttl" strong> {props.product.title} </Text><br/>
                        <Text className="units" strong>x{props.product.units_sf} unids</Text><br/>
                        <Text className="spf">{props.product.category}</Text>
                    </Col>

                </Row>

            </Col>

            <Col span={6}>

                <p style={{marginTop: '20%'}}>

                    <button onClick={downCant} type="button" className="btn-cant">
                        <MinusOutlined />
                    </button>
                    <span className="counter">
                        <Text strong> {cantProduct} </Text>
                    </span>
                    <button onClick={upCant} type="button" className="btn-cant">
                        <PlusOutlined />
                    </button>

                </p>

            </Col>

            <Col span={4}>
                
                <p style={{marginTop: '25%'}}>
                    <Text className="cop" strong>$</Text>
                    <Text className="val" strong> <NumberFormat value={totalProduct} displayType={'text'} thousandSeparator={true}/> </Text>
                </p>

            </Col>

            <Col span={2}>

                <p style={{marginTop: '55%'}}>
                    <button onClick={removeProductCart} type="button" className="btn-trash">
                        <DeleteOutlined />
                    </button>
                </p>

            </Col>

        </Row>

     );
}
 
export default ProductCartComponent;