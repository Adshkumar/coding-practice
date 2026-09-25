    function login(){
      let user = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let error = document.getElementById("errorMsg");

      if(user === "adarsh" && password === "1234"){
        document.getElementById("loginPanel").style.display ="none";
        document.getElementById("billingSystem").style.display = "block";
      }else{
        error.innerText = "Invalid Username or Password!";
      }
    }

    let subtotal = 0;
    function addItem(){
          let code = document.getElementById("itemCode").value;
          let name = document.getElementById("itemName").value;
          let qty = parseInt(document.getElementById("itemQty").value);
          let price = parseFloat(document.getElementById("itemPrice").value);

    if(!code || !name || !qty || !price){
      alert("Please enter your details!🤗");
      return;
    }

    let amount = qty * price;
    subtotal += amount;

        let row = `<tr>
        <td>${code}</td>
        <td>${name}</td>
        <td>${qty}</td>
        <td>${price.toFixed(2)}</td>
        <td>${amount.toFixed(2)}</td>
        <td><button onclick="removeItem(this, ${amount})">Remove</button></td>
    </tr>`;

    document.querySelector("#billingSystem tbody").innerHTML += row;
    updateTotals();
    }

        function removeItem(btn, amount) {
      subtotal -= amount;
      btn.parentElement.parentElement.remove();
      updateTotals();
    }

    function updateTotals() {
      let tax = subtotal * 0.05;
      let net = subtotal + tax;
      document.getElementById("subtotal").innerText = subtotal.toFixed(2);
      document.getElementById("tax").innerText = tax.toFixed(2);
      document.getElementById("nettotal").innerText = net.toFixed(2);
      updateBalance();
    }

        function updateBalance() {
      let paid = parseFloat(document.getElementById("paid").value);
      let net = parseFloat(document.getElementById("nettotal").innerText);
      let bal = paid - net;
      document.getElementById("balance").innerText = bal.toFixed(2);
    }

    function newBill() {
      document.querySelector("#billTable tbody").innerHTML = "";
      subtotal = 0;
      updateTotals();
      document.getElementById("custName").value = "";
      document.getElementById("custAddress").value = "";
      document.getElementById("paid").value = 0;
      document.getElementById("balance").innerText = "0";
    }

    
