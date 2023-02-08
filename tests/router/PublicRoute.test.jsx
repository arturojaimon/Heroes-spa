import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/Router/PublicRoute"

describe('pruebas en <PublicRoute />', () => {
  test('debe mostrar el children si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute >
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>)
    expect(screen.getByText('Ruta publica')).toBeTruthy()
  })
  test('debe navegar si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'ABC123'
      }
    }
    render(
      <AuthContext.Provider value={ contextValue }>
          <MemoryRouter initialEntries={['/login']}>

              <Routes>
                  <Route path='login' element={
                      <PublicRoute>
                          <h1>Ruta pública</h1>
                      </PublicRoute>
                  } />
                  <Route path='marvel' element={ <h1>Página Marvel</h1> } />
              </Routes>
          </MemoryRouter>
      </AuthContext.Provider>
  );
  expect(screen.getByText('Página Marvel')).toBeTruthy()
  })
})