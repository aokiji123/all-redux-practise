import { asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./store/userReducer";

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(asyncIncrementCreator())}>INCREMENT</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>DECREMENT</button>
        <button onClick={() => dispatch(fetchUsers())}>GET USERS</button>
      </div>
        {users.map(user =>
            <div>{user.name}</div>
        )}
    </div>
  );
}

export default App;
