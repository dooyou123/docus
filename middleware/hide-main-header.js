// middleware/hide-main-header.js
export default function ({ app }) {
    const hideHeaderOnMainPage = () => {
        if (process.client) {
            const header = document.querySelector('.Header');
            if (header) {
                if (app.router.currentRoute.path === '/') {
                    header.style.display = 'none';
                } else {
                    header.style.display = '';
                }
            }
        }
    };

    app.router.afterEach(() => { // 라우트 변경 시 함수 실행
        hideHeaderOnMainPage();
    });

    if (process.client) {
        window.onNuxtReady(() => { // Nuxt 앱 준비 후 함수 실행
            hideHeaderOnMainPage();
        });
    }
}
