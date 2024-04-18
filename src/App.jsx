import Header from './components/Header'
import './App.css'
import Modal from './components/UI/Modal'
import React, { useState } from 'react'
import ContextProvider from './components/store/contextProvieder'
import EnteredDataList from './components/EnteredDataList'
function App() {
  const [visible, setVisible] = useState(false)

  const viewHandler = ()=>{
    setVisible(!visible)
  }

  return (
    <ContextProvider>
    {visible && <Modal onClose={viewHandler}/>}
    <Header onbuttonClick={viewHandler}/>
    <EnteredDataList/>
    </ContextProvider>
  )
}

export default App
