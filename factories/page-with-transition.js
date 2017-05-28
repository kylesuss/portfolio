import React, { Component, createElement } from 'react'
import dynamic from 'next/dynamic'
import Head from '../components/head'
import TopNavigation from '../components/top-navigation'
import RightNavigation from '../components/right-navigation'
import BottomNavigation from '../components/bottom-navigation'
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

      this.setState({
        pageContent: createElement(NextComponent, {
          isFirstMount: false
        })
      })
    }

    render() {
      const { url } = this.props
      const { pageContent } = this.state

      return (
        <div>
          <Head />

          <TopNavigation color={colors.DARKEST_GREY} />

          <RouteTransition url={url}>
            {pageContent}
          </RouteTransition>

          <RightNavigation />

          <BottomNavigation />
        </div>
      )
    }
  }
)
