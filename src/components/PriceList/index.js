import React from "react"
import {Flex,Box} from "@rebass/grid"
import styled from "styled-components"
import Blade from "../../images/blade.svg"
import { COLOR } from "../../globals";
import Brushes from "../../images/backgrounds/barber-brushes.jpg"
import Button from "../Button"

class PriceListComponent extends React.Component {
    render() {
        return (
            <ServicesWrapper>
                <Services flexWrap='wrap' css={{ maxWidth: '900px'}} pt={5} mx="auto">
                    <Intro width={1} px={[3, 4]}>
                        <h2>Prices</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor.</p>
                        <Button />
                    </Intro>
                </Services>

                <Services flexWrap='wrap' css={{ maxWidth: '1300px'}} py={5} mx="auto">
                    <Flex flexWrap='wrap' css={{ maxWidth: '1200px'}} mx="auto">
                        {PRICE_LIST.map((item, index) => (
                            <Box width={[1, 1/2, 1/3]} px={[3, 4]} key={index}>
                                <Service p={3} mb={[3, 4]}>
                                    <span>{item.title}</span>
                                    <Price>{item.highlight}</Price>
                                    <img src={Blade} alt="Sweeney Todd Blade" />
                                </Service>
                            </Box>
                        ))}
                    </Flex>
                </Services>
            </ServicesWrapper>
        )
    }
}

export default PriceListComponent

const ServicesWrapper = styled.section`
    background-image: url(${Brushes});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    border-top: 5px solid ${COLOR.PRIMARY.MID};
    border-bottom: 5px solid ${COLOR.PRIMARY.MID};

    &:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(63,55,51);
		background: linear-gradient(180deg, rgba(63,55,51,0.7) 0%, rgba(63,55,51,1) 100%);
	}
`

const Services = styled(Flex)`
    position: relative;
    z-index: 1;
`

const Intro = styled(Box)`
    h2 {
        color: #ffffff;
    }

    color: #ffffff;
`

const Service = styled(Box)`
    background-color: #ffffff;
    color: ${COLOR.PRIMARY.MID};
    border-radius: 7px;
    box-shadow: -5px 5px 8px 2px rgba(0, 0, 0, 0.1);
    position: relative;

    span {
        display: block;
    }

    img {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
`

const Price = styled.span`
    font-size: 20px;
    margin-top: 5px;
    font-family: 'Rye', cursive;
    font-weight: 700;
    color: ${COLOR.BRAND.BASE};
`

const PRICE_LIST = [
	{ title: "Dry Cut", 			    highlight: "€15 - €17"},
	{ title: "Wash Cut / Blow Dry", 	highlight: "€17"},
	{ title: "Shave All Over",		    highlight: "€12"},
	{ title: "Primary School Going",    highlight: "€10 - €13.50"},
	{ title: "Baby", 					highlight: "€8"},
	{ title: "Beard Trim",			    highlight: "€5 - €8"},
	{ title: "Colour & Cut", 			highlight: "€30 - €35"},
	{ title: "Girls", 				    highlight: "€15 - €25"}
]