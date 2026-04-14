const danhSachSanPham = [{
        id: "sp01",
        ten: "Túi đeo vai hình thang đơn sắc",
        gia: 1225000,
        album: ["../img/tui-deo-vai-hinh-thang-don-sac-1.jpg", "../img/tui-deo-vai-hinh-thang-don-sac-2.jpg"],
        mau: "Trắng",
        isNew: true,
        mota: "Chất liệu da tổng hợp cao cấp, thiết kế hình thang đơn sắc thanh lịch."
    },
    {
        id: "sp02",
        ten: "Túi đeo vai da thật phối khoá xoay",
        gia: 2245000,
        album: ["../img/tui-deo-vai-nhan-khoa-xoay-kim-loai-1.jpg", "../img/tui-deo-vai-nhan-khoa-xoay-kim-loai-2.jpg"],
        mau: "Đỏ",
        isNew: true,
        mota: "Dòng sản phẩm da thật cao cấp, điểm nhấn là khóa xoay kim loại sang trọng."
    },
    {
        id: "sp03",
        ten: "Túi mini xách tay nhấn charm hoa hồng",
        gia: 1175000,
        album: ["../img/tui-mini-xach-tay-nhan-charm-hoa-hong-1.jpg", "../img/tui-mini-xach-tay-nhan-charm-hoa-hong-2.jpg"],
        mau: "Đỏ",
        isNew: true,
        mota: "Thiết kế mini trẻ trung, đi kèm charm hoa hồng nữ tính."
    },
    {
        id: "sp04",
        ten: "Túi xách tay vân cá sấu nhấn khóa kiểu",
        gia: 1245000,
        album: ["../img/tui-xach-tay-van-ca-sau-1.jpg", "../img/tui-xach-tay-van-ca-sau-2.jpg"],
        mau: "Đen",
        isNew: true,
        mota: "Họa tiết vân cá sấu thời thượng phối hợp cùng khóa kiểu lạ mắt."
    },
    {
        id: "sp05",
        ten: "Túi baguette nhấn quai phối charm hoa",
        gia: 1195000,
        album: ["../img/tui-baguette-nhan-quai-phoi-charm-hoa-1.jpg", "../img/tui-baguette-nhan-quai-phoi-charm-hoa-2.jpg"],
        mau: "Tím nhạt",
        isNew: true,
        mota: "Kiểu dáng baguette hiện đại, điểm xuyết charm hoa tinh tế."
    },
    {
        id: "sp06",
        ten: "Túi mini nhấn họa tiết trái tim",
        gia: 1145000,
        album: ["../img/tui-mini-nhan-hoa-tiet-trai-tim-1.jpg", "../img/tui-mini-nhan-hoa-tiet-trai-tim-2.jpg"],
        mau: "Đỏ",
        isNew: true,
        mota: "Họa tiết trái tim dễ thương, phù hợp cho các buổi dạo phố."
    },
    {
        id: "sp07",
        ten: "Túi pouch đa năng họa tiết trái tim",
        gia: 235000,
        album: ["../img/tui-pouch-da-nang-hoa-tiet-trai-tim-1.jpg", "../img/tui-pouch-da-nang-hoa-tiet-trai-tim-2.jpg"],
        mau: "Trắng chấm bi đen",
        isNew: true,
        mota: "Kích thước nhỏ gọn, dùng đựng mỹ phẩm hoặc phụ kiện cá nhân."
    },
    {
        id: "sp08",
        ten: "Túi đeo chéo nhấn khóa gài classic",
        gia: 1245000,
        album: ["../img/tui-deo-cheo-nhan-khoa-gai-1.jpg", "../img/tui-deo-cheo-nhan-khoa-gai-2.jpg"],
        mau: "Đỏ    ",
        isNew: true,
        mota: "Phong cách cổ điển không bao giờ lỗi mốt, khóa gài chắc chắn."
    },
    {
        id: "sp09",
        ten: "Túi xách nắp gập nhấn khóa cao cấp",
        gia: 1295000,
        album: ["../img/tui-xach-nap-gap-nhan-khoa-cao-cap-1.jpg", "../img/tui-xach-nap-gap-nhan-khoa-cao-cap-2.jpg"],
        mau: "Kem",
        isNew: true,
        mota: "Chất liệu bền đẹp, nắp gập sang trọng phù hợp đi làm."
    },
    {
        id: "sp10",
        ten: "Túi xách tay nhấn đai khóa sang trọng",
        gia: 1495000,
        album: ["../img/tui-xach-tay-nhan-dai-khoa-sang-trong-1.jpg", "../img/tui-xach-tay-nhan-dai-khoa-sang-trong-2.jpg"],
        mau: "Đen",
        isNew: true,
        mota: "Điểm nhấn đai khóa độc đáo, tạo nét cá tính cho người sử dụng."
    },
    {
        id: "sp11",
        ten: "Túi xách tay phối túi hộp mini",
        gia: 1195000,
        album: ["../img/tui-xach-tay-phoi-tui-hop-mini-1.jpg", "../img/tui-xach-tay-phoi-tui-hop-mini-2.jpg"],
        mau: "Đen",
        isNew: true,
        mota: "Sự kết hợp giữa túi lớn và túi nhỏ tiện lợi và thời trang."
    },
    {
        id: "sp12",
        ten: "Túi đeo vai quai đôi đơn sắc",
        gia: 1145000,
        album: ["../img/tui-deo-vai-quai-doi-don-sac-1.jpg", "../img/tui-deo-vai-quai-doi-don-sac-2.jpg"],
        mau: "Nâu",
        isNew: true,
        mota: "Thiết kế quai đôi chắc chắn, không gian chứa đồ rộng rãi."
    },
    {
        id: "sp13",
        ten: "Túi baguette trang trí charm kim loại",
        gia: 1245000,
        album: ["../img/tui-baguette-trang-tri-charm-kim-loai-1.jpg", "../img/tui-baguette-trang-tri-charm-kim-loai-2.jpg"],
        mau: "Bạc",
        isNew: true,
        mota: "Charm kim loại sáng bóng, tăng thêm vẻ lôi cuốn cho set đồ."
    },
    {
        id: "sp14",
        ten: "Túi đeo chéo vải nhún điệu đà",
        gia: 1195000,
        album: ["../img/tui-deo-cheo-vai-nhun-dieu-da-1.jpg", "../img/tui-deo-cheo-vai-nhun-dieu-da-2.jpg"],
        mau: "Đen",
        isNew: true,
        mota: "Chất liệu vải nhún mềm mại, cực kỳ nữ tính cho các nàng thơ."
    },
    {
        id: "sp15",
        ten: "Túi clutch satin xếp li thanh lịch",
        gia: 1075000,
        album: ["../img/tui-clutch-satin-xep-li-thanh-lich-1.jpg", "../img/tui-clutch-satin-xep-li-thanh-lich-2.jpg"],
        mau: "Đỏ",
        isNew: true,
        mota: "Vải satin bóng bẩy phối xếp li, lựa chọn hoàn hảo cho tiệc đêm."
    },
    {
        id: "sp16",
        ten: "Túi xách quai đôi phong cách giản tiện",
        gia: 1225000,
        album: ["../img/tui-xach-quai-doi-phong-cach-gian-tien-thanh-lich-1.jpg", "../img/tui-xach-quai-doi-phong-cach-gian-tien-thanh-lich-2.jpg"],
        mau: "Kem",
        isNew: true,
        mota: "Thiết kế tối giản nhưng vẫn giữ được nét thanh lịch cần có."
    }
];