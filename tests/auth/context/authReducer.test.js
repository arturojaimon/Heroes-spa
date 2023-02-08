import { authReducer } from "../../../src/auth"
import { types } from "../../../src/auth/types/types"

describe('pruebas en authReducer', () => { 
  test('debe retornar el estado por defecto', () => { 
    const state = authReducer({
      logged: false
    },
    {}
    )
    expect(state).toEqual({logged: false})
   })
  test('el login debe llamar al autenticar y establecer el user', () => { 
    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
        id: '123'
      }
    }
    const state = authReducer({
      logged: false,
    },action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
     })
   })
   
  test('el logout debe borrar el name del usuario y cambiar el logged a false', () => { 
    const state = {
      logged: true,
      user: {id: '123', name: 'Juan'}
    }
    const action = {
      type: types.logout
    }
    const newState = authReducer(
      state,
      action
    )
    expect(newState).toEqual({logged: false})
   })
 })