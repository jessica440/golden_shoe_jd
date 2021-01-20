function request(path, options) {
  return fetch(url + path, options).then((response) => {
    if (!response.ok && response.status !== 409) {
      const error = new Error("Error!");
      error.status = response.status;
      throw error;
    } else {
      console.log(response);
      return response.json();
    }
  });
}

function returns(orderNumber, quantity, reason) {
  return request("user", {
    method: "POST",
    body: JSON.stringify({
      orderNumber: orderNumber,
      quantity: quantity,
      reason: reason,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
}

export default returns;
