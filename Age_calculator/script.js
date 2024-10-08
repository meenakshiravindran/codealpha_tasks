  function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const result = document.getElementById('result');
  
    // Clear the result message
    result.textContent = '';
  
    // Input validation
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      result.textContent = "Please fill in all fields.";
      return;
    }
  
    if (day < 1 || day > 31) {
      result.textContent = "Day must be between 1 and 31.";
      return;
    }
  
    if (month < 1 || month > 12) {
      result.textContent = "Month must be between 1 and 12.";
      return;
    }
  
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
      result.textContent = `Year cannot be in the future. It must be less than or equal to ${currentYear}.`;
      return;
    }
  
    // Check if the entered date is valid
    const birthDate = new Date(year, month - 1, day);
    if (
      birthDate.getDate() !== day ||
      birthDate.getMonth() + 1 !== month ||
      birthDate.getFullYear() !== year
    ) {
      result.textContent = "Invalid date. Please enter a correct date.";
      return;
    }
  
    // Calculate age
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    // Adjust if the birth date hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    if (age < 0) {
      result.textContent = "Invalid birth date. The date is in the future.";
    } else {
      result.textContent = `You are ${age} years old.`;
    }
  }
  