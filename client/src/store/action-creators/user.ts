import axios from 'axios';
import { Dispatch } from 'redux';
import { addUsersAction } from '../reducers/userReducer';

const fetchUsers = () => async (dispatch: Dispatch) => {
  try {
    // const response = await axios.get(
    //   'https://jsonplaceholder.typicode.com/users'
    // );

    const response = await fetch(
      'http://localhost:5000/friends'
    ).then(data => data.json())

    

    dispatch(addUsersAction(response));
  } catch (e) {
    console.log(e);
  }
};

export default fetchUsers;
