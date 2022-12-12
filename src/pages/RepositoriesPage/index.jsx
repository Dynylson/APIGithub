import { ProfileContextProvider } from '../../contexts/ProfileContext'
import Filter from './Filter'
import Profile from './Profile'
import Repositories from './Repositories'

import { Container, Sidebar, Main } from './styles'

import { langColors } from '../../services/config'

const RepositoriesPage = () => {
  const user = {
    login: 'Dynylson',
    name: 'Dynylson Junior',
    avatar_url: 'https://avatars.githubusercontent.com/u/94336147?v=4',
    followers: 9,
    following: 18,
    company: 'ETE - PE',
    blog: '',
    location: 'Brazil',
  }

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'JavaScript',
    },
    {
      name: 'Repo 3',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'PHP',
    },
    {
      name: 'Repo 4',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'Ruby',
    },
    {
      name: 'Repo 5',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'TypeScript',
    },
    {
      name: 'Repo 6',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'Ruby',
    },
  ]

  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      [],
    )

  delete stats.null

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count)
  console.log(stats)

  // Calculo dos filters

  return (
    <Container>
      <Sidebar>
        <ProfileContextProvider>
          <Profile user={user} />
        </ProfileContextProvider>
        <Filter languages={stats} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
