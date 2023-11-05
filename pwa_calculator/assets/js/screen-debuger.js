let body = `<div class="debug-screen" style="position: fixed;top: 10px;left: 10px;">
    <ul>
        <li>Size Browser Viewport.height : <span id="heightBrowser"></span></li>
        <li>Size Browser Viewport.width : <span id="widthBrowser"></span></li>
    </ul>
    <!--<br>
        <ul>
            <li>Size HTML document.height : <span id="heightPage"></span></li>
            <li>Size HTML document.width : <span id="widthPage"></span></li>
        </ul>-->
</div>
<style>
.debug-screen span{
    color: #222;
    padding: 2px 5px;
    background: #fff;
    border-radius: 350px;
}
.debug-screen{
    position: fixed;
    top: 10px;
    left: 10px;
    background: #353535de;
    color: #fff;
    padding: 2px 5px;
    border-radius: 350px;}
</style>`;


window.onresize = function () {
    screenDebuger();
};


function initDebuger() {
    $("body").append(body);
    screenDebuger();
}


function screenDebuger() {
    // Size of browser viewport.
    $('body span#heightBrowser').text($(window).height());
    $('body span#widthBrowser').text($(window).width());
    // Size of HTML document (same as pageHeight/pageWidth in screenshot).
    $('body span#heightPage').text($(document).height());
    $('body span#widthPage').text($(document).width());
}

