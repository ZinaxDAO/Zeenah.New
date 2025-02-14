'use strict';

if (document.querySelector('.splash')) {
  document.addEventListener('click', function () {
    window.location.href = './spalsh2.html';
  });
}
if (document.querySelector('.splash2')) {
  document.querySelector('.english').addEventListener('click', () => {
    window.location.href = './onboard.html';
  });
}
if (document.querySelector('.phoneOTP')) {
  document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.add('blur');
    document.querySelector('.checked').classList.remove('hide');
  });

  document.querySelector('.check-con').addEventListener('click', () => {
    window.location.href = './home.html';
  });
}

if (document.querySelector('.login')) {
  document.querySelector('.submit').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.add('blur');
    document.querySelector('.checked').classList.remove('hide');
  });

  document.querySelector('.cancel-bio').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.remove('blur');
    document.querySelector('.checked').classList.add('hide');
  });
}

if (document.querySelector('.airtime')) {
  console.log('I got here');
  const see = document.querySelector('.next');
  console.log(see);
  see.addEventListener('click', function () {
    console.log('I am clicked');
  });

  const hedd = document.querySelector('.hedd');
  console.log(hedd);
  if (hedd) {
    hedd.addEventListener('click', function () {
      console.log('I am clicked');
    });
  }
}

if (document.querySelector('.swap-convert')) {
  document.querySelector('.swap-prev').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.add('blur');
    document.querySelector('.swap-modal').classList.remove('hidden');
  });

  document.querySelector('.swap-cancel').addEventListener('click', () => {
    document.querySelector('.blur-section').classList.remove('blur');
    document.querySelector('.swap-modal').classList.add('hidden');
  });

  document.querySelector('.swap-submit').addEventListener('click', () => {
    window.location.href = './tracasction-success.html?source=convert';
  });
}

if (document.querySelector('.transaction-sucessfull')) {
  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get('source');
  console.log(source);

  if (source === 'convert') {
    document.querySelector('.note-head').textContent = 'Swap successful';

    const paragraphs = document.getElementsByTagName('p');
    paragraphs[0].textContent = '';
    paragraphs[1].textContent =
      'You have successfully swapped 100 USD to 74,000 NGN ';

    document.querySelector('.swap-done').addEventListener('click', () => {
      console.log('go back to home');
      window.location.href = './home.html';
    });

    document.querySelector('.view-receipt').addEventListener('click', () => {
      console.log('show receipt');
    });
  }
}
