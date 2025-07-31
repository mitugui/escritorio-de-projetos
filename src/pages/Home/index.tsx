import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import Paginator from '../../components/Paginator'
import './Home.css'

type Link = {
  link: string;
  title?: string;
}

type Call = {
  title: string;
  description: string;
  inscription?: string;
  initial_funding?: string;
  source: string;
  links?: Link[];
}

const Home = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const perPage = 10;

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetch(`http://localhost:5000/calls?page=${page}&per_page=${perPage}`)
        if (!response.ok) throw new Error('Erro de rede')
        const data = await response.json()
        setCalls(data.data)
        setTotalItems(data.total)
      } catch (error) {
        console.error('Erro ao buscar chamadas:', error)
      }
    }

    fetchCalls()
  }, [page])

  return (
    <div className="container">
      <SectionTitle
        line1="Escritório"
        span="de"
        line2="Projetos"
      />
      
      <SearchBar placeholder="Encontre o seu edital" />

      <div className="calls-container">
        {calls.length !== 0 ? (
          calls.map((call, index) => <Card key={index} chamada={call} />)
        ) : (
          <div className="no-calls">Nenhuma chamada foi encontrada...</div>
        )}

        <Paginator page={page} totalItems={totalItems} perPage={perPage} />
      </div>
    </div>
  )
}

export default Home
