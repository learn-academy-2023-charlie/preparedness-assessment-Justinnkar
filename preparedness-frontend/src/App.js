import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [name, setName] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleResetClick = () => {
    setName("")
  }

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input value={name} onChange={handleNameChange} />
        </div>
        <ModalComponent name={name} />
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
    </div>
  )
}

export default App
