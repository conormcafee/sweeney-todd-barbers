import React from "react";
import styled from "styled-components"
import {Flex,Box} from "@rebass/grid"
import {COLOR} from "../../globals"
import Facebook from "../../images/facebook.svg"
import Instagram from "../../images/instagram.svg"

const Footer = () => (
    <Wrapper>
        <Flex 
            as="footer"
            py={[4,5]}
            flexWrap={['wrap', 'wrap', 'nowrap']}
            alignItems="center"
            mx="auto"
            css={{ maxWidth: '900px' }}>
            
            <Address 
                width={[1, 1, 1/2]}
                px={[3,4]}
                mb={[3, 3, 0]}>
                <Link href="tel:+353864040676">+353 (86) 404 0676</Link>
                <p>7 John Street Lower, Collegepark, Killkenny, Ireland, R95 X2V0</p>
            </Address>

            <Flex 
                justifyContent="center"
                width={[1, 1, 1/2]} 
                px={[3,4]}
                mb={[3, 3, 0]}>
                <div>
                    <Social left href="https://www.facebook.com/sweeneytoddkilkenny/" target="_blank" rel="noopener noreferrer" title="Sweeney Todd on Facebook">
                        <img src={Facebook} alt="Sweeney Todd on Facebook" />
                    </Social>
                        
                    <Social right href="https://instagram.com/sweeneytoddkilkenny" target="_blank" rel="noopener noreferrer" title="Sweeney Todd on Facebook">
                        <img src={Instagram} alt="Sweeney Todd on Instagram" />
                    </Social>
                </div>
            </Flex>
        </Flex>
    </Wrapper>
)

export default Footer

const Wrapper = styled.div`
    border-bottom: 5px solid ${COLOR.BRAND.BASE};
`
const Address = styled(Box)`
    text-align: center;
    p {
        font-size: 14px;
        line-height: 1.8;
        margin-top: 0;
        margin-bottom: 0;
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
    }
`

const Link = styled.a`
    color: ${COLOR.BRAND.BASE};
    text-align: center;   
    margin-left: auto;
    margin-right: auto; 
`

const Social = styled.a`
    margin-right: ${props => props.left ? `10px` : `0`};
    margin-left: ${props => props.right ? `10px` : `0`};
`