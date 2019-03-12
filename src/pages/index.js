import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid";
import Layout from "../components/layout"
import SEO from "../components/seo"

import {COLOR} from "../globals"
import WhiteLogo from "../images/logo-white.svg"
import Texture from "../images/backgrounds/asfalt-light.png";
import Salon from "../images/backgrounds/sweeney-todd-salon.jpg"

import PriceList from "../components/PriceList";
import PriceListTexture from "../images/backgrounds/brand-light-texture.png";

const Hero = styled(Flex)`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	height: calc(100vh - 100px);
	border: 10px solid ${COLOR.PRIMARY.BASE}};
	border-radius: 10px;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 1);
		background-image: url(${Texture});
		background-size: 466 px 349px;
		opacity: 0.6;
	}

	&:after {
		content: "";
		position: absolute;
		width: calc(100vw + 60px);
		height: 200px;
		bottom	-100px;
		background: ${COLOR.PRIMARY.BASE};
		transform: rotate(-5deg);
		box-shadow: -13px -8px 8px 0px rgba(0, 0, 0, 0.3);
	}
`

const Content = styled(Box)`
	position: relative;
	z-index: 1;
	transform: translateY(100px);
`

const Image = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
`

const AboutSweeneys = styled(Flex)`
	position: relative;
	z-index: 1;
`;

const BrandLightBackround = styled.section`
	background-color: ${COLOR.BRAND.LIGHT};
	background-image: url(${PriceListTexture});
	background-size: 44px 44px;
`;

const Index = () => (
	<Layout>
		
		<SEO 
			title="Home" 
			keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} 
		/>
		
		<Hero 
			as="section"
			p={[3, 4]}
			justifyContent="center"
			style={{ backgroundImage: `url(${Salon})`}}>
			<Content>
				<Image src={WhiteLogo} alt="Sweeney Todd Barbers" />
			</Content>
		</Hero>

		<AboutSweeneys 
			as="section" 
			css={{ maxWidth: `900px`}}
			justifyContent="space-between"
			mx="auto" py={[5]}
			flexWrap={['wrap', 'nowrap']}
		>

			<Box as="aside" width={[1, 1/2]} px={[3, 4]}>
				<h1>"The no.1 friendly barbers in Kilkenny"</h1>
			</Box>

			<Box as="article" width={[1, 1/2]} px={[3, 4]}>
				<p>Sweeney Todd barbers is a friendly, talented barbers in the heart of Kilkenny town.</p>
				<p>We cater for all ages and styles and no hair style is too challenging for us. With nearly 50 years combined experience, you are in safe hands with Sandra and Ruth - we have the experience and know-how to transform your image and have you looking ship shape in no time.</p>
				<p>Our friendly and open atmosphere means we can cater for all of your needs - autistic & special needs friendly. We also provide specialist hair care services for people with hairloss and hair maintenence needs</p>
			</Box>
		</AboutSweeneys>

		<BrandLightBackround>
			<PriceList data={PRICE_LIST} />
		</BrandLightBackround>
		
	</Layout>
)

export default Index

const PRICE_LIST = [
	{ cut: "Dry Cut", 				price: "€15 - €17"},
	{ cut: "Wash Cut / Blow Dry", 	price: "€17"},
	{ cut: "Shave All Over",		price: "€12"},
	{ cut: "Primary", 				price: "-"},
	{ cut: "School Going", 			price: "€10 - €13.50"},
	{ cut: "Baby", 					price: "€8"},
	{ cut: "Beard Trim",			price: "€5 - €8"},
	{ cut: "Colour & Cut", 			price: "€30 - €35"},
	{ cut: "Girls", 				price: "€15 - €25"}
]