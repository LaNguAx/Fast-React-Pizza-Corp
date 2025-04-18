import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 sm:px-6 px-4 py-4 text-stone-200 uppercase text-sm md:text-base p-4 flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-3 sm:space-x-6 ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
