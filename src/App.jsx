import React , {useState} from 'react';
const App =()=>{
  const [form,setForm]=useState({name:"",email:"",password:""});
  const [errors,setErrors]=useState("");
  const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.name||!form.email||!form.password) setErrors("ALL FIELDS ARE REQUIRED");
    else if(!form.email.includes("@")) setErrors("INVALID EMAIL TYPE");
    else if(form.password.length<6) setErrors("PASSWORD  SHOULD > 6");
    else{ setErrors(""); alert("FORM SAVED");}
  };
  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enter Name" onChange={handleChange} /> <br /><br />
        <input name="email" placeholder="Enter Email" onChange={handleChange} /> <br /><br />
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} /> <br /><br />
        <button type="submit">Submit</button>
      </form>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
    </div>
  )
}

export default App;