import { Routes, Route, BrowserRouter } from 'react-router-dom'
import routeDefinitions from './routeDefinitions'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
          {routeDefinitions.map((route) => (
              <Route path={route.path} element={route.element} />
          ))}
      </Routes>
    </BrowserRouter>
  )
}
