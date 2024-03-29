import { Link } from "react-router-dom";

export default function SignUp(){
    return(
      <div className="p-3 max-w-lg mx-auto">
        <h3 className="text-3xl text-center font-bold my-7">SignUp</h3>
        <form className="flex flex-col gap-4">
            <input 
                type="text" 
                placeholder="User Name"
                className="bg-slate-100 p-3 rounded-lg"
            />
            <input 
                type="email" 
                placeholder="Email"
                className="bg-slate-100 p-3 rounded-lg"
            />
            <input 
                type="password" 
                placeholder="Password"
                className="bg-slate-100 p-3 rounded-lg"
            />
            <button
                className="bg-green-700 text-white p-3
                             rounded-lg uppercase hover:opacity-95
                             disabled:opacity-80
                "
            >
            Singn Up    
            </button>
        </form>
        <div className="flex gap-2 mt-5">
            <p>Have an Account?</p>
            <Link to='/sigin'>
                <span className="text-blue-500">Sign in</span>


            </Link>

        </div>

       
      </div>
    )

}