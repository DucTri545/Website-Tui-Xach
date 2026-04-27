const KEY_NGUOI_DUNG = "nguoi_dung";
const KEY_DANH_SACH_NGUOI_DUNG = "danh_sach_nguoi_dung";
const KEY_GIO_HANG = "gio_hang";
const KEY_LICH_SU_DON_HANG = "lich_su_don_hang";

const KEY_NGUOI_DUNG_CU = "ductri_nguoi_dung";
const KEY_DANH_SACH_NGUOI_DUNG_CU = "ductri_danh_sach_nguoi_dung";
const KHOA_GIO_HANG_CU = "ductri_gio_hang";
const KHOA_LICH_SU_DON_HANG_CU = "ductri_lich_su_don_hang";

// ===== DỮ LIỆU SẢN PHẨM =====
const danhSachSanPham = [
    { id: "sp01", ten: "Túi đeo vai hình thang đơn sắc", gia: 1225000, album: ["img/tui-deo-vai-hinh-thang-don-sac-1.jpg", "img/tui-deo-vai-hinh-thang-don-sac-2.jpg"], mau: "Trắng", laHangMoi: true, moTa: "Chất liệu da tổng hợp cao cấp, thiết kế hình thang đơn sắc thanh lịch." },
    { id: "sp02", ten: "Túi đeo vai da thật phối khoá xoay", gia: 2245000, album: ["img/tui-deo-vai-nhan-khoa-xoay-kim-loai-1.jpg", "img/tui-deo-vai-nhan-khoa-xoay-kim-loai-2.jpg"], mau: "Đỏ", laHangMoi: true, moTa: "Dòng sản phẩm da thật cao cấp, điểm nhấn là khóa xoay kim loại sang trọng." },
    { id: "sp03", ten: "Túi mini xách tay nhấn charm hoa hồng", gia: 1175000, album: ["img/tui-mini-xach-tay-nhan-charm-hoa-hong-1.jpg", "img/tui-mini-xach-tay-nhan-charm-hoa-hong-2.jpg"], mau: "Đỏ", laHangMoi: true, moTa: "Thiết kế mini trẻ trung, đi kèm charm hoa hồng nữ tính." },
    { id: "sp04", ten: "Túi xách tay vân cá sấu nhấn khóa kiểu", gia: 1245000, album: ["img/tui-xach-tay-van-ca-sau-1.jpg", "img/tui-xach-tay-van-ca-sau-2.jpg"], mau: "Đen", laHangMoi: true, moTa: "Họa tiết vân cá sấu thời thượng phối hợp cùng khóa kiểu lạ mắt." },
    { id: "sp05", ten: "Túi baguette nhấn quai phối charm hoa", gia: 1195000, album: ["img/tui-baguette-nhan-quai-phoi-charm-hoa-1.jpg", "img/tui-baguette-nhan-quai-phoi-charm-hoa-2.jpg"], mau: "Tím nhạt", laHangMoi: true, moTa: "Kiểu dáng baguette hiện đại, điểm xuyết charm hoa tinh tế." },
    { id: "sp06", ten: "Túi mini nhấn họa tiết trái tim", gia: 1145000, album: ["img/tui-mini-nhan-hoa-tiet-trai-tim-1.jpg", "img/tui-mini-nhan-hoa-tiet-trai-tim-2.jpg"], mau: "Đỏ", laHangMoi: true, moTa: "Họa tiết trái tim dễ thương, phù hợp cho các buổi dạo phố." },
    { id: "sp07", ten: "Túi pouch đa năng họa tiết trái tim", gia: 235000, album: ["img/tui-pouch-da-nang-hoa-tiet-trai-tim-1.jpg", "img/tui-pouch-da-nang-hoa-tiet-trai-tim-2.jpg"], mau: "Trắng chấm bi đen", laHangMoi: true, moTa: "Kích thước nhỏ gọn, dùng đựng mỹ phẩm hoặc phụ kiện cá nhân." },
    { id: "sp08", ten: "Túi đeo chéo nhấn khóa gài classic", gia: 1245000, album: ["img/tui-deo-cheo-nhan-khoa-gai-1.jpg", "img/tui-deo-cheo-nhan-khoa-gai-2.jpg"], mau: "Đỏ", laHangMoi: true, moTa: "Phong cách cổ điển không bao giờ lỗi mốt, khóa gài chắc chắn." },
    { id: "sp09", ten: "Túi xách nắp gập nhấn khóa cao cấp", gia: 1295000, album: ["img/tui-xach-nap-gap-nhan-khoa-cao-cap-1.jpg", "img/tui-xach-nap-gap-nhan-khoa-cao-cap-2.jpg"], mau: "Kem", laHangMoi: true, moTa: "Chất liệu bền đẹp, nắp gập sang trọng phù hợp đi làm." },
    { id: "sp10", ten: "Túi xách tay nhấn đai khóa sang trọng", gia: 1495000, album: ["img/tui-xach-tay-nhan-dai-khoa-sang-trong-1.jpg", "img/tui-xach-tay-nhan-dai-khoa-sang-trong-2.jpg"], mau: "Đen", laHangMoi: true, moTa: "Điểm nhấn đai khóa độc đáo, tạo nét cá tính cho người sử dụng." },
    { id: "sp11", ten: "Túi xách tay phối túi hộp mini", gia: 1195000, album: ["img/tui-xach-tay-phoi-tui-hop-mini-1.jpg", "img/tui-xach-tay-phoi-tui-hop-mini-2.jpg"], mau: "Đen", laHangMoi: true, moTa: "Sự kết hợp giữa túi lớn và túi nhỏ tiện lợi và thời trang." },
    { id: "sp12", ten: "Túi đeo vai quai đôi đơn sắc", gia: 1145000, album: ["img/tui-deo-vai-quai-doi-don-sac-1.jpg", "img/tui-deo-vai-quai-doi-don-sac-2.jpg"], mau: "Nâu", laHangMoi: true, moTa: "Thiết kế quai đôi chắc chắn, không gian chứa đồ rộng rãi." },
    { id: "sp13", ten: "Túi baguette trang trí charm kim loại", gia: 1245000, album: ["img/tui-baguette-trang-tri-charm-kim-loai-1.jpg", "img/tui-baguette-trang-tri-charm-kim-loai-2.jpg"], mau: "Bạc", laHangMoi: true, moTa: "Charm kim loại sáng bóng, tăng thêm vẻ lôi cuốn cho set đồ." },
    { id: "sp14", ten: "Túi đeo chéo vải nhún điệu đà", gia: 1195000, album: ["img/tui-deo-cheo-vai-nhun-dieu-da-1.jpg", "img/tui-deo-cheo-vai-nhun-dieu-da-2.jpg"], mau: "Đen", laHangMoi: true, moTa: "Chất liệu vải nhún mềm mại, cực kỳ nữ tính cho các nàng thơ." },
    { id: "sp15", ten: "Túi clutch satin xếp li thanh lịch", gia: 1075000, album: ["img/tui-clutch-satin-xep-li-thanh-lich-1.jpg", "img/tui-clutch-satin-xep-li-thanh-lich-2.jpg"], mau: "Đỏ", laHangMoi: true, moTa: "Vải satin bóng bẩy phối xếp li, lựa chọn hoàn hảo cho tiệc đêm." },
    { id: "sp16", ten: "Túi xách quai đôi phong cách giản tiện", gia: 1225000, album: ["img/tui-xach-quai-doi-phong-cach-gian-tien-thanh-lich-1.jpg", "img/tui-xach-quai-doi-phong-cach-gian-tien-thanh-lich-2.jpg"], mau: "Kem", laHangMoi: true, moTa: "Thiết kế tối giản nhưng vẫn giữ được nét thanh lịch cần có." }
];

// ===== DỮ LIỆU TIN TỨC =====
const danhSachTinTuc = [
    { id: "tt01", tieuDe: "DUCTRI STORE ĐỒNG HÀNH CÙNG WHITE ANT TẠI SHANGHAI FASHION WEEK", moTa: "DucTri Store đánh dấu bước tiến mới đồng hành cùng WHITE ANT tại sàn diễn quốc tế Shanghai Fashion Week...", ngay: "Ngày 06 / 04 / 2026", hinh: "img/tin-tuc-4.jpg" },
    { id: "tt02", tieuDe: "5 TRENDSETTERS ĐỊNH HÌNH PHONG CÁCH, DẪN DẮT LÀN SÓNG...", moTa: "Khám phá những gương mặt có sức ảnh hưởng lớn nhất đến xu hướng thời trang trong mùa giải năm nay...", ngay: "Ngày 26 / 03 / 2026", hinh: "img/tin-tuc-5.jpg" },
    { id: "tt03", tieuDe: "DUCTRI STORE XUÂN HÈ 2026: COSMIC FANTASIA – PHÁ VỠ QUỸ ĐẠO", moTa: "Lời mời tín đồ thời trang bước ra khỏi quỹ đạo quen thuộc để thử nghiệm một phiên bản khác của chính mình...", ngay: "Ngày 27 / 02 / 2026", hinh: "img/tin-tuc-6.jpg" },
    { id: "tt04", tieuDe: "SPRING HOLIDAY BAGS: RẠNG RỠ CHO NÀNG DU XUÂN", moTa: "Dù là túi đeo chéo nhỏ gọn hay ví cầm tay thanh lịch, mỗi dáng túi đều mang một nét riêng cho nàng du xuân...", ngay: "Ngày 04 / 02 / 2026", hinh: "img/tin-tuc-1.jpg" },
    { id: "tt05", tieuDe: "XU HƯỚNG GIÀY, TÚI THỐNG TRỊ MÙA XUÂN HÈ 2026", moTa: "Phom dáng nổi bật, chi tiết tinh xảo và tinh thần hiện đại là những gì bạn sẽ thấy trong BST lần này...", ngay: "Ngày 26 / 01 / 2026", hinh: "img/tin-tuc-2.jpg" },
    { id: "tt06", tieuDe: "BÍ QUYẾT MUA SẮM CẬN TẾT ĐỂ PHONG CÁCH THĂNG HOA", moTa: "DucTri Store gợi ý những bí quyết mua sắm thông minh để bạn luôn rạng rỡ trong những ngày đầu năm mới...", ngay: "Ngày 20 / 01 / 2026", hinh: "img/tin-tuc-3.jpg" }
];

// ===== HÀM DÙNG CHUNG =====
function laTrangCon() {
    return window.location.pathname.includes("/html/");
}

function tienToDuongDan() {
    return laTrangCon() ? "../" : "";
}

function dinhDangTien(tien) {
    return Number(tien).toLocaleString("vi-VN") + "đ";
}

function layDuLieuJson(khoa, macDinh) {
    try {
        const duLieu = localStorage.getItem(khoa);
        return duLieu ? JSON.parse(duLieu) : macDinh;
    } catch (e) {
        return macDinh;
    }
}

function luuDuLieuJson(khoa, giaTri) {
    localStorage.setItem(khoa, JSON.stringify(giaTri));
}

function chuyenDuLieuKhoaCu() {
    const danhSachKhoa = [
        { khoaCu: KEY_NGUOI_DUNG_CU, khoaMoi: KEY_NGUOI_DUNG },
        { khoaCu: KEY_DANH_SACH_NGUOI_DUNG_CU, khoaMoi: KEY_DANH_SACH_NGUOI_DUNG },
        { khoaCu: KHOA_GIO_HANG_CU, khoaMoi: KEY_GIO_HANG },
        { khoaCu: KHOA_LICH_SU_DON_HANG_CU, khoaMoi: KEY_LICH_SU_DON_HANG }
    ];

    danhSachKhoa.forEach(({ khoaCu, khoaMoi }) => {
        const duLieuCu = localStorage.getItem(khoaCu);
        const duLieuMoi = localStorage.getItem(khoaMoi);
        if (duLieuCu && !duLieuMoi) {
            localStorage.setItem(khoaMoi, duLieuCu);
        }
        if (duLieuCu) {
            localStorage.removeItem(khoaCu);
        }
    });
}

// ===== ĐĂNG NHẬP =====
function layDanhSachNguoiDung() {
    return layDuLieuJson(KEY_DANH_SACH_NGUOI_DUNG, {});
}

function layNguoiDungDangNhap() {
    return layDuLieuJson(KEY_NGUOI_DUNG, null);
}

function dangNhap(phone, matKhau) {
    const soDienThoai = String(phone || "").replace(/\D/g, "");
    const dsNguoiDung = layDanhSachNguoiDung();
    const nguoiDung = dsNguoiDung[soDienThoai];
    if (!nguoiDung || nguoiDung.matKhau !== matKhau) {
        return { hopLe: false, thongBao: "Sai số điện thoại hoặc mật khẩu." };
    }
    luuDuLieuJson(KEY_NGUOI_DUNG, { soDienThoai: nguoiDung.soDienThoai, hoTen: nguoiDung.hoTen });
    return { hopLe: true };
}

function dangXuat() {
    localStorage.removeItem(KEY_NGUOI_DUNG);
    localStorage.removeItem(KEY_GIO_HANG);
    localStorage.removeItem(KEY_LICH_SU_DON_HANG);
}

function kiemTraDangKy(soDienThoai, hoTen, matKhau) {
    if (!/^\d{10}$/.test(soDienThoai)) return "Số điện thoại phải gồm 10 chữ số.";
    if (!hoTen.trim()) return "Vui lòng nhập họ tên.";
    if (!/^[A-Z].{5,}$/.test(matKhau) || !/[a-z]/.test(matKhau) || !/\d/.test(matKhau) || !/[@.$#!%*?&_\-]/.test(matKhau)) {
        return "Mật khẩu tối thiểu 6 ký tự, bắt đầu bằng chữ hoa, có chữ thường, số và ký tự đặc biệt.";
    }
    return "";
}

function dangKy(soDienThoai, hoTen, matKhau) {
    const dsNguoiDung = layDanhSachNguoiDung();
    if (dsNguoiDung[soDienThoai]) {
        return { hopLe: false, thongBao: "Số điện thoại đã tồn tại." };
    }
    dsNguoiDung[soDienThoai] = { soDienThoai, hoTen: hoTen.trim(), matKhau };
    luuDuLieuJson(KEY_DANH_SACH_NGUOI_DUNG, dsNguoiDung);
    return { hopLe: true };
}

function capNhatTrangThaiDangNhap() {
    const nguoiDung = layNguoiDungDangNhap();
    $(".auth-login-link").toggle(!nguoiDung);
    if (nguoiDung) {
        $(".auth-logged-in").removeClass("d-none");
        $(".auth-user-name").text(nguoiDung.hoTen || nguoiDung.soDienThoai);
    } else {
        $(".auth-logged-in").addClass("d-none");
    }
}

// ===== GIỎ HÀNG =====
function layGioHang() {
    return layDuLieuJson(KEY_GIO_HANG, []);
}

function luuGioHang(gioHang) {
    luuDuLieuJson(KEY_GIO_HANG, gioHang);
    capNhatSoLuongGioHang();
}

function capNhatSoLuongGioHang() {
    const tongSoLuong = layGioHang().reduce((tong, item) => tong + item.soLuong, 0);
    $(".cart-count-badge").text(tongSoLuong);
}

function themVaoGioHang(sanPham, soLuong = 1) {
    const gioHang = layGioHang();
    const viTri = gioHang.findIndex((item) => item.id === sanPham.id);
    if (viTri >= 0) {
        gioHang[viTri].soLuong += soLuong;
    } else {
        gioHang.push({
            id: sanPham.id,
            ten: sanPham.ten,
            gia: sanPham.gia,
            mau: sanPham.mau,
            anh: sanPham.album[0],
            soLuong
        });
    }
    luuGioHang(gioHang);
}

function xoaKhoiGioHang(idSanPham) {
    const gioHangMoi = layGioHang().filter((item) => item.id !== idSanPham);
    luuGioHang(gioHangMoi);
}

// ===== SẢN PHẨM =====
function taoTheSanPham(sanPham, an = false) {
    const tienTo = tienToDuongDan();
    return `
        <div class="col-6 col-lg-3 ${an ? "d-none san-pham-an" : ""}">
            <div class="product-item">
                <a href="${tienTo}html/chi-tiet.html?id=${sanPham.id}" class="text-decoration-none text-dark">
                    <div class="product-img-hover mb-2 position-relative overflow-hidden user-select-none">
                        <img src="${tienTo}${sanPham.album[0]}" class="img-fluid w-100" alt="${sanPham.ten}">
                        <img src="${tienTo}${sanPham.album[1] || sanPham.album[0]}" class="img-fluid w-100 img-secondary position-absolute top-0 start-0 h-100" alt="${sanPham.ten}">
                    </div>
                    <p class="product-name mb-1">${sanPham.ten}</p>
                    <span>${dinhDangTien(sanPham.gia)}</span>
                </a>
            </div>
        </div>
    `;
}

function khoiTaoTimKiem() {
    const oTimKiem = $("#inputSearch");
    const ketQua = $("#searchResults");
    if (!oTimKiem.length) return;

    $(document).on("click", "#btnOpenSearch", function (e) {
        e.preventDefault();
        $("#searchDropdown, #searchOverlay").addClass("active");
        setTimeout(() => oTimKiem.trigger("focus"), 300);
    });

    $(document).on("click", "#btnCloseSearch, #searchOverlay", function () {
        $("#searchDropdown, #searchOverlay").removeClass("active");
        oTimKiem.val("");
        ketQua.hide().empty();
    });

    oTimKiem.on("input", function () {
        const tuKhoa = $(this).val().trim().toLowerCase();
        if (!tuKhoa) {
            ketQua.hide().empty();
            return;
        }
        const dsLoc = danhSachSanPham.filter((sp) => sp.ten.toLowerCase().includes(tuKhoa));
        const tienTo = tienToDuongDan();
        const html = dsLoc.slice(0, 5).map((sp) => `
            <a href="${tienTo}html/chi-tiet.html?id=${sp.id}" class="list-group-item list-group-item-action d-flex align-items-center gap-2">
                <img src="${tienTo}${sp.album[0]}" alt="${sp.ten}" width="42" height="42">
                <div>
                    <p class="mb-0 small fw-bold">${sp.ten}</p>
                    <small class="text-danger">${dinhDangTien(sp.gia)}</small>
                </div>
            </a>
        `).join("");
        ketQua.html(html || "<div class='list-group-item small'>Không tìm thấy sản phẩm.</div>").show();
    });
}

function khoiTaoDanhSachSanPham() {
    const khuVucTatCa = $("#khu-vuc-tat-ca-san-pham");
    const khuVucHangMoi = $("#danh-sach-hang-moi");

    if (khuVucTatCa.length) {
        khuVucTatCa.html(danhSachSanPham.map((sp, index) => taoTheSanPham(sp, index >= 8)).join(""));
    }

    if (khuVucHangMoi.length) {
        const dsHangMoi = danhSachSanPham.filter((sp) => sp.laHangMoi);
        khuVucHangMoi.html(dsHangMoi.map((sp, index) => taoTheSanPham(sp, index >= 8)).join(""));
    }

    $("#btnLoadMore").on("click", function () {
        $(".san-pham-an").removeClass("d-none");
        $("#loadMoreContainer").hide();
    });
}

function khoiTaoChiTietSanPham() {
    if (!$("#khu-vuc-hinh-anh").length) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const sanPham = danhSachSanPham.find((item) => item.id === id);
    if (!sanPham) return;

    const tienTo = tienToDuongDan();
    $("#ten-san-pham").text(sanPham.ten);
    $("#gia-san-pham").text(dinhDangTien(sanPham.gia));
    $("#mau-san-pham").text(sanPham.mau);
    $("#mota-san-pham").text(sanPham.moTa);
    $("#khu-vuc-hinh-anh").html(sanPham.album.map((anh, index) => `
        <div class="col-6 mb-3">
            <img src="${tienTo}${anh}" class="img-fluid w-100 border lightbox-trigger" alt="${sanPham.ten}" data-index="${index}">
        </div>
    `).join(""));

    const nutDong = $(".lightbox-close");
    const nutTruoc = $(".lightbox-prev");
    const nutSau = $(".lightbox-next");
    const khungLightbox = $("#imageLightbox");
    const anhLightbox = $("#lightboxImage");
    let viTriAnh = 0;

    function hienThiLightbox(viTri) {
        viTriAnh = viTri;
        anhLightbox.attr("src", `${tienTo}${sanPham.album[viTriAnh]}`);
        anhLightbox.attr("alt", sanPham.ten);
        khungLightbox.addClass("active");
    }

    function anLightbox() {
        khungLightbox.removeClass("active");
    }

    $(document).off("click", "#khu-vuc-hinh-anh .lightbox-trigger").on("click", "#khu-vuc-hinh-anh .lightbox-trigger", function () {
        const viTri = Number($(this).attr("data-index")) || 0;
        hienThiLightbox(viTri);
    });

    nutDong.off("click").on("click", anLightbox);
    khungLightbox.off("click").on("click", function (e) {
        if (e.target === this) anLightbox();
    });

    nutTruoc.off("click").on("click", function (e) {
        e.stopPropagation();
        viTriAnh = (viTriAnh - 1 + sanPham.album.length) % sanPham.album.length;
        hienThiLightbox(viTriAnh);
    });

    nutSau.off("click").on("click", function (e) {
        e.stopPropagation();
        viTriAnh = (viTriAnh + 1) % sanPham.album.length;
        hienThiLightbox(viTriAnh);
    });

    $(document).off("keydown.lightbox").on("keydown.lightbox", function (e) {
        if (!khungLightbox.hasClass("active")) return;
        if (e.key === "Escape") anLightbox();
        if (e.key === "ArrowLeft") nutTruoc.trigger("click");
        if (e.key === "ArrowRight") nutSau.trigger("click");
    });

    $("#btnAddToCart").on("click", function () {
        const nguoiDung = layNguoiDungDangNhap();
        if (!nguoiDung) {
            window.location.href = `${tienTo}html/dang-nhap.html?return=${encodeURIComponent(window.location.href)}`;
            return;
        }
        themVaoGioHang(sanPham, 1);
        alert("Đã thêm sản phẩm vào giỏ hàng.");
    });
}

function khoiTaoGioHang() {
    const khuVucGioHang = $(".cart-container");
    if (!khuVucGioHang.length) return;

    function veGioHang() {
        const gioHang = layGioHang();
        const bang = khuVucGioHang.find("tbody");
        if (!gioHang.length) {
            khuVucGioHang.find(".table-responsive").addClass("d-none");
            khuVucGioHang.find(".cart-empty-state").removeClass("d-none");
            $(".summary-subtotal, .summary-total, #total-cart").text("0đ");
            return;
        }

        khuVucGioHang.find(".table-responsive").removeClass("d-none");
        khuVucGioHang.find(".cart-empty-state").addClass("d-none");
        const tienTo = tienToDuongDan();
        bang.html(gioHang.map((item) => `
            <tr class="dong-gio-hang" data-id="${item.id}">
                <td class="py-4">
                    <div class="d-flex align-items-center">
                        <div class="cart-img-wrapper me-3"><img src="${tienTo}${item.anh}" alt="${item.ten}"></div>
                        <div>
                            <p class="mb-1 fw-bold product-name-cart">${item.ten}</p>
                            <p class="mb-1 small text-secondary">Màu: ${item.mau}</p>
                            <a href="#" class="text-decoration-underline text-dark small nut-xoa">Xóa</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <div class="quantity-group d-flex justify-content-center border">
                        <button class="btn btn-sm border-0 nut-giam">-</button>
                        <input type="text" class="form-control form-control-sm border-0 text-center bg-transparent o-so-luong" value="${item.soLuong}" readonly>
                        <button class="btn btn-sm border-0 nut-tang">+</button>
                    </div>
                </td>
                <td class="text-end fw-bold thanh-tien">${dinhDangTien(item.gia * item.soLuong)}</td>
            </tr>
        `).join(""));
        capNhatTongTien();
    }

    function capNhatTongTien() {
        let tongTien = 0;
        $(".dong-gio-hang").each(function () {
            const id = $(this).data("id");
            const item = layGioHang().find((x) => x.id === id);
            if (!item) return;
            tongTien += item.gia * item.soLuong;
            $(this).find(".thanh-tien").text(dinhDangTien(item.gia * item.soLuong));
            $(this).find(".o-so-luong").val(item.soLuong);
        });
        $(".summary-subtotal, .summary-total, #total-cart").text(dinhDangTien(tongTien));
    }

    $(document).on("click", ".nut-tang, .nut-giam", function () {
        const dong = $(this).closest(".dong-gio-hang");
        const id = dong.data("id");
        const gioHang = layGioHang();
        const item = gioHang.find((x) => x.id === id);
        if (!item) return;
        if ($(this).hasClass("nut-tang")) item.soLuong += 1;
        if ($(this).hasClass("nut-giam") && item.soLuong > 1) item.soLuong -= 1;
        luuGioHang(gioHang);
        capNhatTongTien();
    });

    $(document).on("click", ".nut-xoa", function (e) {
        e.preventDefault();
        const id = $(this).closest(".dong-gio-hang").data("id");
        xoaKhoiGioHang(id);
        veGioHang();
    });

    veGioHang();
}

// ===== THANH TOÁN =====
function khoiTaoThanhToan() {
    const formThanhToan = $("#checkoutForm");
    if (!formThanhToan.length) return;

    const tienTo = tienToDuongDan();
    const danhSach = $("#checkout-item-list");
    const gioHang = layGioHang();
    let tongTienDonHang = 0;

    danhSach.html(gioHang.map((item) => {
        tongTienDonHang += item.gia * item.soLuong;
        return `
            <div class="d-flex align-items-center mb-3">
                <img src="${tienTo}${item.anh}" width="56" class="border me-2" alt="${item.ten}">
                <div class="flex-grow-1">
                    <p class="small mb-0 fw-bold">${item.ten}</p>
                    <small class="text-secondary">SL: ${item.soLuong}</small>
                </div>
                <small class="fw-bold">${dinhDangTien(item.gia * item.soLuong)}</small>
            </div>
        `;
    }).join("") || "<p class='small text-secondary'>Giỏ hàng đang trống.</p>");
    $(".summary-subtotal, .summary-total").text(dinhDangTien(tongTienDonHang));

    const truongHoTen = $("#checkoutHoTen");
    const truongEmail = $("#checkoutEmail");
    const truongSoDienThoai = $("#checkoutSoDienThoai");
    const truongDiaChi = $("#checkoutDiaChi");

    function hienThiLoi(selector, thongBao) {
        const vungLoi = $(selector);
        if (!thongBao) {
            vungLoi.text("").addClass("d-none");
            return;
        }
        vungLoi.text(thongBao).removeClass("d-none");
    }

    function kiemTraFormThanhToan() {
        const hoTen = (truongHoTen.val() || "").trim();
        const email = (truongEmail.val() || "").trim();
        const soDienThoai = (truongSoDienThoai.val() || "").trim();
        const diaChi = (truongDiaChi.val() || "").trim();

        let hopLe = true;

        if (!hoTen) {
            hienThiLoi("#loiHoTen", "Vui lòng nhập họ và tên.");
            hopLe = false;
        } else if (hoTen.length < 3) {
            hienThiLoi("#loiHoTen", "Họ và tên phải có ít nhất 3 ký tự.");
            hopLe = false;
        } else {
            hienThiLoi("#loiHoTen", "");
        }

        if (!soDienThoai) {
            hienThiLoi("#loiSoDienThoai", "Vui lòng nhập số điện thoại.");
            hopLe = false;
        } else if (!/^\d+$/.test(soDienThoai)) {
            hienThiLoi("#loiSoDienThoai", "Số điện thoại chỉ được chứa chữ số.");
            hopLe = false;
        } else if (soDienThoai.length < 9 || soDienThoai.length > 11) {
            hienThiLoi("#loiSoDienThoai", "Số điện thoại phải từ 9 đến 11 số.");
            hopLe = false;
        } else {
            hienThiLoi("#loiSoDienThoai", "");
        }

        if (!email) {
            hienThiLoi("#loiEmail", "Vui lòng nhập email.");
            hopLe = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            hienThiLoi("#loiEmail", "Email không đúng định dạng.");
            hopLe = false;
        } else {
            hienThiLoi("#loiEmail", "");
        }

        if (!diaChi) {
            hienThiLoi("#loiDiaChi", "Vui lòng nhập địa chỉ.");
            hopLe = false;
        } else {
            hienThiLoi("#loiDiaChi", "");
        }

        return {
            hopLe,
            duLieu: { hoTen, email, soDienThoai, diaChi }
        };
    }

    formThanhToan.on("submit", function (e) {
        e.preventDefault();
        const gioHangHienTai = layGioHang();

        if (!gioHangHienTai.length) {
            alert("Giỏ hàng đang trống.");
            return;
        }

        const ketQuaKiemTra = kiemTraFormThanhToan();
        if (!ketQuaKiemTra.hopLe) {
            return;
        }

        const { hoTen, email, soDienThoai, diaChi } = ketQuaKiemTra.duLieu;

        const lichSu = layDuLieuJson(KEY_LICH_SU_DON_HANG, []);
        const tongTien = gioHangHienTai.reduce((tong, item) => tong + (item.gia * item.soLuong), 0);

        lichSu.unshift({
            thoiGian: new Date().toISOString(),
            tongTien,
            sanPham: gioHangHienTai,
            khachHang: { hoTen, soDienThoai, email, diaChi }
        });

        luuDuLieuJson(KEY_LICH_SU_DON_HANG, lichSu);
        localStorage.removeItem(KEY_GIO_HANG);
        alert("Thanh toán thành công! Bạn có thể xem lịch sử thanh toán ở giỏ hàng.");
        window.location.href = `${tienTo}index.html`;
    });
}

function khoiTaoTinTuc() {
    const khuVucTin = $("#danh-sach-tin-tuc");
    if (khuVucTin.length) {
        const tienTo = tienToDuongDan();
        khuVucTin.html(danhSachTinTuc.map((tin) => `
            <div class="col-md-4 mb-4">
                <div class="news-item">
                    <img src="${tienTo}${tin.hinh}" class="img-fluid w-100 mb-2" alt="${tin.tieuDe}">
                    <h6 class="fw-bold text-dark">${tin.tieuDe}</h6>
                    <p class="small text-secondary mb-1">${tin.moTa}</p>
                    <p class="small text-muted mb-0">${tin.ngay}</p>
                </div>
            </div>
        `).join(""));
    }

    const khuVucChiTiet = $("#chi-tiet-tin-tuc");
    if (khuVucChiTiet.length) {
        const id = new URLSearchParams(window.location.search).get("id");
        const tin = danhSachTinTuc.find((item) => item.id === id) || danhSachTinTuc[0];
        const tienTo = tienToDuongDan();
        khuVucChiTiet.html(`
            <h1 class="h3 mb-3">${tin.tieuDe}</h1>
            <p class="small text-muted">${tin.ngay}</p>
            <img src="${tienTo}${tin.hinh}" class="img-fluid mb-3" alt="${tin.tieuDe}">
            <p>${tin.moTa}</p>
            <p>Bài viết mô phỏng nội dung tin tức để đáp ứng yêu cầu trang chi tiết tin tức trong bài tập lớn.</p>
        `);
    }
}

function khoiTaoLichSuThanhToan() {
    const khuVucLichSu = $("#lich-su-thanh-toan");
    if (!khuVucLichSu.length) return;

    const lichSu = layDuLieuJson(KEY_LICH_SU_DON_HANG, []);
    if (!lichSu.length) {
        khuVucLichSu.html('<p class="text-secondary small mb-0">Chưa có đơn hàng nào được thanh toán.</p>');
        return;
    }

    const html = lichSu.map((donHang) => {
        const danhSachSanPham = donHang.sanPham.map((sp) => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${sp.ten} x ${sp.soLuong}</span>
                <span>${dinhDangTien(sp.gia * sp.soLuong)}</span>
            </li>
        `).join("");
        const thoiGian = new Date(donHang.thoiGian).toLocaleString("vi-VN");
        return `
            <div class="card shadow-sm border-0 mb-3">
                <div class="card-body">
                    <p class="mb-2 small text-secondary">Thời gian thanh toán: ${thoiGian}</p>
                    <ul class="list-group list-group-flush mb-3">
                        ${danhSachSanPham}
                    </ul>
                    <p class="mb-0 fw-bold text-danger">Tổng tiền: ${dinhDangTien(donHang.tongTien)}</p>
                </div>
            </div>
        `;
    }).join("");
    khuVucLichSu.html(html);
}

function themLienKetSitemapVaoMenu() {
    const duongDanSitemap = laTrangCon() ? "sitemap.html" : "html/sitemap.html";
    $(".navbar-nav").each(function () {
        const menu = $(this);
        if (menu.find("a[href$='sitemap.html']").length) return;
        menu.append(`<li class="nav-item"><a class="nav-link" href="${duongDanSitemap}">Sitemap</a></li>`);
    });
}

$(document).ready(function () {
    chuyenDuLieuKhoaCu();
    themLienKetSitemapVaoMenu();
    capNhatSoLuongGioHang();
    capNhatTrangThaiDangNhap();
    khoiTaoTimKiem();
    khoiTaoDanhSachSanPham();
    khoiTaoChiTietSanPham();
    khoiTaoGioHang();
    khoiTaoThanhToan();
    khoiTaoTinTuc();
    khoiTaoLichSuThanhToan();

    // đăng xuất
    $(document).on("click", ".auth-logout-btn", function (e) {
        e.preventDefault();
        dangXuat();
        capNhatTrangThaiDangNhap();
        capNhatSoLuongGioHang();
    });

    // gửi form đăng nhập
    $("#formLogin").on("submit", function (e) {
        e.preventDefault();
        const soDienThoai = String($("#loginPhone").val() || "").replace(/\D/g, "");
        const matKhau = $("#loginPassword").val() || "";
        const ketQua = dangNhap(soDienThoai, matKhau);
        if (!ketQua.hopLe) {
            alert(ketQua.thongBao);
            return;
        }
        const tiepTuc = new URLSearchParams(window.location.search).get("return") || (tienToDuongDan() + "index.html");
        window.location.href = tiepTuc;
    });

    // gửi form đăng ký
    $("#formRegister").on("submit", function (e) {
        e.preventDefault();
        const soDienThoai = String($("#regPhone").val() || "").replace(/\D/g, "");
        const hoTen = $("#regName").val() || "";
        const matKhau = $("#regPassword").val() || "";
        const loi = kiemTraDangKy(soDienThoai, hoTen, matKhau);
        if (loi) {
            alert(loi);
            return;
        }
        const ketQua = dangKy(soDienThoai, hoTen, matKhau);
        if (!ketQua.hopLe) {
            alert(ketQua.thongBao);
            return;
        }
        this.reset();
        alert("Đăng ký thành công");
        const tabDangNhap = $("[href='#tabLogin']")[0];
        if (tabDangNhap && window.bootstrap) {
            bootstrap.Tab.getOrCreateInstance(tabDangNhap).show();
        } else {
            const duongDanDangNhap = laTrangCon() ? "dang-nhap.html" : "html/dang-nhap.html";
            window.location.href = duongDanDangNhap;
        }
    });

    // chuyển tab đăng nhập/đăng ký nhanh
    $(document).on("click", "[data-auth-tab]", function (e) {
        e.preventDefault();
        const mucTieu = $(this).attr("data-auth-tab");
        const tabLink = $(`[href="${mucTieu}"]`)[0];
        if (tabLink && window.bootstrap) {
            bootstrap.Tab.getOrCreateInstance(tabLink).show();
        }
    });

    // hiện/ẩn mật khẩu
    $(document).on("click", ".btn-toggle-pwd", function () {
        const input = $("#" + $(this).attr("data-target"));
        if (!input.length) return;
        const icon = $(this).find("i");
        const dangAn = input.attr("type") === "password";
        input.attr("type", dangAn ? "text" : "password");
        icon.toggleClass("bi-eye-slash bi-eye");
    });
});