'use strict';
// 在 DOM 加载完成后执行脚本
document.addEventListener('DOMContentLoaded', function () {
    // 定义主题图片对象
    const themes = {
        kon: [
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306199858_kon_8.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306198549_kon_5.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306191486_kon_6.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306195726_kon_4.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306193655_kon_1.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306187814_kon_10.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306184670_kon_11.webp"
        ],
        sp: [
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306220243_summer pockets_4.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306214022_summer pockets_5.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306217800_summer pockets_2.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306216964_summer pockets_6.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306218363_summer pockets_8.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306219985_summer pockets_11.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306224569_summer pockets_14.webp"
        ]
        // Add more themes here in the same format
    };

    // 获取随机图片的函数
    function getRandomCoverImage(theme) {
        const themeImages = themes[theme];
        if (themeImages) {
            const randomIndex = Math.floor(Math.random() * themeImages.length);
            return themeImages[randomIndex];
        } else {
            console.warn("Theme not defined, using default cover.");
            return "https://cloudflare-imgbed-9os.pages.dev/file/default_image.webp"; // 默认封面
        }
    }

    // 获取当天的主题
    function getDailyTheme() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        const themeNames = Object.keys(themes);
        const themeIndex = dayOfYear % themeNames.length;
        return themeNames[themeIndex];
    }

    function updateCovers() {
        // 获取当前主题，如果 theme 为空则使用每日主题
        const theme = window.theme === '' ? getDailyTheme() : window.theme;
    
        // 查找所有的 post_cover 和 blog-slider__img 元素
        const postCovers = document.querySelectorAll('.post_cover');
        const sliderItems = document.querySelectorAll('.blog-slider__img');
        const thumbItems = document.querySelectorAll('.aside-list-item');
    
        console.log("当前文章主题:", theme);
    
        // 确保 postCovers 和 sliderItems 数量相同
        const count = Math.min(postCovers.length, sliderItems.length, thumbItems.length);
    
        // 遍历每一对 post_cover 和 blog-slider__img
        for (let i = 0; i < count; i++) {
            const cover = postCovers[i];
            const sliderItem = sliderItems[i];
            const thumbItem = thumbItems[i];
            // 为当前文章获取随机封面图像
            const coverImage = getRandomCoverImage(theme);
            console.log("为当前文章设置的随机封面图片:", coverImage);
    
            // 更新 post_cover 的封面
            const imgElement = cover.querySelector('.post-bg');
            if (imgElement) {
                imgElement.src = coverImage;
    
                // 错误处理
                imgElement.onerror = function() {
                    this.onerror = null;
                    this.src = '/img/404.jpg'; // 设置加载失败的默认图片
                };
            } else {
                console.warn("没有找到 post-bg img 元素");
            }
    
            // 更新对应的 blog-slider__img
            const sliderImgElement = sliderItem.querySelector('img');
            if (sliderImgElement) {
                sliderImgElement.src = coverImage; // 使用同一张随机图片
    
                // 错误处理
                sliderImgElement.onerror = function() {
                    this.src = 'https://unpkg.zhimg.com/akilar-candyassets/image/loading.gif'; // 设置加载失败的默认图片
                    this.onerror = null; // 避免无限循环
                };
            } else {
                console.warn("没有找到 slider img 元素");
            }

            // 更新对应的 thumbnail
            const thumbImgElement = thumbItem.querySelector('img');
            if (thumbImgElement) {
                thumbImgElement.src = coverImage; // 使用同一张随机图片
    
                // 错误处理
                thumbImgElement.onerror = function() {
                    this.src = 'https://unpkg.zhimg.com/akilar-candyassets/image/loading.gif'; // 设置加载失败的默认图片
                    this.onerror = null; // 避免无限循环
                };
            } else {
                console.warn("没有找到 thumbnail img 元素");
            }
        }
    }
    
    // 执行更新操作
    updateCovers();
    

    
});