
function createObserver (element, threshold) {
    const observer = new IntersectionObserver((items) => {
        for (const item of items) {
            console.log(item);
            if (item.isIntersecting) {
                item.target.classList.add('is-visible');
            }
            else {
              if (item.target.classList.contains('scroll-trigger-alternate')) {
                item.target.classList.remove('is-visible');
              }
            }
        }
    }, {
        threshold: threshold
    });
    observer.observe(element);
}
    

document.querySelectorAll('.scroll-trigger').forEach((trigger) => {
    threshold = (typeof trigger.dataset.threshold != 'undefined')? trigger.dataset.threshold : 1;
    createObserver(trigger, threshold);
});