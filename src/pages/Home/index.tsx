import SectionTitle from '../../components/SectionTitle'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'
import './Home.css'
import { useEffect, useState } from 'react';

type Link = {
  link: string;
  title?: string;
}

type Call = {
  title?: string;
  description?: string;
  inscription?: string;
  initial_funding?: string;
  source?: string;
  links?: Link[];
}

const Home = () => {
  const [calls, setCalls] = useState<Call[]>([])

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetch('http://localhost:5000/calls')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCalls(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error)
      }
    }
    fetchCalls()
  }, [])
  
  return (
    <div className="container">
      <SectionTitle
        line1='Escritório'
        span='de'
        line2='Projetos'
      />
      <SearchBar placeholder='Encontre o seu edital'/>
      
      <div className='calls-container'>
        {calls.length !== 0 ? calls.map((call, index) => (
          <Card
            key={index}
            chamada={call}
          />
        )) : <div className="no-calls">Nenhuma chamada foi encontrada...</div>}
      </div>
    </div>
  )
}

export default Home