/**
 * Logic đăng nhập / đăng ký - lưu trong localStorage (demo, không có backend)
 * SĐT: 10 số | Mật khẩu: ký tự hoa đầu, chữ thường + số, tối thiểu 1 ký tự đặc biệt (@, ., ...)
 */
const AUTH_KEY = 'vascara_user';
const USERS_KEY = 'vascara_users';

function getUsers() {
    try {
        const data = localStorage.getItem(USERS_KEY);
        return data ? JSON.parse(data) : {};
    } catch (e) {
        return {};
    }
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function validatePhone(phone) {
    const digits = String(phone).replace(/\D/g, '');
    return digits.length === 10;
}

function validatePassword(pwd) {
    if (!pwd || pwd.length < 6) return false;
    const hasUpperFirst = /^[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[@.$#!%*?&_\-]/.test(pwd);
    return hasUpperFirst && hasLower && hasNumber && hasSpecial;
}

function getPhoneDigits(phone) {
    return String(phone).replace(/\D/g, '');
}

function isLoggedIn() {
    try {
        const data = localStorage.getItem(AUTH_KEY);
        return !!data && !!JSON.parse(data);
    } catch (e) {
        return false;
    }
}

function getCurrentUser() {
    try {
        const data = localStorage.getItem(AUTH_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}

function register(phone, name, password) {
    const digits = getPhoneDigits(phone);
    if (!validatePhone(digits)) return { ok: false, msg: 'Số điện thoại phải đúng 10 số.' };
    if (!validatePassword(password)) return { ok: false, msg: 'Mật khẩu: ký tự hoa đầu, chữ thường, số và ít nhất 1 ký tự đặc biệt (@, ., ...). Ví dụ: Abc123@' };
    const users = getUsers();
    if (users[digits]) return { ok: false, msg: 'Số điện thoại đã được đăng ký.' };
    users[digits] = { phone: digits, name: (name || '').trim(), password: password };
    saveUsers(users);
    return { ok: true };
}

function login(phone, password) {
    const digits = getPhoneDigits(phone);
    if (!validatePhone(digits)) return { ok: false, msg: 'Số điện thoại phải đúng 10 số.' };
    const users = getUsers();
    const user = users[digits];
    if (!user || user.password !== password) return { ok: false, msg: 'Số điện thoại hoặc mật khẩu không đúng.' };
    const session = { account: digits, name: user.name, loginAt: Date.now() };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { ok: true };
}

function logout() {
    localStorage.removeItem(AUTH_KEY);
}

function updateAuthUI() {
    if (typeof isLoggedIn !== 'function') return;
    const loggedIn = isLoggedIn();
    const user = getCurrentUser();
    $('.auth-login-link').toggle(!loggedIn);
    $('.auth-logged-in').toggleClass('d-none', !loggedIn).addClass('d-flex');
    $('.auth-user-name').text(user ? user.account : '');
}