import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../src/App.css";
export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const role = form.role.value;
    const category = form.category.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;

    const allData = { name, price, category, role, phoneNumber, email };

    await axios
      .post("http://localhost:3000/api/product", allData)
      .then((res) => alert(res.data))
      .catch((e) => console.log(e.message));
  };

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/api/getProduct")
        .then((data) => setProduct(data.data))
        .catch((e) => console.log(e.message));
    };

    fetchData();
  }, [axios, setProduct]);

  const [findEmail, setFindEmail] = useState([]);
  console.log(findEmail);

  const email = "aminul@gmail.com";
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3000/api/findByEmail/${email}`)
        .then((data) => setFindEmail(data.data))
        .catch((e) => console.log(e.message));
    };

    fetchData();
  }, [axios, setFindEmail]);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border rounded"
      >
        <h2 className="text-xl font-bold mb-4">Product Form</h2>

        <input
          type="text"
          name="name"
          placeholder="product Name"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="text"
          name="role"
          placeholder="product role"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="price"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="category"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="number"
          name="phoneNumber"
          placeholder="write your phone number"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="write your email"
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <div>
        <h3>product length {products.length}</h3>
        {products.map((product) => {
          const { _id, price, name, role, email, category } = product;

          return (
            <div key={_id}>
              <div className="card">
                <h2>{name}</h2>
                <h2>{email ? email : "not found"}</h2>

                <button onClick={() => handleDelete(_id)}>Delete</button>
                <Link to={`/product/${_id}`}>
                  <button>Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2>find by email</h2>

        {findEmail.map((email) => {
          return (
            <div>
              <h2>{email.name}</h2>
              <h2>{email.email}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
