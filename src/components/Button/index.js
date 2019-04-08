import React from "react"
import styled from "styled-components"
import {COLOR} from "../../globals"


const Button = () => (
    <Btn href="tel:+353864040676">Call Us<span> +353 (86) 404 0676</span></Btn>
)

export default Button

const Btn = styled.a`
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

	@media only screen and (max-width: 767px) {
		span {
			display: none;
		}
	}
`