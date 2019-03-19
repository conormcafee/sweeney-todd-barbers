import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid";
import Layout from "../components/layout"
import SEO from "../components/seo"
import {COLOR} from "../globals"
import Hero from "../components/Hero"
import BackgroundColor from "../components/BackgroundColor";
import PriceList from "../components/PriceList"

import Barbers from "../images/sweeney-barbers.jpg";

const Index = () => (
	<Layout>
		<SEO title="Home" keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} />
		<Hero />
		<BackgroundColor color={COLOR.PRIMARY.DARK}>
			<About 
				as="section" 
				flexWrap={['wrap']}
				justifyContent="space-between"
				mx="auto" 
				pt={[5]}
				pb={[5, 6]}
				css={{ maxWidth: `900px`}}>

				<Box as="article" width={[1, 1/2]} px={[3, 4]}>
					<p>Sweeney Todd barbers is a friendly, talented barbers in the heart of Kilkenny town.</p>
					<p>We cater for all ages and styles and no hair style is too challenging for us. With nearly 50 years combined experience, you are in safe hands with Sandra and Ruth - we have the experience and know-how to transform your image and have you looking ship shape in no time.</p>
					<p>Our friendly and open atmosphere means we can cater for all of your needs - autistic & special needs friendly. We also provide specialist hair care services for people with hairloss and hair maintenence needs</p>
				</Box>

				<Box width={[1, 1/2]} px={[3, 4]}>
					<ImageWrapper>
						<AboutImage src={Barbers} alt="Susan & Ruth, Sweeney Barbers" />
					</ImageWrapper>
				</Box>
			</About>

			<PriceList />
		</BackgroundColor>
	</Layout>
)

export default Index

const About = styled(Flex)`
	position: relative;
	z-index: 1;
`

const ImageWrapper = styled.div`
	background: rgba(250, 182, 69, 0.3);
	padding: 32px;
	border-radius: 20px;
	transform: translate(75px, -25px) rotate(45deg);
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