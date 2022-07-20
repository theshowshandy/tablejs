export const deleteItem = async (setFlag, flag, id) =>
  await fetch(`http://178.128.196.163:3000/api/records/${id}`, {
    method: "DELETE",
  }).then(() => setFlag(!flag));

export const addNewItem = (setFlag, flag, data) =>
  fetch(`http://178.128.196.163:3000/api/records/`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-type": "application/json" },
    body: JSON.stringify({ data: { name: data.name, age: data.age } }),
  }).then(() => setFlag(!flag));

export const editItem = async (id, name, age) => {
  const body = { data: { name: name, age: age } };

  await fetch(`http://178.128.196.163:3000/api/records/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
