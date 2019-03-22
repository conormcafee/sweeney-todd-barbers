import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { COLOR } from "../../globals";

import "./overide.css";

const Testimonials = () => (
    <Wrapper py={[5,6]}>
        <Carousel autoplay={true} showThumbs={false} showStatus={false} showArrows={false}>
            {TESTIMONIALS.map((item, index) => (
                <Flex 
                    key={index} 
                    flexWrap={['wrap', 'nowrap']}
                    mx="auto" 
                    css={{ maxWidth: '900px' }}>
                    
                    <TitleBox width={[1, 1/2]} p={[3,4]}>
                        <SubTitle>Testimonials</SubTitle>
                        <Title>{item.title}</Title>
                    </TitleBox>

                    <TextBox width={[1, 1/2]} p={[3,4]}>
                        <Text>{item.text}</Text>   
                        <Author>{item.author}</Author>    
                    </TextBox>
                </Flex>
            ))}
        </Carousel>
    </Wrapper>
)

export default Testimonials

const Wrapper = styled(Flex)`
    overflow: hidden;
`

const SubTitle = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
`

const TitleBox = styled(Box)`
    text-align: left; 
    @media only screen and (min-width: 850px) {
        text-align: right;
    }
`

const Title = styled.h2`
    margin-top: 0;
    max-width: 250px;

    @media only screen and (max-width: 849px) {
        margin-right: auto;
    }
    
    @media only screen and (min-width: 850px) {
        margin-left: auto;
    }
`

const TextBox = styled(Box)`
    text-align: left;
`

const Text = styled.p`
    margin-top: 0;
`

const Author = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    color: ${COLOR.BRAND.BASE};
`

const TESTIMONIALS = [
    {
        title: "Best Hair Cut in Kilkenny",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor..",
        author: "Conor McAfee"
    },
    {
        title: "The Barbers are Really Friendly",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et.",
        author: "Maeve Finnegan"
    }
]