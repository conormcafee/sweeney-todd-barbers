import React from "react"
import {Flex,Box} from "@rebass/grid"

import List from "../List";

import Icon from "../../images/barber-shop.svg"
import Clock from "../../images/clock.svg"

class PriceListComponent extends React.Component {

    render() {
        return (
            <Flex 
                as="section" 
                flexWrap={['wrap', 'wrap', 'nowrap']}
                justifyContent="space-between"
                css={{ maxWidth: '900px'}} 
                mx="auto" 
                pb={[5, 6]}>
                
                <Box 
                    order={[2, 2, 1]}
                    width={[1, 1, 1/2]} 
                    px={[3, 4]}>
                    
                    <List 
                        data={PRICE_LIST} 
                        icon={Icon}
                    />
                    
                </Box>

                <Box 
                    order={[1, 1, 2]}
                    width={[1, 1, 1/2]} 
                    px={[3, 4]}>
                    <h2>Price Lists & Opening Hours</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus fringilla suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut at felis tortor.</p>

                    <List 
                        data={OPENING_HOURS} 
                        icon={Clock}
                        mt={4}
                    />
                </Box>
            </Flex>
        )
    }
}

export default PriceListComponent

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

const OPENING_HOURS = [
	{ title: "Monday to Wednesday",     highlight: "09:15 - 18:00"},
	{ title: "Thursday & Friday", 	    highlight: "09:00 - 18:30"},
	{ title: "Saturday",                highlight: "08:30 - 18:00"},
	{ title: "Sunday & Bank Holidays",  highlight: "Closed"}
]