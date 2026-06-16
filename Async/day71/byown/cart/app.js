fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then((data) => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor = "#f4f4f4";

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit,minmax(300px,1fr))";
    container.style.gap = "20px";
    container.style.padding = "20px";

    data.carts.forEach((cart) => {
      const card = document.createElement("div");

      card.style.backgroundColor = "white";
      card.style.borderRadius = "10px";
      card.style.padding = "15px";
      card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

      const title = document.createElement("h2");
      title.innerText = `Cart #${cart.id}`;

      const user = document.createElement("p");
      user.innerText = `User ID: ${cart.userId}`;

      const total = document.createElement("p");
      total.innerText = `Total: $${cart.total}`;

      card.append(title, user, total);

      cart.products.forEach((product) => {
        const productDiv = document.createElement("div");

        productDiv.style.borderTop = "1px solid #ddd";
        productDiv.style.marginTop = "10px";
        productDiv.style.paddingTop = "10px";

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "8px";

        const name = document.createElement("h4");
        name.innerText = product.title;

        const price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        const quantity = document.createElement("p");
        quantity.innerText = `Quantity: ${product.quantity}`;

        productDiv.append(img, name, price, quantity);

        card.append(productDiv);
      });

      container.append(card);
    });

    document.body.append(container);
  })
  .catch((err) => console.log(err));