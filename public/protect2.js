(function() {
  async function checkPassword() {
    let granted = false;
    while (!granted) {
      const input = prompt("🔒 Enter password to view this page:");
      if (input === null) {
        document.body.innerHTML = "<h2>❌ Access denied</h2>";
        return;
      }

      try {
        const res = await fetch("https://your-vercel-app.vercel.app/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: input })
        });

        if (res.ok) {
          granted = true;
          console.log("✅ Access granted");
        } else {
          alert("Wrong password, try again.");
        }
      } catch (err) {
        console.error("Error contacting server:", err);
        alert("Server error. Try again later.");
        return;
      }
    }
  }

  // Run check immediately
  checkPassword();
})();
