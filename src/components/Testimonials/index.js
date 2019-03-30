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
        title: "I've Never Had a Better Haircut",
        text: "It's great to relax and enjoy a haircut for once knowing that you are in the skilled care of a Master Barber. I've never had a better haircut. Sandra makes me look 10 years younger and feel twice as smart which is some achievement!",
        author: "Trevor Gallagher"
    },
    {
        title: "The Best Barbers in Kilkenny",
        text: "The best barbers in Kilkenny. Lovely friendly staff who always give you exactly what you want. I wouldn’t go anywhere else. Can’t recommend enough. 10/10.",
        author: "Noel Kehoe"
    }, 
    {
        title: "So Friendly and Professional",
        text: "I took my son for his haircut today which is usually stressful on him but the owner was so friendly and professional and put him right at ease. Great service at a great price. Will definitely be back.",
        author: "Lianne Kelly"
    }
]