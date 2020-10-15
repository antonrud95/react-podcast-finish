import React, { ReactNode } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FC from '~/types/fc'

import styles from  './slider.module.scss'

interface Props {
    children: ReactNode
}

const SimpleSlider: FC<Props> = ({ children }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: styles.customDots
    }
    return (
        <Container className={styles.carouselContainer}>
            <Row>
                <Col
                xs="12" md="8" lg="7"
                className={styles.carouselCol} 
                >
                    <Slider {...settings}>
                        {children}
                    </Slider>
                </Col>
            </Row>
        </Container>
       
    )
}

export default SimpleSlider

