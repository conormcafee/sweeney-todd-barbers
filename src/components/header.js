import React from "react"
import styled from "styled-components"
import {Flex} from "@rebass/grid"
import {COLOR} from "../globals"
import WhiteLogo from "../images/logo-white.svg"

const _Header = () => (
	<Header 
		as="header"
		flexWrap={['wrap', 'wrap', 'nowrap']}
		justifyContent={['center', 'space-between', 'space-between']}
		alignItems="center"
		mx="auto"
		pt={[3, 4]}
		px={[3, 4]}
		css={{ maxWidth: '1400px' }}
	>
		<Logo src={WhiteLogo} alt="Sweeney Todd Barbers, Kilkenny" />
		
		<Nav>
			{data.map((item, index) => (
				<Link button={item.button} key={index}>{item.title}</Link>
			))}
		</Nav>
	</Header>
)

export default _Header

const Header = styled(Flex)`
	position: relative;
	z-index: 1;
`

const Logo = styled.img`
	display: block;
	max-width: 100px;
	height: auto;

	@media only screen and (min-width: 850px) {
		max-width: 150px;
	}
`

const Nav = styled.nav`
	text-align: center;
	margin-top: 16px;

	@media only screen and (min-width: 658px) {
		max-width: 100%;
	}
`

const Link = styled.span`
	color: #ffffff;
	font-size: 12px;
	border: 2px solid ${props => props.button ? `#ffffff` : `transparent`};
	border-radius: 4px;
	padding: ${props => props.button ? `4px 8px` : `0`};
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
	text-transform: uppercase;
	
	&:not(:first-of-type) {
		margin-left: 32px;
	}

	&:hover {
		cursor: pointer;
		color: ${COLOR.BRAND.BASE}
	}

	@media only screen and (min-width: 850px) {
		font-size: 18px;
		padding: ${props => props.button ? `8px 16px` : `0`};
	}
`

const data = [
	{
		title: "About",
		url: "/",
		button: false
	},
	{
		title: "Prices",
		url: "/",
		button: false
	},
	{
		title: "Opening Hours",
		url: "/",
		button: false
	},
	{
		title: "Find Us",
		url: "/",
		button: true
	}
]