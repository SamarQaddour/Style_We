import { useState, React, useEffect } from "react"
import FormInput from "../../components/FormInput"
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import { LoginAPI} from "../../redux/actions/action";

const Login = (props) => {
  const  isAuthenticated  = useSelector((state) => state.userReducer.isAuthenticated);
  const data = useSelector((state)=> state.userReducer.data )
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: ""
  })
  const router = useRouter();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true
    }
 
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');

    }
  }, [isAuthenticated, router]);

  const handleLogin = (event) => {
    event.preventDefault()
    const api_token =   localStorage.getItem('api_token');
    if(api_token){
      dispatch(LoginAPI(values,
          () => {

          },
          (err) => {


          }
      ))
    }
  }
  return (
    <div className="vaildate" style={{height:'80vh'}}>
      <form onSubmit={handleLogin}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login