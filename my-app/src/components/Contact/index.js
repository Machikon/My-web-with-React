import React, {useState} from "react";
import {validateEmail} from "../../Utils/helpers";

function Contact(){
  const {name, email, message} = formState;
  const [formState, setFormStatus] = useState({name:"",email:"", message:"",});
  const[errorMessage, setErrorMessage] = useState("");
    
    const handleSubmit = (e) => {
    e.preventDefault()
    }
    const handleChange = (e) => {
      if (e.target.name === "email") {                      // validate email
        const isValid = validateEmail(e.target.value);
        if(isValid === false) {
          setErrorMessage("Please make sure your email is correctly entered.")
        } else {
          setErrorMessage("")
        } 
        } else { 
        if (e.target.value.length = false) {
          setErrorMessage("Please enter" + e.target.name);     // validate name
        } else {
          setErrorMessage("")
        }
        } if (errorMessage = false){
          setFormState({...formState, [e.target.name]:e.target.value})} 
        }
      
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" onBlur={handleChange} required/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" >
            Email
          </label>
          <input className="form-control" type="email" id="email" onBlur={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" onBlur={handleChange} required />
        </div>

        <button className="btn btn-danger" type="submit">Submit</button>
      </form>
    </div>
  )}

export default Contact;


// function Contact(){
//   const {name, email, message} = form;
//   const[formStatus, setFormStatus] = useState ({name: '', email: '', message:''}); 
//   const[errorMessage, setErrorMessage] = useState('');

//   function handleChange(e) {
//     if (e.target.name ===   }
   
//     return (
//       <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Your full name" />
//           </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label>Message</Form.Label>
//           <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//       </Form>
//     );
// }
  // export default Contact;
