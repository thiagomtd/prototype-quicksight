/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css'
import NavBar from './ui-components/NavBar'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ user, signOut }) {
  const navbarOverrrides = {
    image: {
      src: user?.attributes.profile,
    },
    Logo29767075: {
      children: 'IPSENSE',
    },
    Button: {
      onClick: signOut,
    },
  }
  console.log({ user })

  return (
    <div className='App'>
      <NavBar overrides={navbarOverrrides} width='100%' />
      <header className='App-header'>
        <div id='embeddingContainer'></div>
        <p>Nome : {user.attributes.name}</p>
        <p>Email : {user.attributes.email}</p>
        <p>Username : {user.username}</p>
      </header>
    </div>
  )
}

export default withAuthenticator(App)
