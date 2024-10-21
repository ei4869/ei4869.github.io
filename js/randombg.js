'use strict';

// 定义主题图片对象
const themes = {
    kon: [
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306198549_kon_5.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306191301_kon_7.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729306191486_kon_6.webp",
        "https://cloudflare-imgbed-9os.pages.dev/file/1729428993734_kon_18.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729428993850_kon_19.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729428996317_kon_20.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429001817_kon_21.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429002735_kon_22.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429000558_kon_23.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429003335_kon_24.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429007799_kon_25.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729428998336_kon_26.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429009566_kon_27.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429003993_kon_28.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429003878_kon_29.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429010529_kon_30.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429007853_kon_31.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429008008_kon_32.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429010316_kon_33.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429013647_kon_15.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429006011_kon_16.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429018278_kon_17.webp"
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