import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"

import IMG01 from "../../images/hair/01.jpeg"
import IMG02 from "../../images/hair/02.jpeg"
import IMG03 from "../../images/hair/03.jpeg"
import IMG04 from "../../images/hair/04.jpeg"
import IMG05 from "../../images/hair/05.jpeg"
import IMG06 from "../../images/hair/06.jpeg"

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
	{ image: IMG01 },
	{ image: IMG02 }
]