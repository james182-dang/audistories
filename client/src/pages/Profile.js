import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
    // const { username: userParam } = useParams();

    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { username: userParam }
    // });

    // const user = data?.me || data?.user || {};

    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Redirect to='/profile' />;
    // }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this page.
    //         </h4>
    //     )
    // }

    return (
        <div className='profile'>

        </div>
    );
}

export default Profile;