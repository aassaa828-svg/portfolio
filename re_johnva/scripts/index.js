    // 1. Swiper (Main Banner)
    const mainSwiper = new Swiper('.mainSwiper', {
        loop: true,
        allowTouchMove: true, // 드래그 전환 가능
        pagination: {
            el: '.custom-pagination',
            type: 'fraction', // '1 / 3' 형식의 페이지네이션
        },
        // 모바일/태블릿에서 터치 스와이프 기능 활성화
        touchEventsTarget: 'wrapper',
        // 데스크톱에서도 드래그 가능
        simulateTouch: true,
    });
    // 2. Swiper (New Product Slider - 중간 이미지)
    const newProductSwiper = new Swiper('.newProductSwiper', {
        slidesPerView: 1.5,
        centeredSlides: true,
        pagination: {
            el: '#new-pagination',
        }
    });
        // 3. Header Icon 기능 (기능 연결 준비)
    const searchBtn = document.querySelector('.search-btn');
    const userBtn = document.querySelector('.user-btn');
    const cartBtn = document.querySelector('.cart-btn');

    searchBtn.addEventListener('click', function() {
        alert('검색창 팝업 기능 준비 중입니다.');
    });

    userBtn.addEventListener('click', function() {
        alert('로그인/회원가입 페이지로 이동하는 기능 준비 중입니다.');
    });

    cartBtn.addEventListener('click', function() {
        alert('장바구니 페이지로 이동하는 기능 준비 중입니다.');
    });