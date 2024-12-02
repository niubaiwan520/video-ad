// 从 GitHub 加载视频 JSON 数据
fetch('https://raw.githubusercontent.com/niubaiwan520/video-ad/main/videos.json')
  .then(response => response.json())
  .then(data => {
    // 获取容器，用于展示视频数据
    const categorySection = document.getElementById('category-section');

    // 遍历每个短剧，创建 HTML 内容
    for (let key in data) {
      const drama = data[key];

      // 创建每个短剧的显示项
      const dramaItem = document.createElement('div');
      dramaItem.classList.add('category-item');

      // 设置 HTML 内容，展示短剧标题和封面
      dramaItem.innerHTML = `
        <h3>${drama.title}</h3>
        <img src="${drama.cover}" alt="${drama.title}" onclick="showEpisodes('${key}')">
      `;
      
      // 将短剧项目添加到页面中
      categorySection.appendChild(dramaItem);
    }
  })
  .catch(error => console.error('加载 JSON 时出错:', error));

// 显示剧集按钮
function showEpisodes(dramaKey) {
  fetch('https://raw.githubusercontent.com/niubaiwan520/video-ad/main/videos.json')
    .then(response => response.json())
    .then(data => {
      const drama = data[dramaKey];
      const episodeLinks = drama.links;

      // 创建显示剧集按钮
      const episodesSection = document.createElement('div');
      episodesSection.innerHTML = `<h3>${drama.title} 剧集</h3>`;
      episodeLinks.forEach((link, index) => {
        const btn = document.createElement('button');
        btn.innerText = `观看第 ${index + 1} 集`;
        btn.onclick = () => showAdPopup();
        episodesSection.appendChild(btn);
      });

      // 将剧集按钮显示到页面上
      const categorySection = document.getElementById('category-section');
      categorySection.innerHTML = ''; // 清空现有内容
      categorySection.appendChild(episodesSection);
    });
}

// 显示激励广告弹窗
function showAdPopup() {
  document.getElementById('ad-popup').style.display = 'flex';
}

// 观看广告按钮点击事件
function watchAd() {
  alert("广告观看完成！现在你可以访问网盘链接了。");
  closePopup();
}

// 关闭广告弹窗
function closePopup() {
  document.getElementById('ad-popup').style.display = 'none';
}
