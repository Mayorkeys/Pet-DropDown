
     function togglePassword(inputId, eyeId) {
      // Get the input field and eye icon
      const input = document.getElementById(inputId);
      const eye = document.getElementById(eyeId);

      // Check if the input is currently a password type
      if (input.type === 'password') {
        // Show password: change input type to text
        input.type = 'text';
        // Change eye icon to slashed eye (password visible)
        eye.textContent = '👁️‍🗨️';
      } else {
        // Hide password: change input type back to password
        input.type = 'password';
        // Change eye icon to regular eye (password hidden)
        eye.textContent = '👁️';
      }
    }
