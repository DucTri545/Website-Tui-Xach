/**
 * Trang Đăng nhập / Đăng ký
 */
$(document).ready(function() {
    if (typeof updateCartBadge === 'function') updateCartBadge();
    if (typeof updateAuthUI === 'function') updateAuthUI();

    // Search
    $(document).on('click', '#btnOpenSearch', function(e) {
        e.preventDefault();
        $('#searchDropdown, #searchOverlay').addClass('active');
    });
    $(document).on('click', '#btnCloseSearch, #searchOverlay', function() {
        $('#searchDropdown, #searchOverlay').removeClass('active');
    });

    // Chuyển tab Đăng nhập <-> Đăng ký
    $(document).on('click', '[data-auth-tab]', function(e) {
        e.preventDefault();
        const target = $(this).attr('data-auth-tab');
        bootstrap.Tab.getOrCreateInstance($('[href="' + target + '"]')[0]).show();
    });

    // Toggle hiện/ẩn mật khẩu
    $(document).on('click', '.btn-toggle-pwd', function() {
        const $input = $('#' + $(this).attr('data-target'));
        const $icon = $(this).find('i');
        const isPass = $input.attr('type') === 'password';
        $input.attr('type', isPass ? 'text' : 'password');
        $icon.toggleClass('bi-eye-slash bi-eye');
    });

    // Form Đăng nhập
    $('#formLogin').on('submit', function(e) {
        e.preventDefault();
        const phone = $('#loginPhone').val();
        const password = $('#loginPassword').val();
        if (typeof login !== 'function') return;
        const result = login(phone, password);
        if (result.ok) {
            const returnUrl = new URLSearchParams(location.search).get('return') || '../index.html';
            location.href = returnUrl;
        } else {
            alert(result.msg || 'Đăng nhập thất bại.');
        }
    });

    // Form Đăng ký
    $('#formRegister').on('submit', function(e) {
        e.preventDefault();
        const phone = $('#regPhone').val();
        const name = $('#regName').val();
        const password = $('#regPassword').val();
        if (!$('#regAgree').is(':checked')) {
            alert('Vui lòng đồng ý với Điều khoản & Điều kiện và Chính sách Quyền riêng tư.');
            return;
        }
        if (typeof register !== 'function') return;
        const result = register(phone, name, password);
        if (result.ok) {
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            bootstrap.Tab.getOrCreateInstance($('[href="#tabLogin"]')[0]).show();
            $('#formRegister')[0].reset();
        } else {
            alert(result.msg || 'Đăng ký thất bại.');
        }
    });

    $(document).on('click', '.auth-logout-btn', function(e) {
        e.preventDefault();
        if (typeof logout === 'function') logout();
        if (typeof updateAuthUI === 'function') updateAuthUI();
    });

    if (new URLSearchParams(location.search).get('return')) {
        bootstrap.Tab.getOrCreateInstance($('[href="#tabLogin"]')[0]).show();
    }
});