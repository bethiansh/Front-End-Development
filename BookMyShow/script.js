document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat:not(.occupied)');
    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const bookNowButton = document.getElementById('bookNow');
    const thankYouMessage = document.getElementById('thank-you-message');
    const modal = document.getElementById('thank-you-modal');
    const closeButton = document.querySelector('.close-button');

    function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedSeatsCount = selectedSeats.length;
        const totalPrice = Array.from(selectedSeats).reduce((acc, seat) => {
            return acc + parseInt(seat.dataset.price);
        }, 0);

        count.innerText = selectedSeatsCount;
        total.innerText = totalPrice;
    }

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('occupied')) {
                seat.classList.toggle('selected');
                updateSelectedCount();
            }
        });
    });

    bookNowButton.addEventListener('click', () => {
        const selectedSeatsCount = count.innerText;
        const totalPrice = total.innerText;

        if (selectedSeatsCount > 0) {
            thankYouMessage.textContent = `🎉 Congratulations! You have successfully booked ${selectedSeatsCount} seat(s) for Rs.${totalPrice}.`;
            modal.style.display = 'block';
        } else {
            alert('No seats selected. Please select seats before booking.');
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
