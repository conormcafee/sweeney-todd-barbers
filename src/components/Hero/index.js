import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import WhiteLogo from "../../images/logo-white.svg"
import Texture from "../../images/backgrounds/asfalt-light.png"
import Salon from "../../images/backgrounds/sweeney-todd-salon.jpg"
import {COLOR} from "../../globals"

const Hero = () => (
    <Wrapper 
        as="section"
		px={[3, 4]}
		py={[5, 6]}
		alignItems="center"
        justifyContent="center"
        style={{ backgroundImage: `url(${Salon})`}}>
        <Content>
            <Image src={WhiteLogo} alt="Sweeney Todd Barbers" />
			
			<Box my={5}>
				<Button href="tel:+353864040676" mr={true}>Call Us</Button>
				<Button href="/">Find Us</Button>
			</Box>
			
			<blockquote>
				<h1>The no.1 friendly barbers in Kilkenny</h1>
			</blockquote>

        </Content>
    </Wrapper>
)

export default Hero

const Button = styled.a`
	display: inline-block;
	line-height: 1.3;
	color: #ffffff;
	background: ${COLOR.BRAND.BASE};
	border: 2px solid ${COLOR.BRAND.BASE};
	padding: 10px 32px;
	border-radius: 12px;
	font-weight: 600;
	text-transform: uppercase;
	box-shadow: -5px 7px 7px 2px rgba(0,0,0,0.1);
	margin-right: ${props => props.mr ? `32px` : `0px`};
	text-decoration: none;
	transition: background 150ms ease-in, border-color 150ms ease-in, color 150ms ease-in;

	&:hover {
		cursor: pointer;
		background: ${COLOR.BRAND.BASE};
		color: #ffffff;
		border: 2px solid ${COLOR.BRAND.BASE};
	}
`

const Wrapper = styled(Flex)`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border-bottom: 5px solid ${COLOR.PRIMARY.MID};

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(${Texture});
		background-size: 466 px 349px;
	}

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(63,55,51);
		background: linear-gradient(180deg, rgba(63,55,51,0.7) 0%, rgba(63,55,51,1) 100%);
	}

	h1 {
		color: #ffffff;
	}
`

const Content = styled(Box)`
	position: relative;
	z-index: 1;
	text-align:center;
`

const Image = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
`