import React from "react"
import styled from "styled-components"

const BackgroundColor = (props) => (
    <Background color={props.color}>
        {props.children}
    </Background>
)

export default BackgroundColor

const Background = styled.div`
    background-color: ${props => props.color ? `${props.color}` : `transparent`};
    background-image: ${props => props.texture ? `url(${props.texture})` : `none`};
`;