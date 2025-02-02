// Set the start date (4 Februari 2024, 00:00 WIB)
const startDate = new Date('2024-02-04T00:00:00+07:00');

// Function to calculate the countdown
function updateCountdown() {
    const now = new Date(); // Current time
    const nowWIB = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })); // Convert to WIB

    let start = new Date(startDate);
    let end = new Date(nowWIB);

    // Calculate months difference
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    // Adjust start date to the correct month
    start.setMonth(start.getMonth() + months);

    // If end date is before adjusted start, reduce 1 month
    if (end < start) {
        months--;
        start.setMonth(start.getMonth() - 1);
    }

    // Calculate remaining time after months adjustment
    let days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
    start.setDate(start.getDate() + days);

    let hours = Math.floor((end - start) / (1000 * 60 * 60));
    start.setHours(start.getHours() + hours);

    let minutes = Math.floor((end - start) / (1000 * 60));
    start.setMinutes(start.getMinutes() + minutes);

    let seconds = Math.floor((end - start) / 1000);
    
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
    window.location.href = 'yes.html';
}

// Navigate to the next page
function goToNextPage() {
    window.location.href = 'memories.html';
}
