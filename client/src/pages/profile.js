import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchUserProfile } from '../redux/actions/authActions';
import { selectIsAuthenticated, selectUserProfile, selectAuthStatus } from '../redux/selectors/authSelectors';

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userProfile = useSelector(selectUserProfile);
  const authStatus = useSelector(selectAuthStatus);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      dispatch(fetchUserProfile()); // Fetch user profile if authenticated
    }
  }, [dispatch, isAuthenticated, router]);

  return (
    <div>
      <h1>Profile Page</h1>
      {authStatus === 'loading' && <p>Loading...</p>}
      {authStatus === 'succeeded' && (
        <div>
          <p>User Profile:</p>
          <pre>{JSON.stringify(userProfile, null, 2)}</pre>
        </div>
      )}
      {authStatus === 'failed' && <p>Error loading profile</p>}
    </div>
  );
};

export default Profile;