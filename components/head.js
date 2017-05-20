import Head from 'next/head'
import Link from 'next/link'

export default ({ title }) => (
  <Head>
    <title>{ title }</title>
    <meta name="viewport" content="initial-scale=1.0" width="device-width" />
    <link rel="stylesheet" href="/static/normalize.min.css" />
  </Head>
)
