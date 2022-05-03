import "./styles.css";
import axios from "axios";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=2")
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>user-1</button>
    </div>
  );
}
