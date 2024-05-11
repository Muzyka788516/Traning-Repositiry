

import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import CustomButton from './Components/UI/CustomButton'
import Modal from './Components/Modal/Modal'
import TextBlock from './Components/TextBlock'
import Posts from './Components/Posts'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [isOpenText, setIsOpenText] = useState(false)
  const [isListOpened, setIsListOpened] = useState(false)

  // либо выносим в отдельную функцию, либо через кол бек вносим сразу в компонент, который вызываем 
  // const onHandleClick = () => {
  //   setIsOpened(true)
  // }

  return (
    <>
      <Counter />
      <CustomButton text="click" onHandleClick={() => setIsOpened(!isOpened)} />
      {isOpened && <Modal onHandleClick={() => setIsOpened(!isOpened)} />}
      <CustomButton
        text="Open Text"
        onHandleClick={() => setIsOpenText(!isOpenText)}
      />
      {isOpenText && <TextBlock title="title" description="description" />}
      
      <CustomButton text='open List' onHandleClick={() => setIsListOpened(!isListOpened)}/>

      { isListOpened && <Posts/> }
    </>
  );
}

export default App
