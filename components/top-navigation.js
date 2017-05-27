import * as colors from '../constants/colors'
import * as layout from '../constants/layout'

const TopNavigation = ({ color }) => (
  <div>
    <h1 style={{ color }}>
      Kyle Suss
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
        margin: 0;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 2px;
      }
    `}</style>
  </div>
)

TopNavigation.displayName = 'TopNavigation'

export default TopNavigation
