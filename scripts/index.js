function checkPassword() {
    // 要求用户输入密码
    const password = prompt("Please enter the password to access Internal Use:\n请输入密码以访问内部使用页面:");

    // 设置正确的密码
    const correctPassword = "intelligeneer123"; // 你可以自定义此密码

    // 检查密码是否正确
    if (password === correctPassword) {
        // 如果密码正确，跳转到 Internal_Use.html 页面
        window.location.href = 'http://localhost:63342/Product-introduction/pages/Internal_Use.html';
    } else if (password !== null) {
        // 如果密码不正确且用户输入了内容，则提示错误信息
        alert("Incorrect password. Please try again.");
    }
}