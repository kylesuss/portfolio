import Link from 'next/link'
import Head from '../components/head'

export default () => (
  <div>
    <Head title="Kyle Suss" />
    <Link prefetch href='/aurora'><a>Aurora</a></Link>
  </div>
)
