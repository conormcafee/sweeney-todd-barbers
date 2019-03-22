import React from "react"
import styled from "styled-components"
import {Flex} from "@rebass/grid"
import {COLOR} from "../globals"
import WhiteLogo from "../images/logo-white.svg"

class _Header extends React.Component {
	render() {
		return (
			<Header 
				as="header"
				flexWrap={['wrap', 'wrap', 'nowrap']}
				justifyContent={['center', 'space-between', 'space-between']}
				alignItems="center"
				mx="auto"
				pt={[3, 4]}
				px={[3, 4]}
				css={{ maxWidth: '1200px' }}
			>
				<LogoWrapper>
					<Logo src={WhiteLogo} alt="Sweeney Todd Barbers, Kilkenny" />
				</LogoWrapper>
				
				<Nav>
					{data.map((item, index) => (
						<Link onClick={() => this.props.scroll(item.ref)}button={item.button} key={index}>{item.title}</Link>
					))}
				</Nav>
			</Header>
		)
	}
}

export default _Header

const Header = styled(Flex)`
	position: relative;
	z-index: 1;
`

const LogoWrapper = styled.div`
	@media only screen and (max-width: 500px) {
		width: 100%;
	}
`

const Logo = styled.img`
	display: block;
	height: auto;
	
	@media only screen and (max-width: 500px) {
		margin-left: auto;
		margin-right: auto;
		max-height: 100px;
	}

	@media only screen and (min-width: 501px) {
		max-height: 120px;
	}
`

const Nav = styled.nav`
	text-align: center;
	margin-top: 16px;

	@media only screen and (max-width: 500px) {
		max-width: 250px;
	}

	@media only screen and (min-width: 850px) {
		margin-top: 0;
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
		font-size: 16px;
		padding: ${props => props.button ? `8px 16px` : `0`};
	}
`

const data = [
	{
		title: "About",
		url: "/",
		ref: "about",
		button: false
	},
	{
		title: "Prices",
		url: "/",
		ref: "prices",
		button: false
	},
	{
		title: "Opening Hours",
		url: "/",
		ref: "opening",
		button: false
	},
	{
		title: "Find Us",
		url: "/",
		ref: "opening",
		button: true
	}
]