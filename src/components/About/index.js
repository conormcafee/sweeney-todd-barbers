import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import {StaticQuery, graphql} from "gatsby"
import Wheelchair from "../../images/wheelchair.svg"
import Friendly from "../../images/friendly.svg"
import SpecialNeeds from "../../images/special-needs.svg"
import Efficient from "../../images/efficient.svg"

export default () => <StaticQuery query={aboutData} render={data => <About data={data} /> } />

const About = (props) =>  {
    const data = props.data
    const path = data.file.childMarkdownRemark.frontmatter
    const title = path.title
    const getIntro = path.intro
    let text = "<p>" + getIntro + "</p>"
    text = text.replace(/\r\n\r\n/g, "</p><p>").replace(/\n\n/g, "</p><p>")
    const image = path.thumbnail

    return (
        <Flex 
            id="about"
            as="section" 
            flexWrap={['wrap']}
            justifyContent="space-between"
            alignItems="center"
            mx="auto" 
            py={[5,6]}
            css={{ maxWidth: `900px`}}>

            <Box as="article" width={[1, 1/2]} px={[3, 4]}>
                <h2>{title}</h2>

                <div dangerouslySetInnerHTML={{ __html: text }} />

                {/* <p>We cater for all ages and styles and no hair style is too challenging for us.</p>
                <p>With nearly 50 years combined experience, you are in safe hands with Sandra and Ruth - we have the experience and know-how to transform your image and have you looking ship shape in no time.</p>
                <p>Our friendly and open atmosphere means we can cater for all of your needs - autistic & special needs friendly. We also provide specialist hair care services for people with hairloss and hair maintenence needs.</p> */}

                <Flex flexWrap="wrap">
                    {ICONS.map((item, index) => (
                        <Flex flexDirection="column" alignItems="flex-start" width={1/2} mt={4} key={index} >
                            <img src={item.img} alt={`Sweeney Todd's ${item.alt}`} />
                            <IconTitle>{item.title}</IconTitle>
                        </Flex>
                    ))}
                </Flex>
                
            </Box>

            {image !== null && <ImageBox width={[1, 1/2]} px={[3, 4]}>
                <ImageWrapper>
                    <AboutImage src={image} alt="Susan & Ruth, Sweeney Barbers" />
                </ImageWrapper>
            </ImageBox>}
        </Flex>
    )
}

const aboutData = graphql`
    query {
        file(name: {eq: "about" }) {
            childMarkdownRemark {
                frontmatter {
                    title
                    intro
                    thumbnail
                }
            }
        }
    }
`

const ImageBox = styled(Box)`
    @media only screen and (max-width: 767px) {
        transform: scale(0.7);
    }
`

const ImageWrapper = styled.div`
	background: rgba(250, 182, 69, 0.3);
	padding: 32px;
	border-radius: 20px;
	transform: translate(0px, 0) rotate(45deg);

    @media only screen and (min-width: 768px) {
        transform: translate(75px, 0) rotate(45deg);
    }
`

const AboutImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: -5px 7px 7px 2px rgba(0,0,0,0.4);
	transform: rotate(-45deg);
	filter: grayscale(100%);
`

const IconTitle = styled.span`
    margin-top: 10px;
`

const ICONS = [
    {
        img: Friendly,
        title: "Friendly",
        alt: "are friendly"
    },
    {
        img: Efficient,
        title: "Efficient",
        alt: "are efficient"
    },
    {
        img: Wheelchair,
        title: "Wheelchair Accessible",
        alt: "are wheelchair accessible"
    },
    {
        img: SpecialNeeds,
        title: "Autism & Special Needs Friendly",
        alt: "are autism and special needs friendly"
    },
    
]