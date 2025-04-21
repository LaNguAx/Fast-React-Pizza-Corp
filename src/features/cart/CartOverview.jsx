import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cartQuantity = useSelector(getTotalCartQuantity);
  const cartPrice = useSelector(getTotalCartPrice);

  if (!cartQuantity) return null;

  return (
    <div className="bg-stone-800 sm:px-6 px-4 py-4 text-stone-200 uppercase text-sm md:text-base p-4 flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-3 sm:space-x-6 ">
        <span>{cartQuantity} pizzas</span>
        <span>{formatCurrency(cartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
