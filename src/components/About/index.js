import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import Barbers from "../../images/sweeney-barbers.jpg"

const About = () => (
    <Wrapper 
        as="section" 
        flexWrap={['wrap']}
        justifyContent="space-between"
        alignItems="center"
        mx="auto" 
        py={[5,6]}
        css={{ maxWidth: `900px`}}>

        <Box as="article" width={[1, 1/2]} px={[3, 4]}>
            <h2>Friendly, Talented Barbers in the Heart of Kilkenny Town</h2>
            <p>We cater for all ages and styles and no hair style is too challenging for us.</p>
            <p>With nearly 50 years combined experience, you are in safe hands with Sandra and Ruth - we have the experience and know-how to transform your image and have you looking ship shape in no time.</p>
            <p>Our friendly and open atmosphere means we can cater for all of your needs - autistic & special needs friendly. We also provide specialist hair care services for people with hairloss and hair maintenence needs</p>
        </Box>

        <Box width={[1, 1/2]} px={[3, 4]}>
            <ImageWrapper>
                <AboutImage src={Barbers} alt="Susan & Ruth, Sweeney Barbers" />
            </ImageWrapper>
        </Box>
    </Wrapper>
)

export default About

const Wrapper = styled(Flex)`
    overflow: hidden;
`

const ImageWrapper = styled.div`
	background: rgba(250, 182, 69, 0.3);
	padding: 32px;
	border-radius: 20px;
	transform: translate(75px, 0) rotate(45deg);
`

const AboutImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: -5px 7px 7px 2px rgba(0,0,0,0.4);
	transform: rotate(-45deg);
	filter: grayscale(100%);
`