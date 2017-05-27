import Link from 'next/link'
import * as colors from '../constants/colors'
import * as layout from '../constants/layout'

const TopNavigation = ({ color }) => (
  <div>
    <h1 style={{ color }}>
      <Link prefetch href='/'>
        <a>Kyle Suss</a>
      </Link>
    </h1>

    <style jsx>{`
      div {
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: ${layout.BODY_SPACING};
        align-items: center;
        background: ${colors.WHITE};
        padding: 0 ${layout.BODY_SPACING};
      }

      h1 {
        display: flex;
        margin: 0;
        align-items: center;
      }

      h1 a {
        text-transform: uppercase;
        text-decoration: none;
        color: ${colors.DARKEST_GREY};
        font-size: 1.1rem;
        letter-spacing: 2px;
      }
    `}</style>
  </div>
)

TopNavigation.displayName = 'TopNavigation'

export default TopNavigation
