import React, {Component} from 'react'
import Label from './Label'
import {Row, Col} from './grid'

export class Styles extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col>
            <Label>default</Label>
            <Label secondary>secondary</Label>
            <Label success>success</Label>
            <Label alert>alert</Label>
            <Label warning>warning</Label>
          </Col>
        </Row>
      </div>
    )
  }
}

export class Icons extends Component {
  render() {
    return (
      <div>
        <Label warning icon="x" />
        <Label warning icon="x">ERROR</Label>
      </div>
    )
  }
}
