<template>
    <div class="footer">
        <div class="footer__content">
            <div class="footer__col">
                <div class="footer__col-title">Mua xe</div>
                <ul class="footer__col-list">
                    <li class="footer__col-list-item">Xe đã qua sử dụng</li>
                    <li class="footer__col-list-item">Xe mới</li>
                    <li class="footer__col-list-item">Chọn cấu hình xe</li>
                    <li class="footer__col-list-item">Bảng giá</li>
                </ul>
            </div>
            <div class="footer__col">
                <div class="footer__col-title">Tư vấn mua xe</div>
                <ul class="footer__col-list">
                    <li class="footer__col-list-item">Yêu cầu tư vấn</li>
                    <li class="footer__col-list-item">Đăng ký lái thử</li>
                    <li class="footer__col-list-item">Tìm nhà phân phối gần nhất</li>
                </ul>
            </div>
            <div class="footer__col">
                <div class="footer__col-title">Dịch vụ</div>
                <ul class="footer__col-list">
                    <li class="footer__col-list-item">Đặt hẹn dịch vụ</li>
                    <li class="footer__col-list-item">Ưu đãi đặc biệt</li>
                    <li class="footer__col-list-item">Phụ kiện chính hãng</li>
                </ul>
            </div>
            <div class="footer__col">
                <div class="footer__col-title">Các dòng xe</div>
                <ul class="footer__col-list">
                    <li class="footer__col-list-item">SUV</li>
                    <li class="footer__col-list-item">Sedan</li>
                    <li class="footer__col-list-item">Mercedes-AMG</li>
                    <li class="footer__col-list-item">Mercedes-Maybach</li>
                </ul>
            </div>
            <div class="footer__col">
                <div class="footer__col-title">Giới thiệu</div>
                <ul class="footer__col-list">
                    <li class="footer__col-list-item">Liên hệ </li>
                    <li class="footer__col-list-item">Câu chuyện của chúng tôi</li>
                    <li class="footer__col-list-item">Tin tức và sự kiện</li>
                </ul>
            </div>
        </div>
        <div class="footer__contact">
            <div class="footer__contact-title">
                <div>Bản quyền nội dung</div>
                <div>Cài đặt</div>
                <div>Quyền riêng tư và bảo vệ dữ liệu</div>
                <div>Thông tin pháp lý</div>
            </div>
            <div class="footer__contact-icon">
                <i class="fa-brands fa-twitter" style="color: #bdb7b7;"></i>
                <i class="fa-brands fa-square-facebook" style="color: #bdb7b7;"></i>
                <i class="fa-brands fa-youtube" style="color: #bdb7b7;"> </i>
                <i class="fa-brands fa-instagram" style="color: #bdb7b7;"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background-color: black;
    color: white;

    .footer__content {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid white;
        padding: 30px 0 40px;

        .footer__col {
            width: 15%;

            .footer__col-title {
                font-size: 20px;
                font-weight: 600;
                margin: 20px 0;
            }

            .footer__col-list {
                list-style: none;
                font-size: 15px;
                color: #bdb7b7;
            }

            .footer__col-list-item {
                margin: 13px 0;
            }

            .footer__col-list-item:hover {
                cursor: pointer;
                color: white;
            }
        }
    }

    .footer__contact {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        color: #bdb7b7;
        padding: 15px 0;

        .footer__contact-title {
            width: 55%;
            font-size: 15px;
            display: flex;
            justify-content: space-around;

            *:hover {
                color: white;
                cursor: pointer;
            }
        }

        .footer__contact-icon {
            width: 15%;
            font-size: 20px;
            display: flex;
            justify-content: space-around;

            *:hover {
                color: white;
                cursor: pointer;
            }
        }
    }

}
</style>