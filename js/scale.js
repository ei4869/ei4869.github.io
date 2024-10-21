// 获取父容器
const parentElement = document.querySelector("#recent-posts > div.recent-post-items");

// 判断是否存在父容器
if (parentElement) {
  // 获取父容器下的所有子元素
  const childElements = parentElement.querySelectorAll('div');

  // 定义一个函数来缩放父容器和所有子元素
  function scaleElements(scaleCoefficient) {
    // 缩放父容器本身
    parentElement.style.transform = `scale(${scaleCoefficient})`;
    parentElement.style.transition = 'transform 0.3s ease';  // 添加父容器的过渡效果

    // 缩放所有子元素
    childElements.forEach((child, index) => {
      child.style.transform = `scale(${scaleCoefficient})`;  // 设置子元素的缩放比例
      child.style.transition = 'transform 0.3s ease';  // 添加子元素的过渡效果
    });
  }

  // 你可以调用这个函数并传入所需的缩放比例
  // 例如：scaleElements(1.2);  // 缩放父元素和所有子元素为 1.2 倍大小

  // 在页面加载时，可以设置一个默认的缩放比例
  scaleElements(1);  // 默认比例系数为 1 (不缩放)
  
  // 你还可以通过其他事件来调整缩放比例，比如按钮点击或滑动条
}
