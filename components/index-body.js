import Name from '../components/name'
import * as colors from '../constants/colors'
import * as fonts from '../constants/fonts'

export default ({ children }) => (
  <div>
    <Name color={colors.DARKEST_GREY} />

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
