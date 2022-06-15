import { useDispatch } from "react-redux";
import { add, remove, clearAll } from "../reducers/recipe/reducer";
import { removeRecipeAsync } from "../reducers/recipe/thunks";

function Buttons(item) {
  const dispatch = useDispatch();

  return (
    <>
      <button name={item.name} onClick={() => checkType(dispatch, item)}>
        {item.showName}
      </button>
    </>
  );
}
function checkType(dispatch, item) {
  switch (item.actionType) {
    case "remove":
      // console.log(item.index);
      return dispatch(removeRecipeAsync(item));
    case "clearAll":
      return dispatch(clearAll([]));
    default:
      return;
  }
}
export default Buttons;
