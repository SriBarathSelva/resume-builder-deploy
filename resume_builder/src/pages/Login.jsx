import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  var delayInMilliseconds = 5000; 
  const loginsubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post('/auth/login', userData);
      if (response.data.success) {
        toast.success(response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("data", JSON.stringify(response.data.token))
        navigate('/dashboard' )
        

      } else {
        toast.error(response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="row backclr py-4">
      <h2 className="text-white text-center mt-5 py-4">Login page</h2>
      <div className="col-md-4 py-5 mt-3 position-absolute top-50 start-50 translate-middle">
        <div className="card p-3 cont">
          <h2>Login here</h2>
          <form onSubmit={loginsubmit} className="mt-5 mx-4">
            <div className="form-group">
              <h5>Email id</h5>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                required
                autoFocus
              />
            </div>
            <div className="form-group mt-4">
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
          <Link className="text-primary text-white text-center" to="/register">Not Registered? Click here</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
