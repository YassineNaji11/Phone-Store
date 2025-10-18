document.querySelector("#orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;

  const response = await fetch("/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, address })
  });

  const result = await response.json();
  alert(result.message);
});
