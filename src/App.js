/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css'
import NavBar from './ui-components/NavBar'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import axios from 'axios'

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

  const [dashboardURL, setDashboardURL] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://vw920578c0.execute-api.us-east-1.amazonaws.com/dev/dashboard/quicksight-url?userId=${user.username}&userName=${user.attributes.name}&userGroup=financeiro`,
    }).then((response) => {
      console.log(response.data.EmbedUrl)
      setDashboardURL(response.data.EmbedUrl)
    })
  }, [])

  return (
    <div className='App'>
      <NavBar overrides={navbarOverrrides} width='100%' />
      <header className='App-header'>
        <iframe
          id='embeddingContainer'
          width='960'
          height='720'
          src={dashboardURL}></iframe>
      </header>
    </div>
  )
}

export default withAuthenticator(App)
