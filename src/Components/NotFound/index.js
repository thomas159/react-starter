import React from 'react'
import styled from 'styled-components'
import Container from '../atoms/Container'


const Wrap = styled.div`
  text-align: left;
  max-width: 1000px;
  padding: 0 0 20px 0;
`

export default class NotFound extends React.Component {
  render() {
    return(
      <Container>
     404
      </Container>
    )
  }
}
