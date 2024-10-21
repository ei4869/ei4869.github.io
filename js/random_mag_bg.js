// // 在 DOM 加载完成后执行脚本
// document.addEventListener('DOMContentLoaded', function () {
//     // 随机选择封面图片的函数
//     function getRandomCoverImage(theme) {
//         var themeImages = {
//             kon: [
//                 "url(https://cloudflare-imgbed-9os.pages.dev/file/1729306198549_kon_5.webp)",
//                 "url(https://cloudflare-imgbed-9os.pages.dev/file/1729306191301_kon_7.webp)",
//                 "url(https://cloudflare-imgbed-9os.pages.dev/file/1729306191486_kon_6.webp)"
//             ],
//             sp: [
//                 "url(https://cloudflare-imgbed-9os.pages.dev/file/1729306222386_summer pockets_1.webp)",
//                 "url(https://cloudflare-imgbed-9os.pages.dev/file/1729306218357_summer pockets_12.webp)",
//                 "url(https://cloudflare-imgbed-9os.pages.dev/file/1729306217685_summer pockets_3.webp)"
//             ]
//         };
      
//         if (themeImages[theme]) {
//             var images = themeImages[theme];
//             var randomIndex = Math.floor(Math.random() * images.length);
//             return images[randomIndex].replace(/ /g, "%20");
//         } else {
//             console.warn("主题未定义，使用默认封面。");
//             return "url(https://cloudflare-imgbed-9os.pages.dev/file/default_image.webp)";
//         }
//     }

//     // 更新所有 categoryBar 的封面
//     function updateCategoryBarCover() {
//         var theme = window.selectedTheme; // 获取当前主题
//         var categoryItems = document.querySelectorAll('.categoryBar-list-item');

//         // 调试：检查是否获取到所有的项
//         console.log("选中的分类项数量:", categoryItems.length);

//         // 为每个分类项设置随机封面
//         categoryItems.forEach(function(item) {
//             var coverImage = getRandomCoverImage(theme); // 可以根据实际需求选择主题
//             console.log("设置的背景图片:", coverImage);

//             // 设置背景图片
//             item.style.backgroundImage = coverImage;
//             item.style.backgroundSize = "cover";  // 背景覆盖整个容器
//             item.style.backgroundRepeat = "no-repeat";  // 不重复背景
//             item.style.backgroundPosition = "center";  // 背景居中
//         });
//     }

//     // 执行更新操作
//     updateCategoryBarCover();
// });

'use strict';
// 在 DOM 加载完成后执行脚本
document.addEventListener('DOMContentLoaded', function () {
    // 定义主题图片对象
    const themes = {
        kon: [
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306198549_kon_5.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306191301_kon_7.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306191486_kon_6.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729428993734_kon_18.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729428993850_kon_19.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729428996317_kon_20.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429001817_kon_21.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429002735_kon_22.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429000558_kon_23.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429003335_kon_24.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429007799_kon_25.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729428998336_kon_26.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429009566_kon_27.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429003993_kon_28.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429003878_kon_29.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429010529_kon_30.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429007853_kon_31.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429008008_kon_32.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429010316_kon_33.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429013647_kon_15.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429006011_kon_16.webp", "https://cloudflare-imgbed-9os.pages.dev/file/1729429018278_kon_17.webp"
        ],
        sp: [
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306222386_summer%20pockets_1.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306218357_summer%20pockets_12.webp",
            "https://cloudflare-imgbed-9os.pages.dev/file/1729306217685_summer%20pockets_3.webp"
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

    // 更新所有 categoryBar 的封面
    function updateCategoryBarCover() {
        const theme = window.selectedTheme ? window.selectedTheme : getDailyTheme();  // 如果 selectedTheme 有值，则使用；否则，根据当天选择主题
        if (theme === '') {
            theme = getDailyTheme();
        }    
        const categoryItems = document.querySelectorAll('.categoryBar-list-item');
        console.log("当前磁贴主题:", theme);
        console.log("选中的分类项数量:", categoryItems.length);

        categoryItems.forEach(function(item) {
            const coverImage = getRandomCoverImage(theme);
            console.log("设置的背景图片:", coverImage);

            item.style.backgroundImage = `url(${coverImage})`;
            item.style.backgroundSize = "cover";  // 背景覆盖整个容器
            item.style.backgroundRepeat = "no-repeat";  // 不重复背景
            item.style.backgroundPosition = "center";  // 背景居中
        });
    }
    // 执行更新操作
    updateCategoryBarCover();
});
