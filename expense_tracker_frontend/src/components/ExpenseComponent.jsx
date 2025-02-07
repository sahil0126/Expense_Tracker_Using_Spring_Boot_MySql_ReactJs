import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getExpense,updateExpense,createExpense } from "../services/ExpenseService";
import toast from "react-hot-toast";


const ExpenseComponent = () => {

    const [exp_amount,setExp_amount]=useState("");
    const [exp_category,setExp_Category]=useState("");
    const [exp_name,setExp_name]=useState("");
    const [payment_method,setPayment_method]=useState("");

    const { id } = useParams();

    const [errors,SetErrors]=useState({
        exp_amount:"",
        exp_category:"",
        exp_name:"",
        payment_method:"",
    })

    const navigator=useNavigate();

    useEffect(()=>{
        if(id){
            getExpense(id).then((response)=> {
                setExp_amount(response.data.exp_amount);
                setExp_Category(response.data.exp_category);
                setExp_name(response.data.exp_name);
                setPayment_method(response.data.payment_method);
            })
            .catch((error)=>{
                console.log(error);
                
            })
        }
    },[id]);


    function handleExp_amount(e){
        setExp_amount(e.target.value);
    }
    function handleExp_category(e){
        setExp_Category(e.target.value);
    }
    function handleExp_name(e){
        setExp_name(e.target.value);
    }
    function handlePayment_method(e){
        setPayment_method(e.target.value);
    }



    function saveOrUpdateExpense(e){
        e.preventDefault();

        if (validationForm()) {
            const expense = { exp_amount, exp_category, exp_name,payment_method };
            console.log(expense);
      
            if (id) {
              updateExpense(id, expense)
                .then((response) => {
                  console.log(response.data);
                  navigator("/expenses");
                  toast.success("Expense Updated");
                })
                .catch((error) => {
                  console.error(error);
                });
            } else {
              createExpense(expense)
                .then((response) => {
                  console.log(response.data);
                  navigator("/expenses");
                  toast.success("Expense Added");
                })
                .catch((error) => {
                  console.error(error);
                });
            }
          }
    }



    function validationForm() {
      let valid = true;
  
      const errorsCopy = { ...errors };
  
      if (exp_amount.trim()) {
        errorsCopy.exp_amount = "";
      } else {
        errorsCopy.exp_amount = "Amount is required";
        valid = false;
      }
      if (exp_category.trim()) {
        errorsCopy.exp_category = "";
      } else {
        errorsCopy.exp_category = "Category is required";
        valid = false;
      }
      if (exp_name.trim()) {
        errorsCopy.exp_name = "";
      } else {
        errorsCopy.exp_name = "Expense Name is required";
        valid = false;
      }
      if (payment_method.trim()) {
        errorsCopy.payment_method = "";
      } else {
        errorsCopy.payment_method = "Payment Method is required";
        valid = false;
      }
  
      SetErrors(errorsCopy);
  
      return valid;
    }
  
    function pageTitle() {
      if (id) {
        return <h2 className="text-center">Update Expense</h2>;
      } else {
        return <h2 className="text-center">Add Expense</h2>;
      }
    }











  return (

    <div className="container">
    <br /> <br />
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        {pageTitle()}
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Expense Amount:</label>
              <input
                type="number"
                placeholder="Enter Expense Amount"
                name="exp_amount"
                value={exp_amount}
                className={`form-control ${
                  errors.exp_amount ? "is-invalid" : ""
                }`}
                onChange={handleExp_amount}
              ></input>
              {errors.exp_amount && (
                <div className="invalid-feedback">{errors.exp_amount}</div>
              )}
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Expense Category:</label>
              <input
                type="text"
                placeholder="Enter Expense Category"
                name="exp_Category"
                value={exp_category}
                className={`form-control ${
                  errors.exp_Category ? "is-invalid" : ""
                }`}
                onChange={handleExp_category}
              ></input>
              {errors.exp_category && (
                <div className="invalid-feedback">{errors.exp_category}</div>
              )}
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Expense Name:</label>
              <input
                type="text"
                placeholder="Enter Expense Name"
                name="exp_name"
                value={exp_name}
                className={`form-control ${errors.exp_name ? "is-invalid" : ""}`}
                onChange={handleExp_name}
              ></input>
              {errors.exp_category && (
                <div className="invalid-feedback">{errors.exp_category}</div>
              )}
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Payment Method:</label>
              <input
                type="text"
                placeholder="Enter Payment Method"
                name="payment_method"
                value={payment_method}
                className={`form-control ${errors.payment_method ? "is-invalid" : ""}`}
                onChange={handlePayment_method}
              ></input>
              {errors.payment_method && (
                <div className="invalid-feedback">{errors.payment_method}</div>
              )}
            </div>

            <button
              className="btn btn-success"
              onClick={saveOrUpdateExpense}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>






  
  )
}

export default ExpenseComponent