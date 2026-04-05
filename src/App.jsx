import Header from "./components/Header.jsx"
import InputField from "./components/InputField.jsx"
import ResultTable from "./components/ResultTable.jsx"
import { useState } from "react"

function App() {

  const [inputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = inputs.duration>=1

  function updateUserInputs(inputId, newValue){
    setUserInputs(prevUser => {
        return {
            ...prevUser,
            [inputId]: +newValue
        }
    })
  }

  return (
    <>
    <Header title="Investment Calculator"/>
    <InputField onChange={updateUserInputs} userInputs={inputs}/>
    {inputIsValid && <ResultTable userInputs={inputs}/>}
    {!inputIsValid && <p className="center">Please enter a duration greater than 0!</p>}
    </>
  )
}

export default App
