import * as colors from '../constants/colors'
import * as layout from '../constants/layout'
import * as easings from '../constants/easings'
import * as zIndex from '../constants/z-index'

const ANIMATION_LENGTH = 1000

const Hero = () => (
  <div className="hero__wrap hero__item">
    <div className="hero__name">
      <h2 className="hero__name__first">
        Kyle
      </h2>

      <h2 className="hero__name__last">
        Suss
      </h2>
    </div>

    <div className="hero__front hero__item"></div>
    <div className="hero__back hero__item"></div>

    <style global jsx>{`
      .hero__wrap {
        position: relative;
      }

      .hero__item {
        height: calc(100vh - ${layout.DOUBLE_BODY_SPACING});
      }

      .hero__name {
        font-size: 1.2rem;
      }

      .hero__name__first,
      .hero__name__last {
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .hero__name__first {
        right: calc(50% + 1rem);
        animation: scaleFirstNameXForward ${ANIMATION_LENGTH * 1.75}ms ${easings.EASE_OUT_BACK};
      }

      @keyframes scaleFirstNameXForward {
        0% {
          opacity: 0;
          transform: translateX(-4rem) translateY(-50%);
        }

        75% {
          opacity: 0;
          transform: translateX(-4rem) translateY(-50%);
        }

        100% {
          opacity: 1;
          transform: translateX(0) translateY(-50%);
        }
      }

      .hero__name__last {
        left: calc(50% + 1rem);
        animation: scaleLastNameXForward ${ANIMATION_LENGTH * 1.85}ms ${easings.EASE_OUT_BACK};
      }

      @keyframes scaleLastNameXForward {
        0% {
          opacity: 0;
          transform: translateX(-4rem) translateY(-50%);
        }

        75% {
          opacity: 0;
          transform: translateX(-4rem) translateY(-50%);
        }

        100% {
          opacity: 1;
          transform: translateX(0) translateY(-50%);
        }
      }

      .hero__back {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        background: ${colors.BLUE};
        transform-origin: left;
        animation: scaleHeroXForward ${ANIMATION_LENGTH * 1.5}ms ${easings.EASE_IN_OUT_QUINT};
      }

      @keyframes scaleHeroXForward {
        0% {
          opacity: 0;
          transform: scaleX(0);
        }

        50% {
          opacity: 1;
          transform: scaleX(0);
        }

        100% {
          transform: scaleX(1);
        }
      }

      .hero__front {
        position: absolute;
        width: 100%;
        background: ${colors.LIGHT_GREY};
        transform-origin: bottom;
        animation: scaleHeroYUpward ${ANIMATION_LENGTH}ms ${easings.EASE_IN_OUT_QUINT};
      }

      @keyframes scaleHeroYUpward {
        0% {
          transform: scaleY(0);
        }

        100% {
          transform: scaleY(1);
        }
      }
    `}</style>
  </div>
)

Hero.displayName = 'Hero'

export default Hero
