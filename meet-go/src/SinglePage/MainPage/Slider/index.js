import React from "react";
import Box from "@material-ui/core/Box";
import Swiper from 'react-id-swiper';
import Container from "@material-ui/core/Container";
import 'swiper/css/swiper.css';

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
                    <img src="https://ninetrends.ru/wp-content/uploads/2016/03/Ekskursiya-po-Prage-1100x500.jpg" alt="1" />
                    <img src="https://www.echaandscience.com/wp-content/uploads/2018/12/road-1100x500.jpg" alt="2" />
                    <img src="https://b122fe8e0b8ea4d16cb3-8420fc0ce05d0ddef095398ad3e98f10.ssl.cf5.rackcdn.com/230816_pandafull.jpg" alt="3" />
                </Swiper>
            </Box>
        </Box>
    )
}