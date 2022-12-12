import { useState } from 'react'

import { ProfileContextProvider } from '../../contexts/ProfileContext'
import Filter from './Filter'
import Profile from './Profile'
import Repositories from './Repositories'

import { Container, Sidebar, Main } from './styles'

import { langColors } from '../../services/config'

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState()

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
      id: 1,
      name: 'Repo 1',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'Repo 2',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'JavaScript',
    },
    {
      id: 3,
      name: 'Repo 3',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'PHP',
    },
    {
      id: 4,
      name: 'Repo 4',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'Ruby',
    },
    {
      id: 5,
      name: 'Repo 5',
      description: 'Descricao',
      html_url: 'https://github.com/Dynylson',
      language: 'TypeScript',
    },
    {
      id: 6,
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

  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  return (
    <Container>
      <Sidebar>
        <ProfileContextProvider>
          <Profile user={user} />
        </ProfileContextProvider>
        <Filter languages={stats} currentLanguage={currentLanguage} onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
