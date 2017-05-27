import * as colors from '../constants/colors'
import * as layout from '../constants/layout'

const GITHUB_LINK = 'https://github.com/kylesuss/portfolio'

const BottomNavigation = ({ color }) => (
  <div>
    <a href={GITHUB_LINK} target="_blank" rel="noopener">
      src
    </a>

    <style jsx>{`
      div {
        display: flex;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        height: ${layout.BODY_SPACING};
        align-items: center;
        justify-content: flex-end;
        background: ${colors.WHITE};
        padding: 0 ${layout.BODY_SPACING};
      }
    `}</style>
  </div>
)

BottomNavigation.displayName = 'BottomNavigation'

export default BottomNavigation
