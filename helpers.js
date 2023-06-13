
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}


function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

let newTd = document.createElement('td');
newTd.className = 'deleteBtn';
newTd.innerText = 'X';

newTd.addEventListener('click', removeElement);

tr.append(newTd);


function removeElement(e) {
let rElement = e.target.closest('tr');

delete allServers[rElement.id];

rElement.parentNode.removeChild(rElement);
updateServerTable();
}