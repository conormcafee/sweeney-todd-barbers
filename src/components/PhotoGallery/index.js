import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"

import IMG01 from "../../images/hair/01.jpg"
import IMG02 from "../../images/hair/02.jpg"
import IMG03 from "../../images/hair/03.jpg"
import IMG04 from "../../images/hair/04.jpg"
import IMG05 from "../../images/hair/05.jpg"
import IMG06 from "../../images/hair/06.jpg"
import IMG07 from "../../images/hair/07.jpg"
import IMG08 from "../../images/hair/08.jpg"
import IMG09 from "../../images/hair/09.jpg"
import IMG10 from "../../images/hair/10.jpg"
import IMG11 from "../../images/hair/11.jpg"
import IMG12 from "../../images/hair/12.jpg"

const PhotoGallery = () => (
    <Wrapper 
        as="section" 
        flexWrap={['wrap']}
        justifyContent="space-between"
        alignItems="center"
        mx="auto">

        <Flex flexWrap='wrap' width={[1]}>
            {IMAGES.map((image, index) => (
                <Box key={index} width={[1/2, 1/3, 1/4]}>
                    <Image style={{ backgroundImage: `url(${image.image})`}}></Image>
                </Box>
            ))}
        </Flex>

    </Wrapper>
)

export default PhotoGallery

const Wrapper = styled(Flex)`
	overflow: hidden;
`

const Image = styled.div`
	height: 250px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border: 1px solid white;
	position: relative;
	filter: sepia(75%);

	@media only screen and (min-width: 600px) {
		height: 350px;
	}
 
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgb(63,55,51);
		background: linear-gradient(180deg, rgba(153,117,98,0.3) 0%, rgba(63,55,51,0.1) 100%);
	}
`

const IMAGES = [
	{ image: IMG01 },
	{ image: IMG02 },
	{ image: IMG03 },
	{ image: IMG04 },
	{ image: IMG05 },
	{ image: IMG06 },
	{ image: IMG07 },
	{ image: IMG08 },
	{ image: IMG09 },
	{ image: IMG10 },
	{ image: IMG11 },
	{ image: IMG12 },
]