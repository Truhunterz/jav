 function resetForm() {
            // Add your save logic here
            alert('Form saved!');
        }

        function clearForm() {
            // Clear all input values and textareas
            document.querySelectorAll('input[type="text"], textarea').forEach(element => {
                element.value = '';
            });

            // Uncheck radio buttons
            document.querySelectorAll('input[type="radio"]').forEach(element => {
                element.checked = false;
            });

            // Reset dropdown
            document.getElementById('State').selectedIndex = 0;

            alert('Form cleared!');
        }