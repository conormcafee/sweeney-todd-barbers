import React from "react"
import styled from "styled-components"
import {Box} from "@rebass/grid"
import {COLOR} from "../globals"
import ST_Logo from "../images/logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";

class _Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggled: false
		}
	}

	toggleNav = () => this.setState(prevState => ({ toggled: !prevState.toggled }))

	render() {
		const { toggled } = this.state
		const source = toggled ? Close : Menu
		return (
			<Header as="header" px={[3, 4]} mx="auto" css={{ maxWidth: '1200px' }}>
				<LogoWrapper>
					<Logo src={ST_Logo} alt="Sweeney Todd Barbers, Kilkenny" />

					<MenuButton type="button" onClick={() => this.toggleNav()}>
						<img src={source} alt="Toggle Menu" />
					</MenuButton>
				</LogoWrapper>
				
				<Nav toggled={toggled}>
					{data.map((item, index) => (
						<Link toggled={toggled.toString()} onClick={() => this.toggleNav()} href={`#${item.ref}`} button={item.button.toString()} key={index}>{item.title}</Link>
					))}
				</Nav>
			</Header>
		)
	}
}

export default _Header

const Header = styled(Box)`
	position: relative;
	z-index: 1000;

	@media only screen and (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

const MenuButton = styled.button`
	position: fixed;
	z-index: 10000;
	top: 70px;
	right: 16px;
	height: 50px;
	width: 50px;
	border-radius: 100%;
	background-color: rgba(35, 35, 35, 0.98);

	@media only screen and (min-width: 768px) {
		 display: none;
	}

	&:hover {
		cursor: pointer;
	}

	img {
		transform: translateY(2px);
	}
`

const LogoWrapper = styled.div`
	padding-top: 32px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 500px) {
		width: 100%;
	}
`

const Logo = styled.img`
	display: block;
	height: auto;
	max-height: 100px;
`

const Nav = styled.nav`
	display: flex;
	align-items: center;
	
	@media only screen and (max-width: 767px) {
		flex-direction: column;
		justify-content: center;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100%;
		background: rgba(35, 35, 35, 0.98);
		text-align: center;

		transform: ${props => props.toggled ? `translateY(0)` : `translateY(-100vh)`};
		transition: transform 150ms ease-in-out;
	}

	@media only screen and (min-width: 768px) {
		justify-content: flex-end;
		transform: translateY(32px);
	}
`

const Link = styled(AnchorLink)`
	color: #ffffff;
	border: 2px solid ${props => props.button === 'true' ? `#ffffff` : `transparent`};
	border-radius: 4px;
	padding: ${props => props.button ? `4px 8px` : `0`};
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
	text-transform: uppercase;
	text-decoration: none;

	&:hover {
		cursor: pointer;
		color: ${COLOR.BRAND.BASE}
	}

	@media only screen and (max-width: 767px) {
		&:not(:first-of-type) {
			margin-top: 16px;
		}

		opacity: ${props => props.toggled === 'true' ? 1 : 0};
		transition: opacity 150ms 150ms ease-in-out;
	}

	@media only screen and (min-width: 850px) {
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