import React from 'react'
import Slider from 'react-slick'
import { Layout, } from 'antd';
import ProductStoreComponent from './ProductStoreComponent';
import { useSelector, } from 'react-redux'

const { Content, } = Layout;

/**
 * Componente Tienda.
 * Construye carousel de productos.
 * Hace uso de ProductStoreComponent para crear cada producto.
 */

const StoreComponent = () => {

    const prods = useSelector(store => store.tienda.products)

    var settings = {
        dots: false,
        infinite: true,
        speed: '1000',
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };

    return ( 

        <div style={{padding: '60px'}}>

            <Content>

                <Slider {...settings}>

                    { prods.map((item, i) => (<ProductStoreComponent key={item.id} product={item}></ProductStoreComponent>)) }

                </Slider>

            </Content>

        </div>

     );
}
 
export default StoreComponent;