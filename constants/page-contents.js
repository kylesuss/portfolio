import dynamic from 'next/dynamic'
import Aurora from '../page-contents/aurora'

export const DEFAULT_COMPONENT = 'index'

export default {
  [DEFAULT_COMPONENT]: dynamic(import('../page-contents/index')),
  aurora: dynamic(import('../page-contents/aurora'))
}
