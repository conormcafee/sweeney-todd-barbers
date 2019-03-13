import React from "react"
import { Normalize } from 'styled-normalize'
import {GlobalStyle} from "../globals/styles";

const Layout = ({ children }) => (
	<React.Fragment>
		<Normalize />
		<GlobalStyle />
		<main>
			{children}
		</main>
	</React.Fragment>
)

export default Layout
