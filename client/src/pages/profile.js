import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Profile = () => {
    const { user } = useSelector(state => state.auth);
     const dispatch = useDispatch();

     const handleLogout = () => {
        dispatch(logout());
      };

      useEffect(() => {
        // Fetch user profile data if needed
      }, []);


      return (
        <div>
          <h1>Profile</h1>
          {user && (
            <div>
              <p>Username: {user.username}</p>
              {/* Add more profile details */}
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      );
};
export default Profile;
