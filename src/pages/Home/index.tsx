import SectionTitle from '../../components/SectionTitle'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import './Home.css'

const Home = () => {
  return (
    <div className="container">
      <SectionTitle
        line1='Escritório'
        span='de'
        line2='Projetos'
      />
      <SearchBar placeholder='Encontre o seu edital'/>
      <Card 
        chamada={{
          title: 'Chamada Pública para Projetos de Pesquisa',
          description: 'Apoio a projetos de pesquisa inovadores nas áreas de tecnologia e ciências sociais.',
          inscription: '01/01/2024 - 31/03/2024',
          initial_funding: 'R$ 100.000,00',
          source: 'fundacao_araucaria',
          links: [
            { link: '#', title: 'Ver documentos' },
            { link: '#', title: 'Mais informações' }
          ]
        }}
      />
    </div>
  )
}

export default Home