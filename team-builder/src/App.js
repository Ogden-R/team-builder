import React, { useState, useEffect } from 'react';
import MemberForm from './components/MemberForm';
import './App.css';
import axios from './axios';
import Member from './components/Member';


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.name) {
      setError("Please Enter Your Name.");
    } else if (!newMember.email) {
      setError("Please Enter Your Email Address."); 
    } else if (!newMember.role) {
      setError("Please Select Your Role.");
    } else {
      setError ("");
    }

    if(!error) {
      axios.post('fakeapi.com', newMember)
      .then(resp => {
        const memberFromDb = resp.data;
        setMembers([memberFromDb, ...members])
        setFormValues(initialFormValues);
      })
      }
    }
  
    useEffect(() => {
      axios.get('fakeapi.com')
      .then(resp => setMembers(resp.data))
    }, [])
  
    return (
      <div className="App">
        <h1>Member Form App</h1>

        {error && <h2 className="error-text">{error}</h2>}
        <MemberForm
          update={updateForm}
          submit={submitForm}
          values={formValues}
        />

        {
          members.map(teamMembers => {
            return (
              <Member key={teamMembers.id} details={teamMembers} />
            )
          })
        }
      </div>
    );
}
