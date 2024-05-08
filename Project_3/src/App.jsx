import { useState } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput";
import Counter from "./components/Counter";
// import CustomButton from './components/UI/CustomButton'

function App() {
  // const [state, setState] = useState(false)
  // console.log(state);
  // const [userNameValue, setUserNameValue] = useState('')

  // function onHandleChange(e) {
  //   setUserNameValue(e.target.value)
  // }

  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onLoginChange = (e) => {
    setLoginValue(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }

  return (
    <>
      <input type="text"  onChange={onLoginChange}/>
      <input type="text" onChange={onPasswordChange} />
      <button onClick={() => console.log(loginValue,passwordValue)}>click</button>


      {/* <Counter /> */}
      {/* <button onClick={() => setState('hello')}>click</button> */}
      {/* <CustomInput
        placeholder="ФИО"
        size="l"
        inputValue={userNameValue}
        onHandleChange={onHandleChange}
      /> */}
      {/* <button onClick={() => console.log(userNameValue)}>click</button>
      <CustomInput placeholder="email" size="m" inputValue="value1" />
      <CustomInput placeholder="телефон" size="m" inputValue="value2" /> */}
      {/* <CustomButton
        text="click"
        onHandleClick={() => console.log("first button")}
        size="L"
      />
      <CustomButton
        text="click2"
        onHandleClick={() => console.log("first button")}
        size="M"
      />
      <CustomButton
        text="click3"
        onHandleClick={() => console.log("first button")}
        size="XS"
      /> */}
    </>
  );
}

export default App;
