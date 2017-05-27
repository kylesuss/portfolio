import Body from './body'
import * as colors from '../constants/colors'
import * as fonts from '../constants/fonts'
import * as layout from '../constants/layout'

const ProjectBody = ({ children }) => (
  <Body>
    {children}

    <style global jsx>{`
      body {
        background: ${colors.WHITE};
        padding-top: ${layout.BODY_SPACING};
      }

      h1 {
        font-family: ${fonts.HEADING}
      }
    `}</style>
  </Body>
)

ProjectBody.displayName = 'ProjectBody'

export default ProjectBody
