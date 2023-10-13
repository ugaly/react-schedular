import React, {useState} from "react";
import AuthService from "../../services/auth/auth_service";
import jwt_decode from 'jwt-decode';

const Login = () => {

   const [username, setUsername] = useState("User");
  const [password, setPassword] = useState("Mwalwama@123");

  const handleLogin = (e) => {
  e.preventDefault();
  const data = {
    'username': username,
    'password': password
  };

  try {
    AuthService.login(data).then(r => {
      try {
        console.log(r.data);
        let access = r.data.access;
        let refresh = r.data.refresh;

        const decoded = jwt_decode(access);
        console.log(decoded.user_id);

        sessionStorage.setItem('login', 'true');
        sessionStorage.setItem('id', decoded.user_id);
        sessionStorage.setItem('access', access);
        sessionStorage.setItem('refresh', refresh);
        window.location.reload()

      } catch (e) {
        console.log("mwalwama " + e);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
    return(
        <div className="flex items-center justify-center min-h-screen">
          {/*  <section className="bg-gray-50 dark:bg-gray-900">*/}
                <section className="w-full max-w-md">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        {/*<img className="w-8 h-8 mr-2"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>*/}
                            Venue Booking System
                    </a>
                    <div
                        className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                         <div className="p-6 space-y-4 bg-gray-50 md:space-y-6 sm:p-8  rounded-lg shadow  border-gray-900  ">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 ">
                                Sign in to your account
                            </h1>
                            <div className="space-y-4   md:space-y-6" >
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">Your
                                        email</label>
                                    <input type="email" name="email" id="email"
                                           value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                           placeholder="name@gmail.com" />
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700"
                                           />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                   required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <a href="#"
                                       className="text-sm font-medium text-primary-600 hover:underline">Forgot
                                        password?</a>
                                </div>
                                <button onClick={(e)=>handleLogin(e)}
                                        className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-600">Sign
                                    in
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Don’t have an account yet? <a href="#"
                                                                  className="font-medium text-primary-600 hover:underline ">Sign
                                    up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login