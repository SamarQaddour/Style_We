import { useState, React, useEffect } from "react"
import FormInput from "../../components/FormInput"
import {signInAPI} from '../../redux/actions/action'
import {connect, useDispatch, useSelector} from 'react-redux'
const Signup = (props) => {
  const data = useSelector((state)=> state.userReducer.data )
  const [user, setUser] = useState({
    name: "",
    email: "",
    birthday: "",
    photo:"",
    password: "",
    confirmPassword: ""
  })
    useEffect(()=>{
        signInAPI()
      console.log(props,'pppppppppp')
    },[])

  const dispatch = useDispatch()
  const inputs = [
    {
      id: 1,
      name: "name",
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
      placeholder: "email",
      errorMessage: "It should be a valid email address!",
      label: "email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: user.password,
      required: true
    },
    {
        id: 6,
        name: "photo",
        type: "file",
        placeholder: "press your personal picture",
      }
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(signInAPI(user,
        () => {

        },
        (err) => {
            console.log(err, 'test callback Error')
        }
    ))
  }


  return (
    <div className="vaildate">
      <form onSubmit={onSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
            <FormInput
                key={input.id}
                {...input}
                value={user[input.name]}
                onChange={onChange}
            />
        ))}
        <button>Submit</button>
      </form>

    </div>
  )
}



// const mapStateToProps = (state) => {
//   return {
//     data: state.userReducer.data
//   }
// };





export default Signup