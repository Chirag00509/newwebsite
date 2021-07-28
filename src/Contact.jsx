import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const inputValue = (event) => {
    const {name,value} = event.target;

    setData((prevData)=> {
      return{
        ...prevData,
        [name] : value,
      }
    })
  }

  const submitValue = (e) => {
    e.preventDefault();
     alert(`My name is ${data.fullname}. My mobile num is ${data.phone}. My email id is ${data.email}. Hear I want  to say ${data.msg}`);

  }
  return (
    <>
      <div className='my-5 text-center'>
        <h1>Contact US</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-12 mx-auto'>
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='fullname'
                  value={data.fullname}
                  onChange={inputValue}
                  placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input
                  type='number'
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='phone'
                  value={data.phone}
                  onChange={inputValue}
                  placeholder="Enter your mobile number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='email'
                  autoComplete='off'
                  value={data.email}
                  onChange={inputValue}
                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name='msg'
                  value={data.msg}
                  onChange={inputValue}>
                  </textarea>
              </div>
              <div className="col-12">
                <button 
                className='btn btn-outline-primary' 
                type="submit"
                onClick={submitValue}>Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
