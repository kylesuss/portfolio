import Head from 'next/head'
import IndexBody from '../components/index-body'
import ProjectList from '../components/project-list'

const IndexPageContent = () => (
  <div>
    <Head>
      <title>Kyle Suss</title>
    </Head>

    <IndexBody>
      <ProjectList />
    </IndexBody>
  </div>
)

IndexPageContent.displayName = 'IndexPageContent'

export default IndexPageContent
