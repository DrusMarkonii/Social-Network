import axios from 'axios';
import { Dispatch } from 'redux';
import { addUsersAction } from '../reducers/userReducer';

const fetchUsers =
  () =>
    async (dispatch: Dispatch)=> {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );

        dispatch(addUsersAction(response.data));
      } catch (e) {
        console.log(e);
      }
    };

export default fetchUsers;
