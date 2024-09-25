$(document).ready(function (){
    var username = localStorage.getItem("username");
    console.log(username);
    if(username != null){
        $(".nav-items").eq(0).html(`<li class="nav-item">
                                        <a class="nav-link" href="/page/about.html">Thông tin</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#contact">Liên hệ</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Tài khoản</a>
                                        </li>`);
        $(".sign_btn").eq(0).html(`<a onclick="logout()">Đăng xuất</a>`);
    } else {
        $(".nav-items").eq(0).html(`<li class="nav-item">
                                        <a class="nav-link" href="/page/about.html">Thông tin</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#contact">Liên hệ</a>
                                        </li>`);
        $(".sign_btn").eq(0).html(`<a href="/page/login.html">Đăng nhập</a>`);
    }
});
$("#main--header").html(`<!-- header inner -->
<div class="header q--header">
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                    <div class="center-desk">
                        <div class="logo">
                            <a href="../index.html"><img src="../images/logo.png" alt="#" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav class="navigation navbar navbar-expand-md navbar-dark ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto nav-items">
                            <li class="nav-item">
                                <a class="nav-link" href="/page/about.html">Thông tin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Liên hệ</a>
                            </li>
                        </ul>
                        <div class="sign_btn"><a href="/page/login.html">Đăng nhập</a></div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div>`);
$(".main--footer").eq(0).html(`<div class="footer">
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="titlepage q--titlepage">
                <h2>Felicity</h2>
                <h3 class="text-white">Nơi nghỉ dưỡng tuyệt vời để tìm thấy sự yên bình và sự thư thái</h3>
            </div>
        </div>
        <div class="col-md-6">
            <div class="cont">
                <p>Address: 100 Giảng Võ, Ba Đình, Hà Nội</p>
                <p>Tel: <a href="tel:02466668888" class="text-white">(+84) 24 6666 8888</a> | Fax: <a
                        href="tel:02499998888" class="text-white">(+84) 24 9999 8888</a> </p>
                <p>Mail: <a href="mailto:reservation@felicity.com"
                        class="text-white">reservation@felicity.com</a></p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="cont q--footer--icons">
                <div class="q--footer--icon"><i class="fa fa-facebook"></i></div>
                <div class="q--footer--icon"><i class="fa fa-twitter"></i></div>
                <div class="q--footer--icon"><i class="fa fa-youtube"></i></div>
                <div class="q--footer--icon"><i class="fa fa-instagram"></i></div>
            </div>
        </div>
    </div>
</div>
<div class="copyright">
</div>
</div>`);
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("retoken");
    window.location.replace("/index.html");
}