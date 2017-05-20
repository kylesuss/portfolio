import Router from 'next/router'
import React, { Component } from 'react'
import Head from '../components/head'
import IndexBody from '../components/index-body'

export default class Index extends Component {
  handleLinkClick = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Head title="Kyle Suss" />

        <IndexBody>
          <a href='/aurora' onClick={this.handleLinkClick}>Aurora</a>
        </IndexBody>
      </div>
    )
  }
}
