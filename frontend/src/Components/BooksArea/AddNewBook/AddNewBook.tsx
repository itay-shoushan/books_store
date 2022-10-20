import axios, { Axios } from "axios";
import { Notyf } from 'notyf';
import { useForm } from "react-hook-form";
import BooksModel from "../../../models/books";
import "./AddNewBook.css";
import 'notyf/notyf.min.css';

function AddNewBook(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = (data: any) => {
    const book = {
      bookName: data.bookName,
      summary: data.summary,
      genreId: data.genreId,
      price: data.price,
      stock: data.stock,
    };

    axios.post("http://localhost:3001/api/books", data)
        .then(function (response: any) {
            console.log(response);
            
            //display succes
            const notyf = new Notyf();
            notyf.success('Your changes have been successfully saved!');
        })
        .catch(function (error: any) {
            console.log(error);
            const notyf = new Notyf();
            notyf.error('Some Error: '+error.message);

        });
  }


  return (
    <div className="AddNewBook">
      <div className="container">
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit((data) => formData(data))}>
          <div className="mb-3">
            <label htmlFor="bookName" className="form-label">
              Book Name
            </label>
            <input
              {...register("bookName", { required: true })}
              type="text"
              className="form-control"
              id="bookName"
              aria-describedby="bookNameHelp"
            ></input>
            {errors.bookName && <p>Book Name is required.</p>}
            <div id="bookNameHelp" className="form-text">
              Add the name of book
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="summary" className="form-label">
              Book summary
            </label>
            <input
              {...register("summary", { required: true })}
              type="text"
              className="form-control"
              id="summary"
            ></input>
            {errors.summary && <p>Book summary is required.</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="genreId" className="form-label">
              Genre number
            </label>
            <input
              {...register("genreId", { required: true })}
              type="number"
              className="form-control"
              id="genreId"
            ></input>
            {errors.genreId && <p>Genre number is required.</p>}
            <div id="bookNameHelp" className="form-text">
              Genres: מתח-1 , פעולה-2 , קומדיה-3 , מדע בדיוני-4 , אנימציה-5
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                className="form-control"
                id="price"
              ></input>
              {errors.price && <p>Price is required.</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                {...register("stock", { required: true })}
                type="text"
                className="form-control"
                id="stock"
              ></input>
              {errors.stock && <p>Stock is required.</p>}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewBook;
function then(arg0: (response: any) => void) {
    throw new Error("Function not implemented.");
}

