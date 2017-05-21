import * as colors from '../constants/colors'

const Modal = ({ isVisible, children }) => (
  <div className={isVisible && 'visible'}>
    {children}

    <style jsx>{`
      div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: ${colors.DARKEST_GREY};
        opacity: 0;
        visibility: hidden;
        transition: opacity 1s ease-out, visibility 0s linear 1s;
      }

      div.visible {
        opacity: 1;
        visibility: visible;
        transition: opacity 1s ease-out;
      }
    `}</style>
  </div>
)

Modal.displayName = 'Modal'

export default Modal
