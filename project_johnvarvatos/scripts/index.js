document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Swiper 초기화 (Main Banner)
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
    
    // 2. Swiper 초기화 (New Product Slider - 중간 이미지)
    const newProductSwiper = new Swiper('.newProductSwiper', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        // 반응형 설정: 1024px 이상에서는 중앙에 하나만 크게 보이도록 조정
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });

    // 3. Header Icon 기능 (기능 연결 준비)
    const searchBtn = document.querySelector('.search-btn');
    const userBtn = document.querySelector('.user-btn');
    const cartBtn = document.querySelector('.cart-btn');

    searchBtn.addEventListener('click', function() {
        alert('검색창 팝업 기능 준비 중입니다.');
        // 실제 구현 시: 검색 팝업 모달을 띄우는 코드 작성
    });

    userBtn.addEventListener('click', function() {
        alert('로그인/회원가입 페이지로 이동하는 기능 준비 중입니다.');
        // 실제 구현 시: window.location.href = '/login'; 등의 코드 작성
    });

    cartBtn.addEventListener('click', function() {
        alert('장바구니 페이지로 이동하는 기능 준비 중입니다.');
        // 실제 구현 시: window.location.href = '/cart'; 등의 코드 작성
    });
    
    // 4. Mobile Menu 기능 (1023px 이하에서 작동)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links'); // 모바일에서는 이걸 토글하여 전체 메뉴를 띄우는 방식으로 구현 가능
    
    mobileMenuBtn.addEventListener('click', function() {
        // 모바일 환경에 따라 전체 화면 오버레이 또는 사이드 메뉴 등을 구현할 수 있습니다.
        // 여기서는 예시로 간단한 콘솔 로그와 클래스 토글을 제공합니다.
        console.log('모바일 메뉴 버튼 클릭!');
        // navLinks.classList.toggle('active-mobile-menu'); // 실제 구현 시
    });
});