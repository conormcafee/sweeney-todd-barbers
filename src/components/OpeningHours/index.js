import React from "react"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import {COLOR} from "../../globals"

const OpeningHours = () => (
    <Flex flexWrap="wrap" justifyContent="center" pt={5} pb={6}>
        <Flex width={1} alignItems="center" justifyContent="center" css={{ maxWidth: '900px'}}>
            <Box width={1} as="article" px={[3, 4]}>
                <h2>Opening Hours</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor..</p>
            </Box>
        </Flex>
        
        <Hours as="ul" p={[3, 4]} width={1} css={{ maxWidth: '1200px'}} mx="auto" mt={5}>
            {OPENING_HOURS.map((item, index) => (
                <Day as="li" width={1/7} px={[3, 4]} key={index}>
                    <HoursText>{item.title}</HoursText>
                    {item.open !== null && item.close !== null 
                    ?
                        <React.Fragment>
                            <HoursText sep={true}>Open</HoursText>
                            <HoursText>{item.open}</HoursText>
                            <HoursText sep={true}>Close</HoursText>
                            <HoursText>{item.close}</HoursText>
                        </React.Fragment>
                    :
                        <HoursText sep={true}>Closed</HoursText>
                    }
                </Day>
            ))}
        </Hours>
    </Flex>
)

export default OpeningHours

const Hours = styled(Flex)`
    background: ${COLOR.PRIMARY.DARK};
    border-radius: 4px;
`

const Day = styled(Flex)`
	flex-direction: column;
	text-transform: uppercase;

	&:not(:first-of-type) {
		border-left: 1px solid ${COLOR.PRIMARY.MID};
	}
`

const HoursText = styled.span`
	display: block;
	margin-top: ${props => props.sep ? `16px` : `0px`};
	margin-bottom: 0px;
	font-size: ${props => props.sep ? `12px` : `inherit`};
	color: ${props => props.sep ? `${COLOR.PRIMARY.MID}` : `#ffffff`};
`

const OPENING_HOURS = [
	{ 
		title: "Mon",     
		open: "09:15", 
		close: "18:00"
	},
	{ 
		title: "Tue",     
		open: "09:15", 
		close: "18:00"
	},
	{ 
		title: "Wed",     
		open: "09:15", 
		close: "18:00"
	},
	{ 
		title: "Thur",
		open: "09:00",
		close: "18:30"
	},
	{ 
		title: "Fri",
		open: "09:00",
		close: "18:30"
	},
	{ 
		title: "Sat",
		open: "08:30",
		close: "18:00"
	},
	{ 
		title: "Sun",  
		open: null,
		close: null
	}
]