import { useState } from 'react'

import { Container, Form, Logo, Title, Input, Button } from './styles'

import { MdSearch } from 'react-icons/md'

import githubLogo from '../../assets/images/github-logo.svg'

const MainPage = () => {
  const [login, setLogin] = useState('')

  return (
    <Container>
      <Logo src={githubLogo} alt='Github Logo' />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder='Usuário'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color='#fff' />
        </Button>
      </Form>
    </Container>
  )
}

export default MainPage
