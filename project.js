
document.addEventListener('DOMContentLoaded', function() {
    const confirmOrderButton = document.getElementById('confirmButton');

    confirmOrderButton.addEventListener('click', function(event) {
        event.preventDefault();

        const addressInput = document.querySelector('input[name="address"]');
        const phoneNumberInput = document.querySelector('input[name="number"]');
        const orderInput = document.querySelector('input[name="order"]');
        const numMealsInput = document.querySelector('input[name="number-of-meals"]');

        const address = addressInput.value.trim();
        const phoneNumber = phoneNumberInput.value.trim();
        const order = orderInput.value.trim();
        const numMeals = numMealsInput.value.trim();

        if (address === '' || phoneNumber === '' || order === '' || numMeals === '') {
            alert("Please fill in all required fields.");
        } else {
            alert("Your order has been confirmed! We will prepare your delicious meal.");
            
        }
    });
});

