import React, {useState } from 'react'
import { Card, Typography, Divider, Row, Col, Tag, } from 'antd';
import NumberFormat from 'react-number-format';
import ProductControlComponent from './ProductControlComponent';
import { useDispatch } from 'react-redux'
import { setProductToCartAction } from '../redux/cartDuck'

const { Text } = Typography;

/**
 * Producto de Tienda.
 * Componente para crear cada uno de los productos de la tienda.
 * @param {object} props.product
 */

const ProductStoreComponent = props => {

    const [btnShow, setbtnShow] = useState(false);
    const dispatch = useDispatch()
    
    const onBtn = () =>  setbtnShow(true)
    const offBtn = () => setbtnShow(false)
    const setProductToCart = () =>  dispatch(setProductToCartAction(props.product))

    return ( 
        <div onMouseEnter={onBtn} onMouseLeave={offBtn} style={{ width: 300 }}>

            <Card className="pcard" bordered={true}>

                <Row>
                    <Col span={21}>

                        <Row justify="space-around" align="middle">

                            <Col span={12}>

                                <p className="height-120">

                                    <img style={{width: '130px', height: '130px'}} alt="" src={props.product.thumbnail} />

                                </p>
                                
                            </Col>   

                        </Row>                        
                    </Col>

                    <Col span={3}>

                        {
                            props.product.sellos.map((item, i) =>  (<ProductControlComponent key={item.name} control={item} />))
                        }
                        
                    </Col>

                    <Col span={24}>
                        <Divider></Divider>
                    </Col>

                    <Col span={24}>
                        
                        <Row>

                            <Col span={12} style={{textAlign:'left'}}>
                                <Text className="spf">{props.product.category}</Text>
                            </Col>
                            <Col span={12} style={{textAlign:'right'}}>
                                <Tag  color="#25c16a">{props.product.net_content}</Tag>
                            </Col>
                            <br />
                            <Col span={24} style={{textAlign:'left'}}>
                                <Text className="prodttl" strong> {props.product.title} </Text>
                            </Col>

                            <Col span={24} style={{textAlign:'left'}}>
                                <Text className="cop" strong>$</Text>
                                <Text className="val" strong> <NumberFormat value={props.product.price_real} displayType={'text'} thousandSeparator={true}/> </Text>
                                
                                <Text className="units" strong>x{props.product.units_sf} unids</Text>
                            </Col>

                        </Row>

                    </Col>

                    

                </Row>

            </Card>

            <button onClick={setProductToCart} className="btnadd" style={{visibility: btnShow ? 'visible' : 'hidden'}}> 
                <Text strong className="txtbtnadd">Agregar al carrito </Text> 
            </button>

        </div>

     );
}
 
export default ProductStoreComponent;