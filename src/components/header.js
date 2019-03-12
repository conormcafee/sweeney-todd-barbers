import React from "react"
import styled from "styled-components"
import {Flex} from "@rebass/grid"
import {COLOR} from "../globals"

const _Header = () => (
	<Header 
		as="header" 
		px={[3, 4]} 
		py={4} 
		justifyContent="center">
		<nav>
			{data.map((item, index) => (
				<Link key={index}>{item.title}</Link>
			))}
		</nav>
	</Header>
)

export default _Header

const Header = styled(Flex)`
	border-top: 3px solid ${COLOR.BRAND.BASE}
`

const Link = styled.span`
	margin-left: 16px;

	&:hover {
		cursor: pointer;
		color: ${COLOR.BRAND.BASE}
	}
`

const data = [
	{
		title: "About",
		url: "/"
	},
	{
		title: "Price List",
		url: "/"
	},
	{
		title: "Opening Hours",
		url: "/"
	},
	{
		title: "Find Us",
		url: "/"
	}
]