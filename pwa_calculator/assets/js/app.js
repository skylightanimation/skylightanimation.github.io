let base_url = "https://localhost:8056/pwa_caculator"
let user_agent = '';
let styles = {
    android: "./assets/css/android.css",
    windows : "./assets/css/windows.css"
}

function loaded() {
    let activate ='';
    if (navigator.userAgent.indexOf("Android") != -1) {
        activate = styles.android;
    } else if (navigator.userAgent.indexOf("Windows") != -1) {
        activate = styles.windows;
    }

    user_agent = navigator.userAgent;
    $("#styles").attr("href", activate);
}