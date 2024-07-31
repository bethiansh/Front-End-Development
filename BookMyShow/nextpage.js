document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmationModal').style.display = 'block';
    document.body.style.background = '#f0f0f0'; // Change background color
    generatePaymentLink();
});

function generatePaymentLink() {
    var upiId = '8887646909@paytm'; // Your UPI ID
    var amount = '100'; // Amount to be paid
    var message = 'Payment for movie ticket'; // Payment message
    var paymentLink = 'upi://' + upiId + '?amount=' + amount + '&amp;cu=INR&amp;tn=' + encodeURIComponent(message);
    openPaymentLink(paymentLink);
}

function openPaymentLink(paymentLink) {
    var a = document.createElement('a');
    a.href = paymentLink;
    a.target = '_blank'; // Open link in new tab
    a.click();
}

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('confirmationModal').style.display = 'none';
    document.body.style.background = ''; // Reset background color
});

window.onclick = function (event) {
    if (event.target == document.getElementById('confirmationModal')) {
        document.getElementById('confirmationModal').style.display = 'none';
        document.body.style.background = ''; // Reset background color
    }
}
