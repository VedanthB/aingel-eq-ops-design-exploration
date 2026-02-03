// Auth check - redirect to login if not authenticated
(function() {
    if (sessionStorage.getItem('aingel_auth') !== 'true') {
        window.location.href = 'login.html';
    }
})();
