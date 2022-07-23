const addRecipe = async (input) => {
  const response = await fetch("https://example-app-455.herokuapp.com/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const getRecipe = async () => {
  const response = await fetch("https://example-app-455.herokuapp.com/recipe", {
    method: "GET",
  });
  return response.json();
};

const removeRecipe = async (index) => {
  const response = await fetch("https://example-app-455.herokuapp.com/recipe", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(index),
  });
  console.log(response);
  try {
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};

const searchRecipe = async (input) => {
  // console.log(input);
  const response = await fetch("https://example-app-455.herokuapp.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};
const editName = async (input) => {
  console.log(input);
  const response = await fetch("https://example-app-455.herokuapp.com/recipe", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};
const like = async (input) => {
  const response = await fetch(
    "https://example-app-455.herokuapp.com/recipe/like",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};
const dislike = async (input) => {
  const response = await fetch(
    "https://example-app-455.herokuapp.com/recipe/dislike",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};
export default {
  addRecipe,
  getRecipe,
  removeRecipe,
  searchRecipe,
  editName,
  dislike,
  like,
};
