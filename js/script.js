/**
 * Script chính - Trang chủ, Sản phẩm, Chi tiết, Giỏ hàng
 */
$(document).ready(function() {
    // ========== INIT ==========
    if (typeof updateCartBadge === 'function') updateCartBadge();
    if (typeof updateAuthUI === 'function') updateAuthUI();

    // ========== HEADER ==========
    let lastScrollTop = 0;
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            $('header').addClass('header-hidden');
        } else {
            $('header').removeClass('header-hidden');
        }
        lastScrollTop = scrollTop;
    });

    // ========== SEARCH (ĐÃ CẬP NHẬT LOGIC TÌM KIẾM) ==========
    const $inputSearch = $('#inputSearch');
    const $searchResults = $('#searchResults');

    $(document).on('click', '#btnOpenSearch', function(e) {
        e.preventDefault();
        $('#searchDropdown, #searchOverlay').addClass('active');
        setTimeout(() => $inputSearch.focus(), 400);
    });

    $(document).on('click', '#btnCloseSearch, #searchOverlay', function() {
        $('#searchDropdown, #searchOverlay').removeClass('active');
        // Xóa trắng ô tìm kiếm và ẩn kết quả khi đóng
        $inputSearch.val('');
        $searchResults.hide().empty();
    });

    // Lắng nghe sự kiện gõ phím để tìm kiếm nhanh
    $inputSearch.on('input', function() {
        const keyword = $(this).val().toLowerCase().trim();
        
        if (keyword.length > 0) {
            // Lọc sản phẩm từ biến danhSachSanPham (trong data.js)
            const results = danhSachSanPham.filter(sp => 
                sp.ten.toLowerCase().includes(keyword)
            );
            renderSearchPreview(results);
        } else {
            $searchResults.hide().empty();
        }
    });

    // Hàm hiển thị kết quả tìm kiếm kèm xử lý đường dẫn ảnh/link
    function renderSearchPreview(list) {
        if (list.length === 0) {
            $searchResults.html('<div class="list-group-item text-muted small">Không tìm thấy sản phẩm...</div>').show();
            return;
        }

        // Tự động nhận diện folder để sửa lỗi 404
        const isSubPage = window.location.pathname.includes('/html/');
        const pathPrefix = isSubPage ? '../' : ''; 
        const htmlPrefix = isSubPage ? '' : 'html/';

        // Hiển thị tối đa 5 sản phẩm
        const html = list.slice(0, 5).map(sp => `
            <a href="${htmlPrefix}chi-tiet.html?id=${sp.id}" class="list-group-item list-group-item-action d-flex align-items-center border-0 py-2">
                <img src="${pathPrefix}${sp.album[0]}" alt="${sp.ten}" style="width: 45px; height: 45px; object-fit: cover;" class="rounded me-3 border">
                <div style="flex: 1; min-width: 0;">
                    <p class="mb-0 small fw-bold text-dark text-truncate">${sp.ten}</p>
                    <small class="text-danger">${sp.gia.toLocaleString('vi-VN')}đ</small>
                </div>
            </a>
        `).join('');

        $searchResults.html(html).show();
    }

    // ========== AUTH ==========
    $(document).on('click', '.auth-logout-btn', function(e) {
        e.preventDefault();
        if (typeof logout === 'function') logout();
        if (typeof updateAuthUI === 'function') updateAuthUI();
    });

    // ========== BANNER (SỬA LẠI CƠ BẢN THEO YÊU CẦU) ==========
    const carouselElement = document.querySelector('#mainBanner');
    if (carouselElement) {
        // Khởi tạo Bootstrap Carousel cơ bản (sử dụng nút bấm Trái/Phải trong HTML)
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel',
            touch: true // Vẫn cho phép vuốt trên điện thoại
        });
    }

    // ========== SẢN PHẨM (Hàng mới & Sản phẩm) ==========
    function renderProduct(sp, index) {
        let hiddenClass = index >= 8 ? "d-none product-hidden" : "";
        return `
            <div class="col-6 col-lg-3 ${hiddenClass}">
                <div class="product-item">
                    <a href="chi-tiet.html?id=${sp.id}" class="text-decoration-none">
                        <div class="product-img-hover mb-2 position-relative overflow-hidden user-select-none">
                            <img src="${sp.album[0]}" class="img-fluid w-100" alt="${sp.ten}">
                            <img src="${sp.album[1] ? sp.album[1] : sp.album[0]}" 
                                 class="img-fluid w-100 img-secondary position-absolute top-0 start-0 h-100" alt="${sp.ten}">
                        </div>
                        <div class="product-info">
                            <p class="product-name mb-1 text-dark text-truncate">${sp.ten}</p>
                            <span class="product-price fw-bold text-dark">${sp.gia.toLocaleString('vi-VN')}đ</span>
                        </div>
                    </a>
                </div>
            </div>`;
    }

    const khuVucHangMoi = $('#danh-sach-hang-moi');
    const khuVucTatCa = $('#khu-vuc-tat-ca-san-pham');

    if (khuVucHangMoi.length > 0) {
        const dsMoi = danhSachSanPham.filter(sp => sp.isNew === true);
        let html = "";
        dsMoi.forEach((sp, index) => { html += renderProduct(sp, index); });
        khuVucHangMoi.html(html);
        if (dsMoi.length <= 8) $('#loadMoreContainer').hide();
    }

    if (khuVucTatCa.length > 0) {
        let html = "";
        danhSachSanPham.forEach((sp, index) => { html += renderProduct(sp, index); });
        khuVucTatCa.html(html);
        if (danhSachSanPham.length <= 8) $('#loadMoreContainer').hide();
    }

    $('#btnLoadMore').click(function() {
        $('.product-hidden').removeClass('d-none').hide().fadeIn(500);
        $('#loadMoreContainer').fadeOut();
    });

    // ========== CHI TIẾT SẢN PHẨM ==========
    const urlParams = new URLSearchParams(location.search);
    const idSanPham = urlParams.get('id');

    if (idSanPham) {
        const sp = danhSachSanPham.find(item => item.id === idSanPham);
        if (sp) {
            $('#ten-san-pham').text(sp.ten);
            $('#gia-san-pham').text(sp.gia.toLocaleString('vi-VN') + 'đ');
            $('#mau-san-pham').text(sp.mau);
            $('#mota-san-pham').text(sp.mota);

            let htmlAlbum = "";
            sp.album.forEach((imgUrl, index) => {
                htmlAlbum += `<div class="col-6 mb-3"><img src="${imgUrl}" class="img-fluid w-100 border lightbox-trigger" alt="${sp.ten}" data-index="${index}"></div>`;
            });
            $('#khu-vuc-hinh-anh').html(htmlAlbum);
            document.title = sp.ten + " | Vascara";

            let currentAlbum = sp.album;
            let currentIndex = 0;
            const $lightbox = $('#imageLightbox');
            const $lightboxImg = $('#lightboxImage');

            function showLightbox(index) {
                currentIndex = index;
                $lightboxImg.attr('src', currentAlbum[currentIndex]).attr('alt', sp.ten);
                $lightbox.addClass('active');
            }

            function hideLightbox() {
                $lightbox.removeClass('active');
            }

            $(document).on('click', '#khu-vuc-hinh-anh .lightbox-trigger', function() {
                let idx = parseInt($(this).attr('data-index'));
                showLightbox(idx);
            });

            $('.lightbox-close').on('click', hideLightbox);
            $('#imageLightbox').on('click', function(e) {
                if (e.target === this) hideLightbox();
            });

            $('.lightbox-prev').on('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
                $lightboxImg.attr('src', currentAlbum[currentIndex]);
            });

            $('.lightbox-next').on('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % currentAlbum.length;
                $lightboxImg.attr('src', currentAlbum[currentIndex]);
            });

            $(document).on('keydown', function(e) {
                if (!$lightbox.hasClass('active')) return;
                if (e.key === 'Escape') hideLightbox();
                if (e.key === 'ArrowLeft') $('.lightbox-prev').click();
                if (e.key === 'ArrowRight') $('.lightbox-next').click();
            });

            $('#btnAddToCart').off('click').on('click', function() {
                if (typeof isLoggedIn === 'function' && !isLoggedIn()) {
                    window.location.href = 'dang-nhap.html?return=' + encodeURIComponent(window.location.href);
                    return;
                }
                if (typeof addToCart === 'function' && addToCart(sp)) {
                    alert('Đã thêm sản phẩm vào giỏ hàng!');
                }
            });
        } else if ($('#khu-vuc-hinh-anh').length > 0) {
            $('main').html('<div class="container text-center py-5"><h3>Sản phẩm không tồn tại!</h3><a href="index.html" class="btn btn-dark mt-3">Quay lại trang chủ</a></div>');
        }
    }

    // ========== GIỎ HÀNG ==========
    function formatMoney(num) { return new Intl.NumberFormat('vi-VN').format(num) + 'đ'; }

    const $cartContainer = $('.cart-container');
    if ($cartContainer.length > 0 && typeof getCart === 'function') {
        renderCartPage();
    }

    function renderCartPage() {
        const cart = getCart();
        const $tbody = $cartContainer.find('tbody');
        const $cartSection = $cartContainer.closest('.row');
        const $summaryBox = $cartSection.find('.col-lg-4 .p-4.border');

        if (cart.length === 0) {
            $cartContainer.find('.table-responsive').addClass('d-none');
            $cartContainer.find('.cart-empty-state').removeClass('d-none');
            $summaryBox.addClass('d-none');
            return;
        }

        $cartContainer.find('.table-responsive').removeClass('d-none');
        $cartContainer.find('.cart-empty-state').addClass('d-none');
        $summaryBox.removeClass('d-none');

        let html = '';
        cart.forEach(item => {
            const subtotal = item.gia * item.qty;
            html += `
                <tr class="cart-item" data-id="${item.id}">
                    <td class="py-4">
                        <div class="d-flex align-items-center">
                            <div class="cart-img-wrapper me-3">
                                <img src="${item.img}" class="img-fluid" alt="${item.ten}">
                            </div>
                            <div>
                                <p class="mb-1 fw-bold product-name-cart">${item.ten}</p>
                                <p class="mb-1 text-secondary small">Màu sắc: ${item.mau}</p>
                                <p class="mb-1 small">Giá: <span class="price-val" data-price="${item.gia}">${item.gia.toLocaleString('vi-VN')}</span>đ</p>
                                <a href="javascript:void(0)" class="text-decoration-underline text-dark small remove-item">Xóa</a>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        <div class="quantity-group d-flex justify-content-center border">
                            <button class="btn btn-sm border-0 shadow-none px-3 btn-minus">-</button>
                            <input type="text" class="form-control form-control-sm border-0 text-center bg-transparent input-qty" value="${item.qty}" style="width: 40px;" readonly>
                            <button class="btn btn-sm border-0 shadow-none px-3 btn-plus">+</button>
                        </div>
                    </td>
                    <td class="text-end fw-bold">
                        <span class="subtotal-val">${formatMoney(subtotal)}</span>
                    </td>
                </tr>`;
        });
        $tbody.html(html);
        updateCartTotal();
    }

    function updateCartTotal() {
        if ($('.cart-item').length === 0) return;
        let total = 0;
        $('.cart-item').each(function() {
            let price = parseInt($(this).find('.price-val').attr('data-price'));
            let qty = parseInt($(this).find('.input-qty').val());
            let subtotal = price * qty;
            $(this).find('.subtotal-val').text(formatMoney(subtotal));
            total += subtotal;
        });
        $('#total-cart, .summary-subtotal, .summary-total').text(formatMoney(total));
    }

    $(document).on('click', '.btn-plus', function() {
        let input = $(this).siblings('.input-qty');
        let id = $(this).closest('.cart-item').attr('data-id');
        let newVal = parseInt(input.val()) + 1;
        input.val(newVal);
        updateCartTotal();
        if (typeof getCart === 'function' && typeof saveCart === 'function') {
            const cart = getCart();
            const item = cart.find(x => x.id === id);
            if (item) {
                item.qty = newVal;
                saveCart(cart);
            }
        }
    });

    $(document).on('click', '.btn-minus', function() {
        let input = $(this).siblings('.input-qty');
        let val = parseInt(input.val());
        let id = $(this).closest('.cart-item').attr('data-id');
        if (val > 1) {
            let newVal = val - 1;
            input.val(newVal);
            updateCartTotal();
            if (typeof getCart === 'function' && typeof saveCart === 'function') {
                const cart = getCart();
                const item = cart.find(x => x.id === id);
                if (item) {
                    item.qty = newVal;
                    saveCart(cart);
                }
            }
        }
    });

    $(document).on('click', '.remove-item', function(e) {
        e.preventDefault();
        const id = $(this).closest('.cart-item').attr('data-id');
        if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            if (typeof removeFromCart === 'function') removeFromCart(id);
            $(this).closest('.cart-item').fadeOut(300, function() {
                $(this).remove();
                if ($('.cart-item').length === 0 && $cartContainer.length > 0) {
                    renderCartPage();
                } else {
                    updateCartTotal();
                }
            });
        }
    });
});