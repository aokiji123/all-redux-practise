import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.userReducer)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;
