import Name from '../components/name'
import * as colors from '../constants/colors'
import * as fonts from '../constants/fonts'

export default ({ children }) => (
  <div>
    <Name color={colors.OFF_WHITE} />

    {children}

    <style global jsx>{`
      body {
        background: ${colors.DARKEST_GREY};
        padding-top: 70px;
      }

      h1 {
        font-family: ${fonts.HEADING}
      }
    `}</style>
  </div>
)
