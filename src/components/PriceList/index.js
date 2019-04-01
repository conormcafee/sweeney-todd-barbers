import React from "react"
import {Flex,Box} from "@rebass/grid"
import {StaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import Blade from "../../images/blade.svg"
import { COLOR } from "../../globals";
import Brushes from "../../images/backgrounds/barber-brushes.jpg"
import Button from "../Button"

export default () => (
    <StaticQuery 
        query={pricedata}
        render={data => <PriceList data={data} />}
    />
)

const PriceList = (props) => {
    const path = props.data.file.childMarkdownRemark.frontmatter
    const title = path.title
    const intro = path.intro
    const priceList = path.priceList
    return (
        <ServicesWrapper id="prices">
            <Services flexWrap='wrap' css={{ maxWidth: '900px'}} pt={5} mx="auto">
                <Intro width={1} px={[3, 4]}>
                    <h2>{title}</h2>
                    <p>{intro}</p>
                    <Button />
                </Intro>
            </Services>

            <Services flexWrap='wrap' css={{ maxWidth: '1300px'}} py={5} mx="auto">
                <Flex flexWrap='wrap' css={{ maxWidth: '1200px'}} mx="auto">
                    {priceList.map((item, index) => (
                        <Box width={[1, 1/2, 1/3]} px={[3, 4]} key={index}>
                            <Service p={3} mb={[3, 4]}>
                                <span>{item.name}</span>
                                <Price>{item.price}</Price>
                                <img src={Blade} alt="Sweeney Todd Blade" />
                            </Service>
                        </Box>
                    ))}
                </Flex>
            </Services>
        </ServicesWrapper>
    )
}

const pricedata = graphql`
    query {
        file(name:{ eq: "prices"}) {
            childMarkdownRemark {
                frontmatter {
                    title
                    intro
                    priceList {
                        name
                        price
                    }
                }
            }
        }
    }
`

const ServicesWrapper = styled.section`
    background-image: url(${Brushes});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    border-top: 5px solid ${COLOR.PRIMARY.MID};
    border-bottom: 5px solid ${COLOR.PRIMARY.MID};

    &:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(63,55,51);
		background: linear-gradient(180deg, rgba(63,55,51,0.7) 0%, rgba(63,55,51,1) 100%);
	}
`

const Services = styled(Flex)`
    position: relative;
    z-index: 1;
`

const Intro = styled(Box)`
    h2 {
        color: #ffffff;
    }

    color: #ffffff;
`

const Service = styled(Box)`
    background-color: #ffffff;
    color: ${COLOR.PRIMARY.MID};
    border-radius: 7px;
    box-shadow: -5px 5px 8px 2px rgba(0, 0, 0, 0.1);
    position: relative;

    span {
        display: block;
    }

    img {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
`

const Price = styled.span`
    font-size: 20px;
    margin-top: 5px;
    font-family: 'Rye', cursive;
    font-weight: 700;
    color: ${COLOR.BRAND.BASE};
`