import Filter from './Filter'
import Profile from './Profile'

import { Container, Sidebar, Main } from './styles'

const RepositoriesPage = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>Main</Main>
    </Container>
  )
}

export default RepositoriesPage
