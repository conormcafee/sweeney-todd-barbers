import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import {COLOR} from "../../globals"
import Map from "../Map"
import Button from "../Button"

export default () => <StaticQuery query={openingHoursQuery} render={data => <OpeningHours data={data} />} /> 

const OpeningHours = (props) => {
    const times = props.data.file.childMarkdownRemark.frontmatter.times
    return (
        <React.Fragment>
            <Flex id="opening" flexWrap="wrap" justifyContent="center" pt={5}>
                <Flex width={1} alignItems="center" justifyContent="center" css={{ maxWidth: '900px'}}>
                    <Box width={1} as="article" px={[3, 4]}>
                        <h2>Opening Hours</h2>
                        <p>We accept all walk-ins but we advise clients to call in advance to secure their appointment. Hot towel shaving is only available Wednesday - Saturday. We're open every day excluding Sundays and Bank Holidays.</p>
                        <Button />
                    </Box>
                </Flex>
                
                <Hours 
                    as="ul" 
                    flexWrap={['wrap', 'wrap', 'nowrap']}
                    p={[3, 4]} 
                    width={1} 
                    mx="auto" 
                    mt={[3, 5]}
                    css={{ maxWidth: '1200px'}}>
                    
                    {times.map((item, index) => (
                        <Day 
                            as="li"
                            flexDirection={['row', 'row', 'column']}
                            justifyContent={['space-between', 'space-between']}
                            alignItems={['center', 'center']}
                            width={[1, 1, 1/7]} 
                            pb={[3, 3, 0]}
                            px={[3, 4]} 
                            mb={[3, 3, 0]}
                            key={index}>
                            
                            <HoursText header>{item.day}</HoursText>
                            {item.open !== null && item.close !== null 
                            ?
                                <Flex flex="1 1 auto" justifyContent="flex-end">
                                    <Box>
                                        <HoursText sep={true}>Open</HoursText>
                                        <HoursText>{item.open}</HoursText>
                                    </Box>
                                    <Box ml={4}>
                                        <HoursText sep={true}>Close</HoursText>
                                        <HoursText>{item.closed}</HoursText>
                                    </Box>
                                </Flex>
                            :
                                <HoursText sep={true}>Closed</HoursText>
                            }
                            
                        </Day>
                    ))}

                </Hours>
            </Flex>

            <Map />
        </React.Fragment>
    )
}

const openingHoursQuery = graphql`
    query {
        file(name: {eq: "openingHours"}) {
            childMarkdownRemark {
                frontmatter {
                    times {
                        day
                        open
                        closed
                    }
                }
            }
        }
    }
`

const Hours = styled(Flex)`
    background: ${COLOR.BRAND.BASE};
    position: relative;
    z-index: 9;

    @media only screen and (min-width: 850px) {
        border-radius: 4px;
    }
`

const Day = styled(Flex)`
	text-transform: uppercase;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media only screen and (min-width: 850px) {
        border-bottom: none;

        &:not(:first-of-type) {
		    border-left: 1px solid rgba(0, 0, 0, 0.1);
	    }
    }
`

const HoursText = styled.span`
	display: block;
    margin-bottom: ${props => props.header ? `8px` : `0px`};
	font-size: ${props => props.sep ? `12px` : `inherit`};
	color: ${props => props.sep ? `${COLOR.PRIMARY.MID}` : `#ffffff`};
`