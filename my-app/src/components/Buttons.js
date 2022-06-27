import { useDispatch } from "react-redux";
import { removeRecipeAsync, editNameAsync } from "../reducers/recipe/thunks";

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
    case "edit":
      return dispatch(editNameAsync(item));
    default:
      return;
  }
}
export default Buttons;
