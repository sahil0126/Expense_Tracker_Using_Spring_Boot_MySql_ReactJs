import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listExpense,deleteExpense} from "../services/ExpenseService";

const ListExpenseComponent = () => {
  const [expenses, setExpenses] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllExpenses();
  }, []);

  function getAllExpenses() {
    listExpense()
      .then((response) => {
        setExpenses(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewExpense() {
    navigator(`/add-expense`);
  }

  function updateExpense(id) {
    navigator(`/edit-expense/${id}`);
  }

  function removeExpense(id) {
    console.log(id);

    deleteExpense(id)
      .then((response) => {
        getAllExpenses();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Expense</h2>
      <button className="btn btn-primary mb-2" onClick={addNewExpense}>
        Add Expense
      </button>

      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Name</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.date}</td>
              <td>{expense.exp_amount}</td>
              <td>{expense.exp_category}</td>
              <td>{expense.exp_name}</td>
              <td>{expense.payment_method}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateExpense(expense.id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => removeExpense(expense.id)}
                  style={{ margin: "10" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpenseComponent;
