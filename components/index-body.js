import * as colors from '../constants/colors'
import * as fonts from '../constants/fonts'

const IndexBody = ({ children }) => (
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

IndexBody.displayName = 'IndexBody'

export default IndexBody
