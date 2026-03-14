jsxs("div", { className: "content-area", children: [jsxs("h2", { children: ["Welcome to the ", jsxs("span", { style: { color: "#9c27b0" }, children: ["Login/Register"] })] }), jsxs("form", { className: "register-form", children: [jsxs("label", { htmlFor: "username", children: ["Username:", jsxs("input", { type: "text", id: "username", name: "username" })] }), jsxs("label", { htmlFor: "password", children: ["Password:", jsxs("input", { type: "password", id: "password", name: "password" })] }), jsxs("button", { type: "submit", children: ["Login"] })] })] });
if (document.getElementById("register-form")) {
    document.getElementById("register-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        alert(`Registered with Username: ${username} and Password: ${password}`);
    });
}

if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        alert(`Logged in with Username: ${username} and Password: ${password}`);
    });
}

