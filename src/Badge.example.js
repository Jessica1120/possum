import React, {Component} from 'react'
import Badge from './Badge'

export class Styles extends Component {
  render() {
    return (
      <div>
        <Badge primary>1</Badge>
        <Badge secondary>2</Badge>
        <Badge warning>3</Badge>
        <Badge success>4</Badge>
        <Badge alert>5</Badge>
        <Badge>6</Badge>
      </div>
    )
  }
}

export class Icons extends Component {
  render() {
    return (
      <div>
        <Badge warning icon="x" />
        <Badge warning icon="x">ERROR</Badge>
      </div>
    )
  }
}
