'use strict';

// 定义主题图片对象
const themes = {
    kon: [
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306198549_kon_5.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306191301_kon_7.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306191486_kon_6.webp"
    ],
    sp: [
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306222386_summer pockets_1.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306218357_summer pockets_12.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306217685_summer pockets_3.webp"
    ]
    // Add more themes here in the same format
};

// 定义函数获取随机图片
function getRandomImage(themeName) {
    const themeImages = themes[themeName];
    return themeImages[Math.floor(Math.random() * themeImages.length)];
}

// 定义函数获取当天的主题
function getDailyTheme() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const themeNames = Object.keys(themes);
    const themeIndex = dayOfYear % themeNames.length;
    return themeNames[themeIndex];
}

// 主函数设置背景
function setThemeBackground() {
    var bgtheme = window.bgtheme; // 从全局变量或window对象获取bgtheme

    // 检查bgtheme是否有值，如果没有值则根据当天获取主题
    if (bgtheme === '') {
        bgtheme = getDailyTheme();
        console.log("未找到bgtheme，已根据当天获取主题:", bgtheme);
    }    
    console.log("当前主题:", bgtheme);
    // 获取随机图片
    const backimg = getRandomImage(bgtheme);
    
    // 自动替换URL中的空格为%20
    const backgroundUrl = backimg.replace(/ /g, "%20");

    // 获取背景元素并设置背景图片
    const bgElement = document.getElementById("web_bg");
    if (bgElement) {
        bgElement.style.backgroundImage = `url(${backgroundUrl})`;
        console.log("背景图片设置成功:", backgroundUrl);
    } else {
        console.error("元素 '#web_bg' 未找到，无法设置背景图片");
    }
}

// 调用主函数来设置背景
setThemeBackground();