import { React, Fragment, useEffect, } from 'react'
import HeaderComponent from './HeaderComponent';
import StoreComponent from './StoreComponent';
import CartComponent from './CartComponent';
import { useDispatch, useSelector, } from 'react-redux'
import { getAllProductsAction, } from '../redux/storeDuck'
import { Modal, Button, } from 'antd';
import { setOpenCartAction } from '../redux/cartDuck'

/**
 * Componente principal que llama a la estructura basica
 * de la tienda y el carro de compras
 */

const HomeComponent = () => {

    const dispatch = useDispatch()
    const isModalVisible = useSelector(store => store.carro.openCart)
    const closeCart = () =>  dispatch(setOpenCartAction(false))

    useEffect(() => dispatch(getAllProductsAction()));

    return ( 
    
        <Fragment>

            <HeaderComponent />

            <StoreComponent />

            <Modal 
                width={1000} 
                title={<h1>Carrito de compras</h1>}
                visible={isModalVisible} 
                onCancel={closeCart}
                footer={[
                    <Button type="text" key="back" onClick={closeCart}>
                      Volver a la tienda
                    </Button>
                  ]}
            >

                <CartComponent />

            </Modal>

        </Fragment>

    );
}
 
export default HomeComponent;