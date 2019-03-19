import React from "react"
import {Flex,Box} from "@rebass/grid"
import styled from "styled-components"
import BackgroundColor from "../BackgroundColor"
import Blade from "../../images/blade.svg"
import Sign from "../../images/barber-sign.svg"
import { COLOR } from "../../globals";

class PriceListComponent extends React.Component {
    render() {
        return (
            <BackgroundColor color={COLOR.BRAND.BASE}>
                <Flex flexWrap='wrap' css={{ maxWidth: '900px'}} pt={5} mx="auto">
                    <Box width={1} px={[3, 4]}>
                        <h2>Prices</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor.</p>
                    </Box>
                </Flex>

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

                <BackgroundBlade src={Sign} alt="Sweeney Todd Services" />
            </BackgroundColor>
        )
    }
}

export default PriceListComponent

const Services = styled(Flex)`
    position: relative;
    z-index: 1;
`

const Service = styled(Box)`
    background-color: #ffffff;
    color: ${COLOR.PRIMARY.DARK};
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
    font-weight: 600;
    color: ${COLOR.BRAND.BASE};
`;

const BackgroundBlade = styled.img`
    position: absolute;
    top: 32px;
    right: 128px;
    height: calc(75vh);
    width: auto;
    opacity: 0.2;
`

const PRICE_LIST = [
	{ title: "Dry Cut", 			    highlight: "€15 - €17"},
	{ title: "Wash Cut / Blow Dry", 	highlight: "€17"},
	{ title: "Shave All Over",		    highlight: "€12"},
	{ title: "Primary", 				highlight: "-"},
	{ title: "School Going", 			highlight: "€10 - €13.50"},
	{ title: "Baby", 					highlight: "€8"},
	{ title: "Beard Trim",			    highlight: "€5 - €8"},
	{ title: "Colour & Cut", 			highlight: "€30 - €35"},
	{ title: "Girls", 				    highlight: "€15 - €25"}
]

// const OPENING_HOURS = [
// 	{ title: "Monday to Wednesday",     highlight: "09:15 - 18:00"},
// 	{ title: "Thursday & Friday", 	    highlight: "09:00 - 18:30"},
// 	{ title: "Saturday",                highlight: "08:30 - 18:00"},
// 	{ title: "Sunday & Bank Holidays",  highlight: "Closed"}
// ]