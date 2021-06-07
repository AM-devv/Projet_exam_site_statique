window.addEventListener('scroll', () => {
    if (document.querySelector('main').offsetTop - window.scrollY <= 48) {
      document.querySelector('.trigger').classList.add('on');
    }
    else {
      document.querySelector('.trigger').classList.remove('on');
    }
    
  });