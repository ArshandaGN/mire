// Set the start date (Waktu Indonesia Barat)
const startDate = new Date('2024-02-04T00:00:00+07:00');

// Function to calculate the countdown
function updateCountdown() {
    const now = new Date(); // Current time
    const nowWIB = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })); // Convert to WIB
    let diff = nowWIB - startDate; // Difference in milliseconds

    if (diff < 0) {
        diff = 0; // If the date is in the future, set countdown to 0
    }

    // Calculate months, days, hours, minutes, and seconds
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Average days in a month
    diff %= (1000 * 60 * 60 * 24 * 30.44);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    // Update the HTML
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Navigate to the previous page
function goToPreviousPage() {
    window.location.href = 'yes.html'; // Replace with your previous page URL
}

// Navigate to the next page
function goToNextPage() {
    window.location.href = 'memories.html'; // Replace with your next page URL
}
