import styled from 'styled-components'

const CardBody = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 20%;
    margin: 1%;
    text-align: center;
    // background-color: ${props=>props.length < 2 ? "red" : "blue"}
`

export default CardBody