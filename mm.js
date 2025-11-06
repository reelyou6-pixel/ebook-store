card.innerHTML = `
  <div class="cover">
    <img src="${b.img}" alt="${b.title}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
  </div>
  <div class="title">${b.title}</div>
  <div class="meta">
    <div class="price">${b.price.toFixed(2)} $</div>
    <button class="primary">تفاصيل</button>
  </div>
`;
