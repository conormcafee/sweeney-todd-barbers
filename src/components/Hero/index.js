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
		p={[3, 4]}
		alignItems="center"
        justifyContent="center"
        style={{ backgroundImage: `url(${Salon})`}}>
        <Content>
            <Image src={WhiteLogo} alt="Sweeney Todd Barbers" />
			<Button type="button">Call us now</Button>
        </Content>
    </Wrapper>
)

export default Hero

const Button = styled.button`
	display: inline-block;
	line-height: 1.3;
	background: ${COLOR.BRAND.BASE};
	border: 2px solid ${COLOR.BRAND.LIGHT};
	padding: 10px 32px;
	border-radius: 20px;
	font-weight: 600;
	text-transform: uppercase;
	margin-top: 32px;
	box-shadow: -5px 7px 7px 2px rgba(0,0,0,0.1);
	transition: background 150ms ease-in, border-color 150ms ease-in;

	&:hover {
		cursor: pointer;
		background: ${COLOR.BRAND.LIGHT};
		border: 2px solid ${COLOR.BRAND.BASE};
	}
`

const Wrapper = styled(Flex)`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	height: calc(100vh - 150px);
	max-height: 1200px;

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
		background: rgb(0,0,0);
		background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%);
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