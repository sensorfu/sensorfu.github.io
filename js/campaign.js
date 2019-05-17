(function () {
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isFirefox = typeof InstallTrigger !== 'undefined';

    if (isChrome || isFirefox) {
        document.body.classList.add("chrome-ff");
    }

    document.addEventListener('DOMContentLoaded', function () {
        new Vivus('campaign-logo', { duration: 100, start: 'autostart' });
        new Vivus('campaign-decoration', { duration: 100, start: 'autostart' });
    });
})();