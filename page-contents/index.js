import Head from 'next/head'
import IndexBody from '../components/index-body'
import Hero from '../components/hero'
import ProjectList from '../components/project-list'

const IndexPageContent = () => (
  <div>
    <Head>
      <title>Kyle Suss</title>
    </Head>

    <IndexBody>
      <Hero />
      <ProjectList />
    </IndexBody>
  </div>
)

IndexPageContent.displayName = 'IndexPageContent'

export default IndexPageContent
