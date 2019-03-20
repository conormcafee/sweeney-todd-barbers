import React from "react"
import styled from "styled-components"
import {Flex} from "@rebass/grid"
import {COLOR} from "../globals"
import WhiteLogo from "../images/logo-white.svg"

const _Header = () => (
	<Header 
		as="header"
		justifyContent="space-between" 
		alignItems="center"
		mx="auto"
		pt={4}
		px={[3, 4]}
		css={{ maxWidth: '1200px' }}
	>
		<Logo src={WhiteLogo} alt="Sweeney Todd Barbers, Kilkenny" />
		<nav>
			{data.map((item, index) => (
				<Link button={item.button} key={index}>{item.title}</Link>
			))}
		</nav>
	</Header>
)

export default _Header

const Header = styled(Flex)`
	position: relative;
	z-index: 1;
`

const Logo = styled.img`
	max-width: 150px;
	height: auto;
`

const Link = styled.span`
	color: #ffffff;
	font-size: 18px;
	border: 2px solid ${props => props.button ? `#ffffff` : `transparent`};
	border-radius: 4px;
	padding: ${props => props.button ? `8px 16px` : `0`};
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
	text-transform: uppercase;
	
	&:not(:first-of-type) {
		margin-left: 32px;
	}

	&:hover {
		cursor: pointer;
		color: ${COLOR.BRAND.BASE}
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