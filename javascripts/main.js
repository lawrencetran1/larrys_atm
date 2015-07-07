$(document).ready(function(){

	// initialize totals at 0
	var checking_total = 0;
	var savings_total = 0;

	// add click events to each button and pass bankFn as the callback function
	// bankFn will be called each time a button is clicked
	$('#checking_deposit, #checking_withdraw, #savings_deposit, #savings_withdraw').click(bankFn);	

	// this is the callback function that is called each time a button is clicked
	function bankFn() {

		// store amounts in the input boxes into variables
		var checking_amount = $('#checking_amount').val();
		var savings_amount = $('#savings_amount').val();

		// If id is checking_deposit, then do something
		if (this.id === 'checking_deposit') {

			// add amount to checking_total
			checking_total += +checking_amount;

			// reset input box		
			$('#checking_amount').val("");

			// append new checking_total to div with id checking_balance
			$('#checking_balance').html('$' + checking_total.toFixed(2));

			// change color to green if account balance > 0
			if (checking_total > 0) $('#account1').attr('class', 'account');
		}

		// If id is checking_withdraw, then do something
		else if (this.id === 'checking_withdraw') {
			
			// reset input box
			$('#checking_amount').val("");

			// if amount in checking account is less than withdraw amount, then do something
			if (checking_total < checking_amount) {

				// calls withdraw_protection function
				withdraw_protection(savings_total, checking_total, checking_amount);

			// there is enough money so just subtract withdraw amount from checking	
			} else {
				checking_total -= +checking_amount;
			}

		// if checking equals zero, change color to red	
		if (checking_total === 0) $('#account1').attr('class', 'zero');
		}

		// If id is savings_deposit, then do something
		else if (this.id === 'savings_deposit') {

			// add amount to savings_total
			savings_total += +savings_amount;

			// reset input box
			$('#savings_amount').val("");

			// append new savings_total to div with id savings_balance
			$('#savings_balance').html('$' + savings_total.toFixed(2));

			// change color to green if account balance > 0
			if (savings_total > 0) $('#account2').attr('class', 'account');
		}

		// If id is savings_withdraw, then do something
		else if (this.id === 'savings_withdraw') {

			// reset input box
			$('#savings_amount').val("");

			// if total less than withdraw amt, exit function and alert insuffucient funds
			if (savings_total < savings_amount) return alert('insufficient funds');
			
			// this line gets ran if the condition above is not met
			savings_total -= +savings_amount;

			// append new savings_total to div with id savings_balance
			$('#savings_balance').html('$' + savings_total.toFixed(2));

			// change color to red is savings_total equals 0
			if (savings_total === 0) $('#account2').attr('class', 'zero');
		}						
	}

	// withdraw protection function
	function withdraw_protection(savings, checking, amount) {

		// store difference between amount and checking in a variable
		var diff = amount - checking;

		// exit if there is enough money in checking account or if there's not enough money in savings to cover
		if (diff <= 0 || savings - diff < 0) return;

		// if there is enough money in savings to cover, set checking to zero and subtract difference from savings
		else {
			checking_total = 0;
			savings_total -= diff;
		}

		// append new balances to the DOM and change color of savings to red if it reaches zero
		$('#checking_balance').html('$' + checking_total.toFixed(2));
		$('#savings_balance').html('$' + savings_total.toFixed(2));
		if (savings_total === 0) $('#account2').attr('class', 'zero');
	};		
});