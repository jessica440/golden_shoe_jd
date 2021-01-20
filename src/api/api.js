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
