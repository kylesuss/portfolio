import Name from '../components/name'
import * as colors from '../constants/colors'
import * as fonts from '../constants/fonts'

const ProjectBody = ({ children }) => (
  <div>
    {children}

    <style global jsx>{`
      body {
        background: ${colors.DARKEST_GREY};
        padding-top: 70px;
        transition: background 1s ease-out;
      }

      h1 {
        font-family: ${fonts.HEADING}
      }
    `}</style>
  </div>
)

ProjectBody.displayName = 'ProjectBody'

export default ProjectBody
