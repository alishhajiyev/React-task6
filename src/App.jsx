import React, {Component} from 'react'
import './App.css'
// import { render } from 'react-dom'

class App extends Component {
  state={
    fullname: "",
    id: "",
    gender: "Male",
    age: "",
    email: "",
    phone: "",
    symptom: "",
    ischecked: false,
    isclicked: false
  }
  handleInput = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  submitted=(e)=>{
    if(this.state.fullname!=="" && this.state.id!=="" && this.state.gender!=="" && this.state.age!=="" && this.state.email!=="" && this.state.phone!=="" && this.state.symptom!==""){
      alert("Kart qeydiyyatdan keçdi")
      console.log(`Fullname: ${this.state.fullname}\n Verification ID: ${this.state.id}\n Gender: ${this.state.gender}\n Age: ${this.state.age}\n Email: ${this.state.email}\n Phone number: ${this.state.phone}\n Symptom: ${this.state.symptom}\n Repeat: ${this.state.ischecked}`)
    }
    else{
      alert('Boşluqları doldurun')
      e.preventDefault()
    }
  }
  render(){
    return (
      <div className="App">
        <form onSubmit={this.submitted}>
          <label htmlFor="fullname">
              Full name
              <br/>
              <input value={this.state.fullname} onChange={this.handleInput} name='fullname' type='text' />
          </label>
          <br/><br/>

          <label htmlFor="id">
              Verification ID
              <br/>
              <input value={this.state.id} onChange={this.handleInput} name='id' type = 'text' />
          </label>
          <br/><br/>

          <label>
              Gender
              <br/>
              <select value={this.state.gender} onChange={this.handleInput} name='gender'>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
              </select>
          </label>
          <br/><br/>

          <label>
              Age
              <br/>
              <input htmlFor="age" value={this.state.age} onChange={this.handleInput} name='age' type = 'text' />
          </label>
          <br/><br/>

          <label>
              Email
              <br/>
              <input htmlFor="email" value={this.state.email} onChange={this.handleInput} name='email' type = 'email' />
          </label>
          <br/><br/>

          <label>
              Phone number
              <br/>
              <input htmlFor="phone" value={this.state.phone} onChange={this.handleInput} name='phone' type = 'text' />
          </label>
          <br/><br/>

          <label>
              Symptom
              <br/>
          </label>
          <textarea value={this.state.symptom} onChange={this.handleInput} name='symptom' rows="5" cols="20"></textarea>
          <br/><br/>

          <label>
              Təkrar qəbul
              <input value={this.state.ischecked} onClick={(e)=>{this.setState({[e.target.id]:!this.state.ischecked})}} name='repeat' type = 'checkbox' />
          </label>
          <br/><br/>

          <button type="submit">Отправить</button>
        </form>
      </div>
    )
  }
}

export default App
