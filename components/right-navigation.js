import GithubIcon from 'react-icons/lib/fa/github'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'
import * as colors from '../constants/colors'
import * as layout from '../constants/layout'
import * as easings from '../constants/easings'

const LINKED_IN_LINK = 'https://www.linkedin.com/in/kylesuss/'
const GITHUB_LINK = 'https://github.com/kylesuss'
const ICON_SIZE = 22

const RightNavigation = ({ color }) => (
  <div>
    <a
      href={LINKED_IN_LINK}
      className="linked-in"
      target="_blank"
      rel="noopener"
    >
      <LinkedInIcon size={ICON_SIZE} />
    </a>

    <a href={GITHUB_LINK} target="_blank" rel="noopener">
      <GithubIcon size={ICON_SIZE} />
    </a>

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: ${layout.BODY_SPACING};
        bottom: ${layout.BODY_SPACING};
        right: 0;
        width: ${layout.BODY_SPACING};
        background: ${colors.WHITE};
      }

      a {
        color: ${colors.DARKEST_GREY};
        transition: color ${easings.SHORT_EASE_OUT};
      }

      a:hover {
        color: ${colors.BLUE};
      }

      .linked-in {
        margin-bottom: .75rem;
      }
    `}</style>
  </div>
)

RightNavigation.displayName = 'RightNavigation'

export default RightNavigation
