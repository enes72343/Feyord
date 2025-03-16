// Email.js'i başlat
emailjs.init('qt1dHP2mbvtl7v42W'); // Email.js'den aldığınız Public Key'i buraya ekleyin

// Ürünler
const products = [
  { id: 1, name: 'Ürün 1', price: 100, description: 'Bu birinci ürün açıklamasıdır.' },
  { id: 2, name: 'Ürün 2', price: 200, description: 'Bu ikinci ürün açıklamasıdır.' },
];

// Ürünleri göster
function renderProducts() {
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Fiyat: ${product.price} TL</p>
      <button onclick="showOrderForm(${product.id})">Satın Al</button>
    `;
    productsContainer.appendChild(productDiv);
  });
}

// Formu göster ve ürün bilgilerini sakla
let selectedProductId = null;
function showOrderForm(productId) {
  selectedProductId = productId;
  document.getElementById('orderForm').style.display = 'block';
}

// Form gönderildiğinde çalışacak fonksiyon
document.getElementById('orderForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Formun otomatik gönderilmesini engelle

  // Kullanıcı bilgilerini al
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  // Ürün bilgilerini al
  const product = products.find(p => p.id === selectedProductId);
  if (product) {
    const quantity = 1; // Örnek miktar
    const totalPrice = product.price * quantity;

    // E-posta gönder
    emailjs.send('service_mqj01mn', 'template_dvpf3hk', { // SERVICE_ID ve TEMPLATE_ID'yi Email.js'den alın
      username: username,
      email: email,
      product_name: product.name,
      product_price: product.price,
      quantity: quantity,
      total_price: totalPrice,
    })
      .then(() => {
        alert('Siparişiniz alındı! E-posta gönderildi.');
        document.getElementById('orderForm').reset(); // Formu temizle
        document.getElementById('orderForm').style.display = 'none'; // Formu gizle
      }, (error) => {
        alert('E-posta gönderilemedi. Hata: ' + error.text);
      });
  }
});

// Sayfa yüklendiğinde ürünleri göster
document.addEventListener('DOMContentLoaded', renderProducts);
// Canlı Destek Penceresini Aç/Kapat
document.getElementById('openChat').addEventListener('click', function () {
    document.getElementById('chatWidget').style.display = 'block';
  });
  
  document.getElementById('closeChat').addEventListener('click', function () {
    document.getElementById('chatWidget').style.display = 'none';
  });
  
  // Mesaj Gönderme
  document.getElementById('sendMessage').addEventListener('click', function () {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
  
    if (chatInput.value.trim() !== '') {
      const p = document.createElement('p');
      p.textContent = `Kullanıcı: ${chatInput.value}`;
      chatMessages.appendChild(p);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight; // Mesajları otomatik kaydır
    }
  });
  
  // Enter Tuşu ile Mesaj Gönderme
  document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      document.getElementById('sendMessage').click();
    }
  });
// Email.js'i başlat
emailjs.init('qt1dHP2mbvtl7v42W'); // Email.js'den aldığınız Public Key'i buraya ekleyin

// Canlı Destek Penceresini Aç/Kapat
document.getElementById('openChat').addEventListener('click', function () {
  document.getElementById('chatWidget').style.display = 'block';
});

document.getElementById('closeChat').addEventListener('click', function () {
  document.getElementById('chatWidget').style.display = 'none';
});

// Soru Gönderme
document.getElementById('sendMessage').addEventListener('click', function () {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  if (chatInput.value.trim() !== '') {
    const question = chatInput.value;

    // E-posta gönder
    emailjs.send('service_boghh03', 'template_7necxcg', { // SERVICE_ID ve TEMPLATE_ID'yi Email.js'den alın
      question: question,
    })
      .then(() => {
        // Kullanıcıya otomatik cevap göster
        chatMessages.innerHTML += `<p><strong>Siz:</strong> ${question}</p>`;
        chatMessages.innerHTML += `<p><strong>Destek:</strong> Sorunuz alındı. En kısa sürede dönüş yapacağız.</p>`;
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, (error) => {
        alert('Soru gönderilemedi. Hata: ' + error.text);
      });
  }
});

// Enter Tuşu ile Soru Gönderme
document.getElementById('chatInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('sendMessage').click();
  }
});
// Email.js'i başlat
emailjs.init('qt1dHP2mbvtl7v42W'); // Email.js'den aldığınız Public Key'i buraya ekleyin

// Form gönderildiğinde çalışacak fonksiyon
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Formun otomatik gönderilmesini engelle

  // Form verilerini al
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // E-posta gönder
  emailjs.send('service_mqj01mn', 'template_dvpf3hk', { // SERVICE_ID ve TEMPLATE_ID'yi Email.js'den alın
    from_name: name,
    from_email: email,
    message: message,
  })
    .then(() => {
      alert('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.');
      document.getElementById('contactForm').reset(); // Formu temizle
    }, (error) => {
      alert('Mesaj gönderilemedi. Hata: ' + error.text);
    });
});
