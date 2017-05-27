import * as layout from '../constants/layout'

const Body = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        padding: 0 ${layout.BODY_SPACING};
      }
    `}</style>
  </div>
)

Body.displayName = 'Body'

export default Body
