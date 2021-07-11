import React from 'react'
import logo from '../assets/logosp.jpg'
import { Input, Button, Menu, Dropdown, Typography, Avatar, Badge, } from 'antd';
import { ShoppingCartOutlined, DownOutlined, UserOutlined, } from '@ant-design/icons';
import { useDispatch, useSelector, } from 'react-redux'
import { setOpenCartAction } from '../redux/cartDuck'
const { Search } = Input;
const { Text } = Typography;

/**
 * Componente Header de la aplicacion.
 * Reune logo, buscador, boton de carrito y controles de usuario para perfil.
 */

const HeaderComponent = () => {

    const dispatch = useDispatch()
    const openCart = () =>  dispatch(setOpenCartAction(true))
    const productsCart = useSelector(store => store.carro.productsCart)

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="/">Foo</a>
          </Menu.Item>
        </Menu>
      );

    return ( 
        <header style={{ backgroundColor: '#25c16a', position: 'relative', height: '60px' }} >

            <div style={{width: '20%', float: 'left'}}>

                <img  src={logo} alt={"asd"} />

            </div>

            <div style={{width: '50%', float: 'left', marginTop: '8px'}}>

                <Search 
                    placeholder="Buscar marcas y productos" 
                    onSearch={a => a} 
                    style={{ width: '70%' }} 
                />

            </div>

            <div style={{width: '30%', float: 'left', marginTop: '12px',textAlign: 'center'}}>

                <div style={{width: '30%', float: 'left'}}>

                    <Badge count={productsCart.length}>

                        <Button 
                            style={{backgroundColor: '#25c16a', color: 'white', border: 'none' }} 
                            shape="circle" 
                            icon={<ShoppingCartOutlined style={{fontSize:'30px'}} />} 
                            onClick={openCart}
                        />

                    </Badge>

                </div>

                <div style={{width: '70%', float: 'left'}}>

                    <div style={{width: '50%', float: 'left', textAlign: 'right'}}>

                        <Text style={{color: 'white'}} strong>Saiby Alimentos</Text><br />

                        <Dropdown  overlay={menu} trigger={['click']}>
                            <a style={{color: 'white'}} href="/"> Mi Perfil <DownOutlined /> </a>
                        </Dropdown>
                        
                    </div>

                    <div style={{width: '45%', float: 'left', textAlign: 'left', marginLeft: '8px'}}>

                        <Avatar icon={<UserOutlined />} />

                    </div>

                </div>

            </div>
            

        </header>
     );
}
 
export default HeaderComponent;