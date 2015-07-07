# ATM application

We 're going to build an application for keeping track of the our checking and 
savings accounts' balances. [You can play with an example of what a working 
version will do online](http://h4w5.github.io/atm-example).

You've been given starter code in the folder `starter`. There is an HTML 
template in the file `index.html`, and a group of assets in the folders 
`images`, `javascripts`, and `stylesheets`. JQuery has been included, as has a 
full stylesheet (`main.css`); you do your work in the `index.html` file (HTML) 
and the `main.js` file (JavaScript).

## User Stories

- As a user, I want to deposit money into either one of my bank accounts:
  checking and savings.
- As a user, I want to withdraw money from one of the bank accounts.
- As a user, I want to ensure that the balance in an account can't go negative.
  If I try to withdraw more money than exists in the account, I want the ATM to 
  ignore the transaction and alert me to my error.
- As a user, I want the color of my bank account to reflect its balance 
  (there's a CSS class called `zero` already written for this)!

## Bonus

- As a user, I want overdraft protection:
  - If a withdrawal can be covered by the balances in *both* accounts combined, 
    take the balance of the account withdrawn from down to $0 and take the rest 
    of the withdrawal from the other account. 
  - If the withdrawal amount is more than the combined account balance, follow 
    the process for an overdraft above.

#### Tips

- Only start working with the DOM after you have the logic down
- Don't just assume that your click events are firing; use `console.log` to 
  make sure!

#### Resources

* [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener)

