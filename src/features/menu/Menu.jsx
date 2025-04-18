import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // this'll fetch the data simultaneously with the page render using the router.
  const menu = useLoaderData();

  return (
    <ul className="divide-y-2 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
