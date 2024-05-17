// Get the form element
var feedbackForm = document.getElementById("feedbackForm");

// Add event listener for form submission
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    console.log("Form submitted!"); // Check if this message appears in the console
    
    // Display the modal
    showModal();
});

// Function to display the modal
function showModal() {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Thank you for your feedback! We appreciate it.</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when close button is clicked
    var closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        document.body.removeChild(modal);
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            document.body.removeChild(modal);
        }
    });
}
