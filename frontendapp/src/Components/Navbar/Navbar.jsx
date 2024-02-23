import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className="bg-slate-200 shadow-xl">
            <div className="flex justify-between items-center max-w-6xl
            mx-auto p-3 ">
                <Link to='/'>
                <h1 className="font-bold">Security Application</h1>
                </Link>
                <ul className="flex gap-6 font-semibold	">
                    <Link to='/profile'>
                        <li>Profile</li>
                    </Link>

                    <Link to='/SigIn'>
                        <li>Account</li>
                    </Link>
                    
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    
                </ul>
            </div>    

        </div>
    )
}