import React from "react";
import Box from "@material-ui/core/Box";
import Swiper from 'react-id-swiper';
import Container from "@material-ui/core/Container";
import 'swiper/css/swiper.css';

import on_boarding1 from '../../../assets/slider/on_boarding1.svg';
import on_boarding2 from  '../../../assets/slider/on_boarding2.svg';
import on_boarding3 from '../../../assets/slider/on_boarding3.svg';

const styles = ({
    strip: {
        height: 350,
        minWidth: '100%',
        backgroundColor: '#506287',
        marginTop: 20,
    },
    slider: {
        marginLeft: '22.5%',
        width: '1100px',
        marginTop: -270,
        paddingBottom: 100,
    },
});

const swiperConfig = {

    effect: 'fade',
    spaceBetween: 70,
    loop: true,
    calculateHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
};



export default function Slider() {
    return (
        <Box>
            <Container style={styles.strip} />
            <Box style={styles.slider}>
                <Swiper {...swiperConfig}>
                    <div style={{backgroundColor: '#dceffd'}}><img src={on_boarding1} alt="1" /></div>
                    <div style={{backgroundColor: '#dceffd'}}> <img src={on_boarding2} alt='2' /></div>
                    <div style={{backgroundColor: '#dceffd'}}> <img src={on_boarding3} alt='3' /></div>
                </Swiper>
            </Box>
        </Box>
    )
}