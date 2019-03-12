import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid";
import Layout from "../components/layout"
import SEO from "../components/seo"
import {COLOR} from "../globals"
import Hero from "../components/Hero"
import BackgroundColor from "../components/BackgroundColor";
import PriceList from "../components/PriceList"
import PriceListTexture from "../images/backgrounds/brand-light-texture.png";

const Raise = styled.div`
	transform: translateY(-100px);
	padding-left: 32px;
	padding-right: 32px;
`;

const AboutWrapper = styled.div`
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 4px;
	background-color: ${COLOR.PRIMARY.BASE}
`

const AboutSweeneys = styled(Flex)`
	position: relative;
	z-index: 1;
`;

const AboutImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
	margin-top: 16px;
`;


const Index = () => (
	<Layout>
		
		<SEO 
			title="Home" 
			keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} 
		/>
		
		<Hero />

		<Raise>
			<AboutWrapper>
				<AboutSweeneys 
					as="section" 
					css={{ maxWidth: `900px`}}
					justifyContent="space-between"
					mx="auto" pt={[5]}
					flexWrap={['wrap']}
				>
					<Box as="aside" width={1} px={[3, 4]} mb={5}>
						<h1>"The no.1 friendly barbers in Kilkenny"</h1>
					</Box>

					<Box width={[1, 1/2]} px={[3, 4]}>
						<AboutImage src="https://placehold.it/400x400/FADCAA/FAB645" alt="Susan" />
					</Box>

					<Box as="article" width={[1, 1/2]} px={[3, 4]}>
						<p>Sweeney Todd barbers is a friendly, talented barbers in the heart of Kilkenny town.</p>
						<p>We cater for all ages and styles and no hair style is too challenging for us. With nearly 50 years combined experience, you are in safe hands with Sandra and Ruth - we have the experience and know-how to transform your image and have you looking ship shape in no time.</p>
						<p>Our friendly and open atmosphere means we can cater for all of your needs - autistic & special needs friendly. We also provide specialist hair care services for people with hairloss and hair maintenence needs</p>
					</Box>
				</AboutSweeneys>
			</AboutWrapper>
		</Raise>

		<BackgroundColor color={COLOR.BRAND.LIGHT} texture={PriceListTexture}>
			<PriceList data={PRICE_LIST} />
		</BackgroundColor>
		
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