import React from "react"
import styled from "styled-components"
import {Flex,Box} from "@rebass/grid";
import {COLOR} from "../../globals";

const PriceListComponent = (props) => (
    <Flex 
        as="section"
        flexWrap={['wrap', 'nowrap']}
        css={{ maxWidth: '900px'}}
        justifyContent="space-between"
        mx="auto"
        py="5"
    >
        <Box width={[1, 1/2]} px={[3, 4]}>
            <h2>Price List</h2>
            <p>If you would like to book an appointment, please click on the button below to give us a call.</p>
        </Box>

        <Box width={[1, 1/2]} px={[3, 4]}>
            <PriceList 
                as="ul"
                flexWrap="wrap"
            >
                {props.data.map((hair, index) => (
                    <PriceListItem 
                        py="3"
                        px="4" 
                        justifyContent="space-between"
                        width="100%" 
                        key={index} 
                        as="li"
                        border={index === props.data.length -1 ? false : true}
                    >
                        <span>{hair.cut}</span>
                        <Price>{hair.price}</Price>
                    </PriceListItem>
                ))}
            </PriceList>
        </Box>
    </Flex>
)

export default PriceListComponent

const PriceList = styled(Flex)`
	background: ${COLOR.PRIMARY.BASE};
	border-radius: 7px;
	overflow: hidden;
	box-shadow: -5px 7px 7px 2px rgba(0,0,0,0.1);
`

const PriceListItem = styled(Flex)`
	border-bottom: 1px solid ${props => props.border ? `${COLOR.PRIMARY.LIGHT}` : `transparent`};
`;

const Price = styled.span`
	color: ${COLOR.PRIMARY.DARK};
	font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
`;