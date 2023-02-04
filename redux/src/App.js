import {useDispatch, useSelector} from "react-redux";
import {addMoneyAction, getMoneyAction} from "./store/moneyReducer";
import {addCustomerAction, deleteCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./async-actions/customers";

function App() {
  const dispatch = useDispatch()
  const money = useSelector(state => state.money.money)
  const customers = useSelector(state => state.customers.customers)

  const addMoney = (number) => {
    dispatch(addMoneyAction(number))
  }

  const getMoney = (number) => {
    dispatch(getMoneyAction(number))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id))
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div>Money: {money}</div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button onClick={() => addMoney(Number(prompt()))}>Add money</button>
        <button onClick={() => getMoney(Number(prompt()))}>Get money</button>

        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add many customers</button>
      </div>
      {customers.length > 0 ? (
        <div>{customers.map(customer => (
          <ul>
            <li key={customer.id} onClick={() => deleteCustomer(customer)}>{customer.name}</li>
          </ul>
        ))}</div>
      ) : (
        <div>There are no customers</div>
      )}
    </div>
  );
}

export default App;
