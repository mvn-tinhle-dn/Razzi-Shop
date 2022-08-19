//POST API
export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

//PUT API
export async function putData(url = "", id = "", data = {}) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

//Delete Data
export async function deleteData(url = "", id = "") {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
