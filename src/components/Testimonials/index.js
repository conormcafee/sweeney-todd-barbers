import React from "react"
import {StaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { COLOR } from "../../globals";

import "./overide.css";

export default () => <StaticQuery query={testimonialsQuery} render={data => <Testimonials data={data} />}/>

const Testimonials = (props) => {
    const data = props.data
    const testimonials = data.file.childMarkdownRemark.frontmatter.testimonial
    return (
        <Wrapper py={[5,6]}>
            <Carousel autoplay={true} showThumbs={false} showStatus={false} showArrows={false}>
                {testimonials.map((item, index) => (
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
                            <Text>{item.message}</Text>   
                            <Author>{item.name}</Author>    
                        </TextBox>
                    </Flex>
                ))}
            </Carousel>
        </Wrapper>
    )
}

const testimonialsQuery = graphql`
    query {
        file(name: { eq: "testimonials"}) {
            childMarkdownRemark {
                frontmatter {
                    testimonial {
                        message
                        name
                        title
                    }
                }
            }
        }
    }
`

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