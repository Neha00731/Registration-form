document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // First Name Validation
    const firstName = document.getElementById("firstName").value.trim();
    if (!firstName) {
        alert("First Name is required.");
        return;
    }

    // Last Name Validation
    const lastName = document.getElementById("lastName").value.trim();
    if (!lastName) {
        alert("Last Name is required.");
        return;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid Email format.");
        return;
    }

    // Mobile Number Validation
    const mobile = document.getElementById("mobile").value.trim();
    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile Number must start with 6, 7, 8, or 9 and be 10 digits long.");
        return;
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Gender is required.");
        return;
    }

    // Date of Birth Validation
    const dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Date of Birth is required.");
        return;
    }
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    // Technology Validation
    const technologies = document.querySelectorAll('input[name="technology"]:checked');
    if (technologies.length === 0) {
        alert("Please select at least one technology.");
        return;
    }

    // Password Validation
    const password = document.getElementById("password").value.trim();
    const passwordPattern = /^(?=.[A-Z])(?=.\d).{8,15}$/;
    if (!passwordPattern.test(password)) {
        alert(
            "Password must be 8-15 characters long, contain at least one uppercase letter, and one number."
        );
        return;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Final Submission Alert
    const title = gender.value === "Mr." ? "Mr." : "Miss";
    alert(`${title} ${firstName}, Your Application is submitted.`);
})