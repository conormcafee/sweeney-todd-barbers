import React from "react"
import styled from "styled-components"
import {Flex} from "@rebass/grid"
import Header from "../header"
import Texture from "../../images/backgrounds/asfalt-light.png"
import Salon from "../../images/backgrounds/sweeney-todd-salon.jpg"
import {COLOR} from "../../globals"

const Hero = () => (
    <Wrapper style={{ backgroundImage: `url(${Salon})`}}>
		<Header />
        <Content
			as="section"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<blockquote>
				<h1><Quote start={true.toString()}>"</Quote>The no.1 friendly barbers in Kilkenny<Quote start={false.toString()}>"</Quote></h1>
			</blockquote>

			<Button>Call Us</Button>
        </Content>
    </Wrapper>
)

export default Hero

const Wrapper = styled.div`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	height: 100vh;

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
		max-width: 550px;
		font-size: 30px;
		line-height: 1.4;

		@media only screen and (min-width: 768px) {
			font-size: 60px;
		}
	}
`

const Quote = styled.span`
	color: ${COLOR.BRAND.LIGHT};
	margin: 0 5px;
	transform: ${props => props.start === 'true' ? `translate(0px, -7px)` : `translate(0px, -5px)`};
    display: inline-block;
    font-size: 20px;

	@media only screen and (min-width: 768px) {
		transform: ${props => props.start === 'true' ? `translate(-5px, -13px)` : `translate(7px, 3px)`};
		font-size: 40px;
	}
`

const Content = styled(Flex)`
	position: relative;
	z-index: 1;
	text-align:center;
	height: calc(100vh - 240px);
`

const Button = styled.a`
	display: inline-block;
	line-height: 1.3;
	color: #ffffff;
	background: ${COLOR.BRAND.BASE};
	border: 2px solid ${COLOR.BRAND.BASE};
	padding: 6px 16px;
	border-radius: 4px;
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

	@media only screen and (min-width: 768px) {
		padding: 10px 32px;
	}
`