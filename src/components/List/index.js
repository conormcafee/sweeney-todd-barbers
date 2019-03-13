import React from "react"
import {Flex} from "@rebass/grid"
import styled from "styled-components"
import {COLOR} from "../../globals"

const STList = (props) => (
    <List as="ul" flexWrap="wrap" mt={props.mt}>
        {props.data.map((item, index) => (
            <Item 
                as="li"
                p="3"
                alignItems="center" 
                width="100%" 
                key={index} 
                border={index === props.data.length -1 ? false : true}
            >
                <Image src={props.icon} alt="Sweeney Todd Icon" />
                <Flex flexDirection="column" ml="4">
                    <span>{item.title}</span>
                    <Highlight>{item.highlight}</Highlight>
                </Flex>
            </Item>
        ))}
    </List>
)

export default STList

const List = styled(Flex)`
	background: ${COLOR.PRIMARY.BASE};
	border-radius: 7px;
	overflow: hidden;
    box-shadow: -5px 7px 7px 2px rgba(0,0,0,0.1);
`

const Item = styled(Flex)`
    color: ${COLOR.PRIMARY.DARK};
    border-bottom: 1px solid ${props => props.border ? `#cccccc` : `transparent`};

    &:nth-child(even) {
        background-color: #f6f6f6;
    }      
`;

const Highlight = styled.span`
	font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 20px;
`

const Image = styled.img`
    display: block;
    height: 60px;
    width: 60px;
`