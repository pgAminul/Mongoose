import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSignleProduct] = useState({});

  useEffect(() => {
    const fetchSignleData = async () => {
      await axios
        .get(`http://localhost:3000/api/specificProduct/${id}`)
        .then((data) => setSignleProduct(data.data))
        .catch((e) => console.log(e.message));
    };
    fetchSignleData();
  }, [axios, setSignleProduct]);

  console.log(singleProduct);

  const { name, category, price, role } = singleProduct;
  return (
    <div>
      <h2>Product Details Page</h2>

      <div>
        <h3>{name}</h3>
        <h3>{category}</h3>
        <h3>{price}</h3>
        <h3>{role}</h3>
      </div>
    </div>
  );
}
