import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Head from '../components/head'
import Navigation from '../components/navigation'
import RouteTransition from '../components/route-transition'
import dynamicComponents, { DEFAULT_COMPONENT } from '../constants/page-contents'
import * as colors from '../constants/colors'

const indexPathname = '/'

export default ({ startingPageContent }) => (
  class extends Component {
    constructor(props) {
      super(props)
      this.state = { pageContent: startingPageContent }
    }

    componentWillReceiveProps(nextProps) {
      const { query } = nextProps.url
      const { page } = this.props.url.query
      const nextProjext = query.page
      const isChangingPageQuery = page !== query.page

      if (!isChangingPageQuery) { return }

      const NextComponent = dynamicComponents[nextProjext || DEFAULT_COMPONENT]
      this.setState({ pageContent: <NextComponent /> })
    }

    get nameColor() {
      const { pathname, query } = this.props.url
      const isIndexPath = pathname === indexPathname
      const hasPageQuery = query && query.page

      return isIndexPath && !hasPageQuery
        ? colors.DARKEST_GREY
        : colors.OFF_WHITE
    }

    render() {
      const { pageContent } = this.state

      return (
        <div>
          <Head />

          <Navigation color={this.nameColor} />

          <RouteTransition>
            {pageContent}
          </RouteTransition>
        </div>
      )
    }
  }
)
