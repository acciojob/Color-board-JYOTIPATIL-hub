//your JS code here. If required.
 const squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                // Change background color on hover
                square.style.backgroundColor = '#00f'; // New hover color
                // Revert back to initial color after 1 second
                setTimeout(() => {
                    square.style.backgroundColor = '#ccc'; // Initial color
                }, 1000);
            });
        });