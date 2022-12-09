import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
       <div className="row">
        <div className="col-md-3 col-sm-12  mt-3 mx-auto shadow">
            {/* <h5 className="text-center">Login</h5> */}
          <form className="p-5" >
            
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p>Don't have an Account?<Link to="/signup"> Signup</Link></p>
          </form>
        </div>
      </div>
    
    </>
  )
}

export default Login