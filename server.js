<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Test Captcha</title>
<style>
  /* Center the box on the page */
  html, body {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff; /* plain white */
  }

  /* Outline box */
  .captcha-container {
    width: 300px;      /* fixed width */
    height: 100px;     /* fixed height */
    border: 2px solid #000; /* simple black outline */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
</head>
<body>

<div class="captcha-container">
    <!-- Placeholder for reCAPTCHA -->
    <span id="placeholder-text">Captcha goes here</span>
</div>

</body>
</html>