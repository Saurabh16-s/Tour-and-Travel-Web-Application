import { useEffect, useState } from "react";
import API from "../api";

function Destination() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/destinations")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.imageUrl} alt="" />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Destination;