<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G4S Communications</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div id="logo-container">
            <img src="logo.png" alt="G4S Logo" id="logo">
            <h1>G4S Communications</h1>
        </div>
        <div id="language-selector">
            <label for="language">Choose Language:</label>
            <select id="language" name="language">
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
                <!-- Ajoutez d'autres langues ici -->
            </select>
        </div>
    </header>
    <main>
        <section id="login-section">
            <form id="login-form">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Login</button>
            </form>
        </section>
        <section id="signup-section">
            <form id="signup-form">
                <label for="new-email">Email:</label>
                <input type="email" id="new-email" name="new-email" required>
                
                <label for="new-password">Password:</label>
                <input type="password" id="new-password" name="new-password" required>
                
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
                
                <button type="submit">Create Account</button>
            </form>
        </section>
    </main>
    <script src="scripts.js"></script>
</body>
</html>