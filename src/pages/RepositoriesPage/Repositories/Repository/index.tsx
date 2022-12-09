import { Container, Name, Description, Footer, Lang, Link } from './styles'

const Repository = () => {
  return (
    <Container color='#f1c40f'>
      <Name>Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color='#f1c40f'>
        <Lang>Repository Lang</Lang>
        <Link href='#' target='_blank'>
          Ver
        </Link>
      </Footer>
    </Container>
  )
}

export default Repository
