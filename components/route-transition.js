import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as colors from '../constants/colors'
import * as easings from '../constants/easings'
import * as layout from '../constants/layout'
import * as zIndex from '../constants/z-index'

const ANIMATION_LENGTH = 1000

export default class RouteTransition extends Component {
  static propTypes = {
    url: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      isAnimating: false,
      isMovingForward: false,
      activeChildren: props.children
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props.url
    const nextQuery = nextProps.url.query
    const isChangingPageQuery = query.page !== nextQuery.page

    if (!isChangingPageQuery) { return }

    this.startAnimation({
      nextChildren: nextProps.children,
      isMovingForward: !!nextQuery.page
    })
  }

  componentWillUnmount() {
    clearTimeout(this.swapChildrenTimeout)
    this.swapChildrenTimeout = null
    clearTimeout(this.finishAnimationTimeout)
    this.finishAnimationTimeout = null
  }

  get animationClassName() {
    const {
      isAnimating,
      isMovingForward
    } = this.state

    return classnames({
      'animation': true,
      'animation--active': isAnimating,
      'animation--forward': isMovingForward && isAnimating,
      'animation--backward': !isMovingForward && isAnimating
    })
  }

  startAnimation = ({
    isMovingForward,
    nextChildren
  } = {}) => {
    this.setState({ isAnimating: true, isMovingForward })

    clearTimeout(this.swapChildrenTimeout)
    this.swapChildrenTimeout = setTimeout(() => {
      this.swapChildren(nextChildren)
    }, ANIMATION_LENGTH / 2)

    clearTimeout(this.finishAnimationTimeout)
    this.finishAnimationTimeout = setTimeout(
      this.finishAnimation, ANIMATION_LENGTH
    )
  }

  swapChildren = (nextChildren) => this.setState({
    activeChildren: nextChildren
  })

  finishAnimation = () => this.setState({
    isAnimating: false
  })

  render() {
    const { activeChildren, isMovingForward } = this.state

    return (
      <div>
        {activeChildren}

        <div className={this.animationClassName}></div>

        <style global jsx>{`
          .animation {
            position: fixed;
            top: ${layout.BODY_SPACING};
            height: calc(100vh - ${layout.DOUBLE_BODY_SPACING});
            width: calc(100vw - ${layout.DOUBLE_BODY_SPACING});
            background: ${colors.DARKEST_GREY};
            transform: scaleY(0) scaleX(0);
            z-index: ${zIndex.ROUTE_ANIMATION};
          }

          .animation--forward {
            right: ${layout.BODY_SPACING};
            transform: scaleY(1) scaleX(0);
          }

          .animation--forward.animation--active {
            animation: scaleRouteXForward ${ANIMATION_LENGTH}ms ${easings.EASE_IN_OUT_QUINT};
          }

          .animation--backward {
            left: ${layout.BODY_SPACING};
            transform: scaleY(1) scaleX(0);
          }

          .animation--backward.animation--active {
            animation: scaleRouteXBackward ${ANIMATION_LENGTH}ms ${easings.EASE_IN_OUT_QUINT};
          }

          @keyframes scaleRouteXForward {
            0% {
              transform: scaleX(0);
              transform-origin: right;
            }

            45% {
              transform: scaleX(1);
              transform-origin: right;
            }

            45.001% {
              transform-origin: left;
            }

            55% {
              transform: scaleX(1);
            }

            100% {
              transform: scaleX(0);
              transform-origin: left;
            }
          }

          @keyframes scaleRouteXBackward {
            0% {
              transform: scaleX(0);
              transform-origin: left;
            }

            45% {
              transform: scaleX(1);
              transform-origin: left;
            }

            45.001% {
              transform-origin: right;
            }

            55% {
              transform: scaleX(1);
            }

            100% {
              transform: scaleX(0);
              transform-origin: right;
            }
          }
        `}</style>
      </div>
    )
  }
}
