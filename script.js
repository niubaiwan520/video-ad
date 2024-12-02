// 模拟的短剧数据
const dramas = {
  family: [
    { title: "家庭故事1", cover: "cover1.jpg", episodes: 20 },
    { title: "家庭故事2", cover: "cover2.jpg", episodes: 20 }
  ],
  baby: [
    { title: "萌宝的冒险1", cover: "cover3.jpg", episodes: 15 },
    { title: "萌宝的冒险2", cover: "cover4.jpg", episodes: 10 }
  ],
  scifi: [
    { title: "未来探险1", cover: "cover5.jpg", episodes: 25 },
    { title: "未来探险2", cover: "cover6.jpg", episodes: 30 }
  ]
};

// 显示分类的短剧列表
function showCategory(category) {
  const categorySection = document.getElementById("category-section");
  categorySection.innerHTML = ''; // 清空现有内容

  dramas[category].forEach(drama => {
    const dramaItem = document.createElement('div');
    dramaItem.classList.add('category-item');
    dramaItem.innerHTML = `
      <img src="${drama.cover}" alt="${drama.title}" onclick="showEpisodes('${category}', '${drama.title}')">
      <h3>${drama.title}</h3>
    `;
    categorySection.appendChild(dramaItem);
  });
}

// 显示剧集按钮
function showEpisodes(category, dramaTitle) {
  const drama = dramas[category].find(d => d.title === dramaTitle);
  const episodesSection = document.createElement('div');
  episodesSection.innerHTML = `<h3>${dramaTitle} 剧集</h3>`;

  // 创建按钮并按列排列
  const episodeButtons = document.createElement('div');
  episodeButtons.classList.add('episode-buttons');
  
  for (let i = 0; i < drama.episodes; i += 10) {
    const btn = document.createElement('button');
    btn.innerText = `第${i + 1}集 - 第${Math.min(i + 10, drama.episodes)}集`;
    btn.onclick = () => showAdPopup();
    episodeButtons.appendChild(btn);
  }

  episodesSection.appendChild(episodeButtons);

  // 将剧集按钮显示到页面上
  const categorySection = document.getElementById("category-section");
  categorySection.innerHTML = ''; // 清空现有内容
  categorySection.appendChild(episodesSection);
}

// 显示激励广告弹窗
function showAdPopup() {
  document.getElementById("ad-popup").style.display = "flex";
}

// 观看广告按钮点击事件
function watchAd() {
  alert("广告观看完成！现在你可以访问网盘链接了。");
  closePopup();
}

// 关闭广告弹窗
function closePopup() {
  document.getElementById("ad-popup").style.display = "none";
}
