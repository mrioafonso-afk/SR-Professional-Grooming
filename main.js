/* ============================================================
   SR | Professional Groomer — shared behaviour
   ============================================================ */

// ---------- Language (PT default, EN via toggle, remembered) ----------
(function () {
  var saved = null;
  try { saved = localStorage.getItem('sr-lang'); } catch (e) {}
  if (saved === 'en') document.documentElement.classList.add('en');
  updateLangBtn();

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.lang-btn');
    if (!btn) return;
    var isEn = document.documentElement.classList.toggle('en');
    try { localStorage.setItem('sr-lang', isEn ? 'en' : 'pt'); } catch (e) {}
    updateLangBtn();
  });

  function updateLangBtn() {
    var isEn = document.documentElement.classList.contains('en');
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.textContent = isEn ? 'PT · 🇵🇹' : 'EN · 🇬🇧';
      b.setAttribute('aria-label', isEn ? 'Mudar para Português' : 'Switch to English');
    });
  }
  document.addEventListener('DOMContentLoaded', updateLangBtn);
})();

// ---------- Mobile menu ----------
document.addEventListener('click', function (ev) {
  var burger = ev.target.closest('.burger');
  if (burger) {
    document.querySelector('nav.menu').classList.toggle('open');
    return;
  }
  if (ev.target.closest('nav.menu a')) {
    document.querySelector('nav.menu').classList.remove('open');
  }
});

// ---------- Reveal on scroll ----------
document.addEventListener('DOMContentLoaded', function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rev').forEach(function (el) { obs.observe(el); });

  // Footer year
  document.querySelectorAll('.ano').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Booking form date: block past dates
  var d = document.getElementById('bk-data');
  if (d) d.min = new Date().toISOString().split('T')[0];
});

// ---------- Booking form -> structured WhatsApp message ----------
var SR_WHATSAPP = '351967692980';

function srBook(ev) {
  ev.preventDefault();
  var f = ev.target;
  var isEn = document.documentElement.classList.contains('en');
  var v = function (id) { return (f.querySelector('#' + id) || {}).value || '-'; };

  var dateVal = v('bk-data');
  var dateTxt = dateVal !== '-' ? new Date(dateVal + 'T12:00:00')
    .toLocaleDateString(isEn ? 'en-GB' : 'pt-PT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '-';

  var msg = isEn
    ? '✨ *Booking request — SR | Professional Groomer*\n\n' +
      '👤 Name: ' + v('bk-nome') + '\n' +
      '🐕 Dog: ' + v('bk-cao') + ' (' + v('bk-raca') + ')\n' +
      '🪧 Service: ' + v('bk-servico') + '\n' +
      '📅 Preferred date: ' + dateTxt + '\n' +
      '🕒 Preferred time: ' + v('bk-hora') + '\n' +
      '📝 Notes: ' + v('bk-notas')
    : '✨ *Pedido de marcação — SR | Professional Groomer*\n\n' +
      '👤 Nome: ' + v('bk-nome') + '\n' +
      '🐕 Cão: ' + v('bk-cao') + ' (' + v('bk-raca') + ')\n' +
      '🪧 Serviço: ' + v('bk-servico') + '\n' +
      '📅 Data preferida: ' + dateTxt + '\n' +
      '🕒 Hora preferida: ' + v('bk-hora') + '\n' +
      '📝 Notas: ' + v('bk-notas');

  window.open('https://wa.me/' + SR_WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank');
  return false;
}

// ---------- Shop: order product via WhatsApp ----------
function srOrder(nomePt, nomeEn, preco) {
  var isEn = document.documentElement.classList.contains('en');
  var msg = isEn
    ? '🛍️ Hello! I would like to order: *' + nomeEn + '* (' + preco + '). Is it available?'
    : '🛍️ Olá! Gostaria de encomendar: *' + nomePt + '* (' + preco + '). Está disponível?';
  window.open('https://wa.me/' + SR_WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank');
}

// ---------- Workshops: register via WhatsApp ----------
function srWorkshop(nomePt, nomeEn) {
  var isEn = document.documentElement.classList.contains('en');
  var msg = isEn
    ? '🎓 Hello! I would like to join the workshop: *' + nomeEn + '*. Could you send me the details?'
    : '🎓 Olá! Gostaria de participar no workshop: *' + nomePt + '*. Pode enviar-me os detalhes?';
  window.open('https://wa.me/' + SR_WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank');
}
