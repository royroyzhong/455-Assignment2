const addRecipe = async (input) => {
  const response = await fetch("http://localhost:8888/recipe", {
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
  const response = await fetch("http://localhost:8888/recipe", {
    method: "GET",
  });
  return response.json();
};

const removeRecipe = async (index) => {
  const response = await fetch("http://localhost:8888/recipe", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(index),
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const searchRecipe = async (input) => {
  // console.log(input);
  const response = await fetch("http://localhost:8888/search", {
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

export default {
  addRecipe,
  getRecipe,
  removeRecipe,
  searchRecipe,
};
