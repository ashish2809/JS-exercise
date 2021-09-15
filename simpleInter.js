function interest(amount, rate, year) {

    let p = amount / (1 + (rate * year));

    let si = (p * rate * year) / 100;
    console.log('Simple Interest = ', si);
}

let amount = prompt('Enter amount ?');
let rate = prompt('Enter interest rate ?');
let year = prompt('Enter years ?');

interest(amount,rate,year);