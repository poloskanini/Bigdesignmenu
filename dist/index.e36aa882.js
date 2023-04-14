const items = document.querySelectorAll(".item");
const ratio = .9;
const options = {
    root: null,
    // rootMargin: '-50px',
    rootMargin: "-40px",
    threshold: ratio
};
const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".item").forEach(function(r) {
    observer.observe(r);
}) // const observer = new IntersectionObserver((entries, observer) => {
 //   entries.forEach(entry => {
 //     if(entry.isIntersecting) {
 //       console.log(entry.target);
 //       entry.target.classList.add('visible');
 //     }
 //   })
 // })
 // items.forEach((item) => {
 //   observer.observe(item);
 // });
;

//# sourceMappingURL=index.e36aa882.js.map
