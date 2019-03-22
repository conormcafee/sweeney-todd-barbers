import React from "react";
import styled from "styled-components"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"
import MarkerIcon from "../../images/marker.svg"

const Map = ReactMapboxGl({ accessToken: "pk.eyJ1IjoiY29ub3JtY2FmZWUiLCJhIjoiY2p0aHJxZDE5MTBqaDN5cnJvOTkyOWc2aSJ9.dz0lrgHAY72fhJ-yirEHmA"})

const KillkennyMap = () => (
    <MapBox>
        <Map
            // eslint-disable-next-line
            style={'mapbox://styles/conormcafee/cjths1n6g7vu21fpexmcbev7i'}
            center={[-7.2494442, 52.6524416]}
            zoom={[17]}
            boxZoom={false}
            scrollZoom={[false]}
            interactive={false}
            dragPan={false}
            containerStyle={{
                height: "65vh",
                width: "100vw"
            }}>
                <Marker coordinates={[-7.2494442, 52.6524416]} anchor="bottom">
                    <img src={MarkerIcon} alt="Sweeney Todd Location" />
                </Marker>
        </Map>
    </MapBox>
)

export default KillkennyMap

const MapBox = styled.div`
    margin-top: -100px;
`