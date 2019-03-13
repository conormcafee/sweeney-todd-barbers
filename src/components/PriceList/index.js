import React from "react"
import styled from "styled-components"
import {Flex,Box} from "@rebass/grid";
import {COLOR} from "../../globals";

import Icon from "../../images/barber-shop.svg";

const PriceListComponent = (props) => (
    <Flex 
        as="section" 
        flexWrap={['wrap', 'wrap', 'nowrap']}
        justifyContent="space-between"
        css={{ maxWidth: '900px'}} 
        mx="auto" 
        pb={[5, 6]}>
        
        <Box width={[1, 1, 1/2]} px={[3, 4]}>
            <PriceList as="ul" flexWrap="wrap">
                {props.data.map((hair, index) => (
                    <PriceListItem 
                        as="li"
                        p="3"
                        alignItems="center" 
                        width="100%" 
                        key={index} 
                        border={index === props.data.length -1 ? false : true}
                    >
                        <Image src={Icon} alt="Sweeney Todd Price List" />
                        <Flex flexDirection="column" ml="4">
                            <span>{hair.cut}</span>
                            <Price>{hair.price}</Price>
                        </Flex>
                    </PriceListItem>
                ))}
            </PriceList>
        </Box>

        <Box width={[1, 1, 1/2]} px={[3, 4]}>
            <h2>Price Lists & Opening Hours</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor.</p>
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
    color: ${COLOR.PRIMARY.DARK};
	border-bottom: 1px solid ${props => props.border ? `#cccccc` : `transparent`};
    
    &:nth-child(even) {
        background-color: #f6f6f6;
    }
`;

const Image = styled.img`
    display: block;
    height: 60px;
    width: 60px;
`;

const Price = styled.span`
	font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 20px;
`;