function checkRegisterForm() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass-2').value;
    var err = document.getElementById("test-error");
    var allow_user = /^[a-zA-Z0-9]{3,10}$/;
    var allow_pass = /[a-zA-Z0-9!@#$%^&*()|\\<>?/.]{6,20}/;
    if (allow_user.test(user) == false) {
        err.innerText = '用户名必须是3-10位英文字母或数字';
        return false;
    }
    if (!allow_pass.test(pass) || !allow_pass.test(pass2)) {
        err.innerText = "密码必须是6-20位数字或字符串或特殊字符";
        return false;
    }

    if (pass != pass2) {
        err.innerText = "两次输入密码不同";
        return false;
    }
    return true;
}