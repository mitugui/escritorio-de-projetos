import SectionTitle from '../../components/SectionTitle'
import SearchBar from '../../components/SearchBar'
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
    </div>
  )
}

export default Home