// const list = document.getElementById('list');

// // Add click event listener to the list
// list.addEventListener('click', (event) => {
//   // Check if the clicked element is a remove button
//   if (event.target.classList.contains('remove-btn')) {
//     // Remove the corresponding li element
//     const listItem = event.target.parentNode;
//     listItem.parentNode.removeChild(listItem);
//   }
// });

let balance = 500;


function bank() {
  do {
    let acc = parseInt(prompt("Press 1 for deposit, Press 2 for withdraw, and Press 3 for Balance: "));
    switch(acc){
      case 1:
        let deposit = parseInt(prompt("How Much Will you Deposit?: "));
          balance += deposit
          alert("You deposited " + deposit + " pesos")
          alert("Your new balance is " + balance +  " pesos")
          break;
      case 2:
           let withdraw = parseInt(prompt("Enter value: "))
          if (balance < withdraw) {
            alert("Your balance is not enough.")
          }else {
              balance -= withdraw
              alert("You withdrawed " + withdraw + " pesos")
              alert("Your new balance is " + balance +  " pesos")
          }
          break;
      case 3: 
      alert("Your current balance is " + balance)
          break;
      default:
        alert("Press 1 , 2 , or 3 only. Thank you")
  }
  
  choice = parseInt(prompt("Do you still want to continue? Press 1 for yes and 2 for No"))
  }while (choice == 1)
  
}
