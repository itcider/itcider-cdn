document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.classList.add('dim-overlay');

    sidebarToggle.addEventListener('click', function() {
        body.classList.toggle('sidebar-visible');
        if (body.classList.contains('sidebar-visible')) {
            document.body.appendChild(overlay);
        } else {
            document.body.removeChild(overlay);
        }
    });

    overlay.addEventListener('click', function() {
        body.classList.remove('sidebar-visible');
        document.body.removeChild(overlay);
    });

    // 페이지네이션 코드를 여기에 추가하여 사이드바와 충돌하지 않도록 합니다.
});
