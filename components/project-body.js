import * as colors from '../constants/colors'
import * as fonts from '../constants/fonts'

const ProjectBody = ({ children }) => (
  <div>
    {children}

    <style global jsx>{`
      body {
        background: ${colors.OFF_WHITE};
        padding-top: 70px;
      }

      h1 {
        font-family: ${fonts.HEADING}
      }
    `}</style>
  </div>
)

ProjectBody.displayName = 'ProjectBody'

export default ProjectBody
