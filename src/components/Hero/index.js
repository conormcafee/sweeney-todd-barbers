import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import WhiteLogo from "../../images/logo-white.svg"
import Texture from "../../images/backgrounds/asfalt-light.png"
import Salon from "../../images/backgrounds/sweeney-todd-salon.jpg"

const Hero = () => (
    <Wrapper 
        as="section"
        p={[3, 4]}
        justifyContent="center"
        style={{ backgroundImage: `url(${Salon})`}}>
        <Content>
            <Image src={WhiteLogo} alt="Sweeney Todd Barbers" />
        </Content>
    </Wrapper>
)

export default Hero

const Wrapper = styled(Flex)`
	position: relative;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	height: calc(100vh - 150px);

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(${Texture});
		background-size: 466 px 349px;
	}

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(0,0,0);
		background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%);
	}
`

const Content = styled(Box)`
	position: relative;
	z-index: 1;
	transform: translateY(100px);
`

const Image = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
`