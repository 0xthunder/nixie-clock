        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

            const digitContainers = document.querySelectorAll('.nixie__digit-container');

            // Update hours
            digitContainers[0].querySelector('.nixie__digit').textContent = hours[0];
            digitContainers[1].querySelector('.nixie__digit').textContent = hours[1];

            // Update minutes
            digitContainers[3].querySelector('.nixie__digit').textContent = minutes[0];
            digitContainers[4].querySelector('.nixie__digit').textContent = minutes[1];

            // Update seconds
            digitContainers[6].querySelector('.nixie__digit').textContent = seconds[0];
            digitContainers[7].querySelector('.nixie__digit').textContent = seconds[1];

            // Update milliseconds
            digitContainers[9].querySelector('.nixie__digit').textContent = milliseconds[0];
            digitContainers[10].querySelector('.nixie__digit').textContent = milliseconds[1];
            digitContainers[11].querySelector('.nixie__digit').textContent = milliseconds[2];
        }

        setInterval(updateClock, 1); // Update every millisecond
        updateClock(); // Initial call to set the time immediately
