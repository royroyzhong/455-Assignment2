import { useDispatch } from "react-redux";
import {
  removeRecipeAsync,
  editNameAsync,
  likeAsync,
  dislikeAsync,
} from "../reducers/recipe/thunks";

function Buttons(item) {
  const dispatch = useDispatch();
  console.log(item);
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
      return dispatch(removeRecipeAsync(item)).then(() => {
        item.fn(true);
      });

    case "edit":
      return dispatch(editNameAsync(item)).then(() => {
        item.fn(true);
      });
    case "like":
      return dispatch(likeAsync(item)).then(() => {
        item.fn(true);
      });

    case "dislike":
      return dispatch(dislikeAsync(item)).then(() => {
        item.fn(true);
      });

    default:
  }
}
export default Buttons;
