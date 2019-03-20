import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import PriceList from "../components/PriceList"
import Testimonials from "../components/Testimonials"
import PhotoGallery from "../components/PhotoGallery"
import {COLOR} from "../globals"
import Barbers from "../images/sweeney-barbers.jpg";

const Index = () => (
	<Layout>
		<SEO title="Home" keywords={[`sweeney todd barbers`, `kilkenny`, `ireland`]} />
		
		<Hero />
		
			<About 
				as="section" 
				flexWrap={['wrap']}
				justifyContent="space-between"
				alignItems="center"
				mx="auto" 
				pt={[5]}
				pb={[5, 6]}
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
			</About>

			<PriceList />

			<Testimonials />

			<PhotoGallery />

			<Flex flexWrap="wrap" pt={5} pb={6} mx="auto">
				<Box as="article" width={1} px={[3, 4]}>
					<h2>Opening Hours</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor..</p>
				</Box>
				<Flex as="ul" px={[3, 4]} width={1} css={{ maxWidth: '1200px'}} mx="auto" mt={5}>
						{OPENING_HOURS.map((item, index) => (
							<Day as="li" width={1/7} px={[3, 4]} key={index}>
								<HoursText>{item.title}</HoursText>
								{item.open !== null && item.close !== null 
								?
									<React.Fragment>
										<HoursText sep={true}>Open</HoursText>
										<HoursText>{item.open}</HoursText>
										<HoursText sep={true}>Close</HoursText>
										<HoursText>{item.close}</HoursText>
									</React.Fragment>
								:
									<HoursText sep={true}>Closed</HoursText>
								}
							</Day>
						))}
					</Flex>
			</Flex>

			
	</Layout>
)

export default Index

const About = styled(Flex)`
	@media only screen and (min-width: 1000px) {
		height: 100vh;
	}
`

const Day = styled(Flex)`
	flex-direction: column;
	text-transform: uppercase;

	&:not(:first-of-type) {
		border-left: 1px solid ${COLOR.BRAND.BASE};
	}

`

const HoursText = styled.span`
	display: block;
	margin-top: ${props => props.sep ? `16px` : `0px`};
	margin-bottom: ${props => props.sep ? `16px` : `0px`};
	font-size: ${props => props.sep ? `12px` : `inherit`};
	color: ${props => props.sep ? `${COLOR.PRIMARY.MID}` : `${COLOR.PRIMARY.DARK}`};
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

const OPENING_HOURS = [
	{ 
		title: "Mon",     
		open: "09:15", 
		close: "18:00"
	},
	{ 
		title: "Tue",     
		open: "09:15", 
		close: "18:00"
	},
	{ 
		title: "Wed",     
		open: "09:15", 
		close: "18:00"
	},
	{ 
		title: "Thur",
		open: "09:00",
		close: "18:30"
	},
	{ 
		title: "Fri",
		open: "09:00",
		close: "18:30"
	},
	{ 
		title: "Sat",
		open: "08:30",
		close: "18:00"
	},
	{ 
		title: "Sun",  
		open: null,
		close: null
	}
]