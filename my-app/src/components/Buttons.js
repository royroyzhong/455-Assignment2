import { useDispatch } from "react-redux";
import { add, remove, clearAll } from "../reducers/users/reducer";

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
      return dispatch(remove(item));
    case "clearAll":
      return dispatch(clearAll([]));
    default:
      return;
  }
}
export default Buttons;
