import * as colors from '../constants/colors'
import * as layout from '../constants/layout'

const Hero = () => (
  <div>
    <div className="left"></div>
    <div className="right"></div>

    <style jsx>{`
      div {
        display: flex;
        height: calc(100vh - ${layout.DOUBLE_BODY_SPACING});
      }

      .left {
        flex: 1;
        background: ${colors.BLUE};
      }

      .right {
        flex: 1;
        background: ${colors.LIGHT_GREY}
      }
    `}</style>
  </div>
)

Hero.displayName = 'Hero'

export default Hero
