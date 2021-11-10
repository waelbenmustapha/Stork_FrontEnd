import React, {useState} from 'react';
import './App.css';
import SignUp from './componant/SignUp';
import FormSuccess from './componant/FormSuccess';
import './componant/SignUp.css'

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className='form-container'>
      <span className='close-btn'>×</span>
    {!isSubmitted ? (
      <SignUp submitForm={submitForm} />
    ) : (
      <FormSuccess />
    )}
  </div> 
  );
}

export default App;
