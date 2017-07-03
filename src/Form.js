import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AuthenticityToken from './AuthenticityToken'
import classNames from 'classnames'

export default class Form extends Component {
  render() {
    const {className, children, ...props} = this.props
    const formClassName = classNames(className, 'rev-Form')

    return (
      <form {...props} className={formClassName}>
        <AuthenticityToken />
        {this.props.children}
      </form>
    )
  }
}
