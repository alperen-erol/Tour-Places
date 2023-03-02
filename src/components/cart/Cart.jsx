import "./cart.css";
import { data } from "../../Utility/data";
import Cartitem from "./Cartitem";
const cart = () => {
  return (
    <>
      <div className="cardcontainer">
        {data.map((item) => {
          return <Cartitem {...item} />;
        })}
      </div>
    </>
  );
};
export default cart;
