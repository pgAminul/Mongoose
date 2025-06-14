import axios from "axios";

export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;

    const allData = { name, price, category };

    await axios
      .post("http://localhost:3000/api/product", allData)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e.message));
  };

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
          required
        />

        <input
          type="number"
          name="price"
          placeholder="price"
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          type="number"
          name="category"
          placeholder="category"
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
