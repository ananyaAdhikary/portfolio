function toggler() {
    var x = document.getElementById("nav-cover2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
document.addEventListener('DOMContentLoaded', function() {
  var btnEdu = document.getElementById('btn-education');
  var btnProj = document.getElementById('btn-projects');

  if (btnEdu) {
    btnEdu.addEventListener('click', function() {
      document.getElementById('tab-education').style.display = 'block';
      document.getElementById('tab-projects').style.display = 'none';
      btnEdu.classList.add('active');
      btnProj.classList.remove('active');
    });
  }

  if (btnProj) {
    btnProj.addEventListener('click', function() {
      document.getElementById('tab-projects').style.display = 'block';
      document.getElementById('tab-education').style.display = 'none';
      btnProj.classList.add('active');
      btnEdu.classList.remove('active');
    });
  }
});

// Scroll Reveal
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.reveal').forEach(function(el) {
      observer.observe(el);
    });
  });
})();

// ── TYPING EFFECT ──
(function () {
  var words = ['Web Developer', 'Front-end Designer', 'Problem Solver', 'Creative Coder'];
  var el = document.getElementById('typing-role');
  if (!el) return;

  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 100;

  function type() {
    var current = words[wordIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 55;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 110;
    }

    if (!isDeleting && charIndex === current.length) {
      // pause at end of word
      typeSpeed = 1600;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  // start after page loads
  setTimeout(type, 1200);
})();

// ── CONTACT FORM SUBMIT ──
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var successMsg = document.getElementById('form-success');
  var submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var subject = document.getElementById('address').value.trim();
    var message = document.getElementById('message').value.trim();

    var text =
      '👋 Hello Ananya!' +
      '\n\n*Name:* ' + name +
      '\n*Email:* ' + email +
      (subject ? '\n*Subject:* ' + subject : '') +
      '\n\n*Message:*\n' + message;

    var phone = '8801902760603';
    var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);

    submitBtn.textContent = 'Opening WhatsApp...';
    submitBtn.disabled = true;

    setTimeout(function () {
      window.open(url, '_blank');
      form.reset();
      submitBtn.textContent = 'Send via WhatsApp 💬';
      submitBtn.disabled = false;
      successMsg.style.display = 'flex';

      setTimeout(function () {
        successMsg.style.display = 'none';
      }, 5000);
    }, 800);
  });
});

// ── SKILLS TAB SWITCH ──
function showSkill(id, btn) {
  document.querySelectorAll('.skills-panel').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.cat-btn').forEach(function(b){ b.classList.remove('active'); });
  document.getElementById('skillpanel-' + id).classList.add('active');
  btn.classList.add('active');
}
