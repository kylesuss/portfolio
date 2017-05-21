import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Head from '../components/head'
import Name from '../components/name'
import RouteTransition from '../components/route-transition'
import dynamicComponents, { DEFAULT_COMPONENT } from '../constants/page-contents'
import * as colors from '../constants/colors'

export default ({ startingPageContent }) => (
  class extends Component {
    constructor(props) {
      super(props)
      this.state = { pageContent: startingPageContent }
    }

    componentWillReceiveProps(nextProps) {
      const { query } = nextProps.url
      const { page } = this.props.url.query
      const nextProjext = query.page;
      const isChangingPageQuery = page !== query.page

      if (!isChangingPageQuery) { return }

      const NextComponent = dynamicComponents[nextProjext || DEFAULT_COMPONENT]
      this.setState({ pageContent: <NextComponent /> })
    }

    get nameColor() {
      const { query } = this.props.url
      return query && query.page
        ? colors.OFF_WHITE
        : colors.DARKEST_GREY
    }

    render() {
      const { pageContent } = this.state

      return (
        <div>
          <Head />

          <Name color={this.nameColor} />

          <RouteTransition>
            {pageContent}
          </RouteTransition>
        </div>
      )
    }
  }
)
