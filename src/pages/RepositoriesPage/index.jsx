import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { ProfileContextProvider } from '../../contexts/ProfileContext'
import Filter from './Filter'
import Profile from './Profile'
import Repositories from './Repositories'

import { Loading, Container, Sidebar, Main } from './styles'

import { langColors } from '../../services/config'
import { getUser, getRepos, getLangsFrom } from '../../services/api'

const RepositoriesPage = () => {
  const { login } = useParams()

  const [user, setUser] = useState()
  const [repositories, setRepositories] = useState()
  const [languages, setLanguages] = useState()
  const [currentLanguage, setCurrentLanguage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ])
      setUser(userResponse.data)
      setRepositories(repositoriesResponse.data)
      setLanguages(getLangsFrom(repositoriesResponse.data))

      setLoading(false)
    }

    loadData()
  }, [])

  // Calculo dos filters

  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  const onClickClearFilter = () => {
    setCurrentLanguage(undefined)
  }

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <Sidebar>
        <ProfileContextProvider>
          <Profile user={user} />
        </ProfileContextProvider>
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
          onClickClearFilter={onClickClearFilter}
        />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  )
}

export default RepositoriesPage
