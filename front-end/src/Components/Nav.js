import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear(); // this is used to clear local storage data if user click the logout button
        navigate('/SignUp')
    }
    return (
        <div>
            <img alt="logo" className='logo'src="https://img.freepik.com/free-vector/supermarket-logo-concept_23-2148467758.jpg?w=740&t=st=1689429123~exp=1689429723~hmac=2be3ca6b9ad4e548aaf728bea5a31ced828147ea2f59a1496e8b63d6d6e34399"/>

            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/SignUp">Logout({JSON.parse(auth).name})  </Link></li>
            </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/SignUp">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav

/*
<li>{auth? <Link to="/logout">Logout</Link>:
<Link to="/SignUp">SignUp</Link>}</li> 
This statement is used to toggled between logout and signup 


*/