// import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import LOGOUT_MUTATION from '../../../services/apollo/mutation/logout';
// import { AuthContext } from '../../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  // const { user, setUser } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const [Logout] = useMutation(LOGOUT_MUTATION);
  // Logout
  const logout = () => {
    // Remove from local storage
    localStorage.removeItem('token');
    Logout();
    navigate(0);
    // Remove from AuthContext
    // setUser(null);
  };

  return (
    <div className='nav-container'>
      <div className='nav-brand'>
        <h3>
          <Link to='/'>TheBlogsSite</Link>
        </h3>
      </div>

      <div className='options-container'>
        {token ? (
          <div>
            <button className='button'>
              <Link to='/createBlog'>New post</Link>
            </button>
            <button className='button ms-2' onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className='button'>
              <Link to='/login'>Login</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
