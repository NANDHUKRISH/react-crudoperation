import React,{useEffect, useState} from 'react'
import {Button} from 'reactstrap';
import {Form,FormGroup,Label,Input,Container} from 'reactstrap';
import {useNavigate,useParams} from 'react-router-dom' 
// import {UserContext} from './../App';


function AddEmployee() {
  const navigate = useNavigate();
  const {id}=useParams();
  

  let emptdata={
    slno:"",
    name:"",
    username:"",
    email:"",
    address:""
  }
  const [formvalue,setFormvalue]=useState(emptdata);
  useEffect(()=>{
    if(id){
      fetch("https://635ec2c0ed25a0b5fe4c8f78.mockapi.io/userdetail/"+id)
      .then((data) => data.json())
      .then((response) =>setFormvalue(response));
    }
  },[id]);

let handleChange = (e)=>{
  setFormvalue({...formvalue,[e.target.name]:e.target.value})
    // let users = [...context.users]
    //  users.push(data)
    //  context.setusers(users)
    // navigate('/dashboard')
    // console.log({...formvalue,[e.target.name]:e.target.value});
   }
   const handleSubmit=()=>{
    if(id){
      fetch("https://635ec2c0ed25a0b5fe4c8f78.mockapi.io/userdetail/"+id,{
        method:"PUT",
        body:JSON.stringify(formvalue),
        headers:{"Content-Type": "application/json" }})
          .then((data)=>data.json())
          .then((resp)=>
          {setFormvalue(emptdata);
            navigate("/");})
    }else{
fetch("https://635ec2c0ed25a0b5fe4c8f78.mockapi.io/userdetail",{
  method:"POST",
  body:JSON.stringify(formvalue),
  headers:{"Content-Type": "application/json" }})
    .then((data)=>data.json())
    .then((resp)=>
    {setFormvalue(emptdata);
      navigate("/");})
   }};
  return <>
  <Container>
    <h1 id="addheading">{id?"EDIT":"ADD"} EMPLOYEE</h1>
  <Form className="formdetails">
      <FormGroup className="mb-3" >
        <Label>Enter Full Name</Label>
        <Input type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={formvalue.name}/>
      </FormGroup>

      <FormGroup className="mb-3">
        <Label>Enter Username</Label>
        <Input type="text" placeholder="Enter User name" name="username"
        onChange={handleChange} value={formvalue.username} 
       />
      </FormGroup>

      <FormGroup className="mb-3" >
        <Label>Enter Email </Label>
        <Input type="email" placeholder="Enter Email" name="email"
        onChange={handleChange} value={formvalue.email}
       />
      </FormGroup>

      <FormGroup className="mb-3">
        <Label>Enter Address</Label>
        <Input type="text" placeholder="Address" name="address"
        onChange={handleChange} value={formvalue.address}
        />
      </FormGroup>
     
      <Button className="handlebutton" onClick={handleSubmit}>SUBMIT</Button>
    </Form>
    </Container>
  </>
}

export default AddEmployee