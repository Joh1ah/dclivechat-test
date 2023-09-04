document.getElementById("bookmark").onclick = () => {
    browser.bookmarks.create({
        title: "test",
        url: "javascript:(()=>{fetch('https://joh1ah.github.io/dclivechat/min.js').then(res=>res.text().then(text=>eval(text))).catch(()=>alert('error'))})();"
    });
};