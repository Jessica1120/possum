import React, {Component} from 'react'
import Button from './Button'
import {Row, Col} from './grid'

export class Styles extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button tiny>tiny</Button>
            <Button small>small</Button>
            <Button>(default)</Button>
            <Button large>large</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled>disabled</Button>
            <Button secondary>secondary</Button>
            <Button secondary disabled>secondary disabled</Button>
            <Button success>success</Button>
            <Button success disabled>success disabled</Button>
            <Button warning>warning</Button>
            <Button warning disabled>warning disabled</Button>
            <Button alert>alert</Button>
            <Button alert disabled>alert disabled</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled hollow>disabled hollow</Button>
            <Button secondary hollow>secondary hollow</Button>
            <Button secondary disabled hollow>secondary disabled hollow</Button>
            <Button success hollow>success hollow</Button>
            <Button success disabled hollow>success disabled hollow</Button>
            <Button warning hollow>warning hollow</Button>
            <Button warning disabled hollow>warning disabled hollow</Button>
            <Button alert hollow>alert hollow</Button>
            <Button alert disabled hollow>alert disabled hollow</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button expanded tiny>expanded tiny</Button>
            <Button expanded small>expanded small</Button>
            <Button expanded>expanded</Button>
            <Button expanded large>expanded large</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button secondary type="submit" name="action" value="cancel">Cancel</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export class LinkButton extends Component {
  render() {
    return (
      <div>
        <p>Simply add an <code>href</code> attribute, and <code>&lt;Button&gt;</code> will render as a link tag.</p>
        <Button large expanded href="https://google.com" target="_blank">Google</Button>
      </div>
    )
  }
}
