
        // Time-based greeting adjusted for WAT (UTC+1)
        function updateGreeting() {
            const hour = new Date().getHours(); // Client-side time
            let greeting;
            if (hour < 12) {
                greeting = "Good Morning!";
            } else if (hour < 18) {
                greeting = "Good Afternoon!";
            } else {
                greeting = "Good Evening!";
            }
            document.getElementById('greeting').textContent = greeting + " I'm Joseph Abah.";
        }
        updateGreeting();

        // Toggle section visibility
        function showSection(sectionId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        }

        // Dark/Light mode toggle
        const body = document.body;
        const toggleButton = document.getElementById('mode-toggle');
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                toggleButton.textContent = 'Switch to Light Mode';
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                toggleButton.textContent = 'Switch to Dark Mode';
            }
        });