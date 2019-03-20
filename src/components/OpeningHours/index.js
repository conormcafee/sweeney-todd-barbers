import React from "react"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import {COLOR} from "../../globals"
import ReactMapboxGl, { Layer, Feature} from "react-mapbox-gl"

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiY29ub3JtY2FmZWUiLCJhIjoiY2p0aHJxZDE5MTBqaDN5cnJvOTkyOWc2aSJ9.dz0lrgHAY72fhJ-yirEHmA"
});

class OpeningHours extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Flex flexWrap="wrap" justifyContent="center" pt={5}>
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

                <MapBox>
                    <Map
                        // eslint-disable-next-line
                        style={'mapbox://styles/conormcafee/cjths1n6g7vu21fpexmcbev7i'}
                        minZoom={20}
                        center={[-7.2494442, 52.6524416]}
                        zoom={[15]}
                        scrollZoom={[false]}
                        interactive={[false]}
                        dragPan={[false]}
                        containerStyle={{
                            height: "75vh",
                            width: "100vw"
                        }}>
                            <Layer
                                scrollZoom={false}
                                type="symbol"
                                id="marker"
                                layout={{ "icon-image": "marker-15" }}>
                            <Feature />
                            </Layer>
                    </Map>
                </MapBox>
            </React.Fragment>
        )
    }
}


export default OpeningHours

const Hours = styled(Flex)`
    background: ${COLOR.BRAND.BASE};
    border-radius: 4px;
    position: relative;
    z-index: 9999;
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

const MapBox = styled.div`
    margin-top: -100px
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