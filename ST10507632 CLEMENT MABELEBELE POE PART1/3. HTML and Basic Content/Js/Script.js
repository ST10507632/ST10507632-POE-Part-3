//countdown for beachcleanup event
const eventdate = new Date("2027-03-02T09:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursRl =  document.getElementById("hours");
const minutesEl =  document.getElementById("minutes");
const SecondsEl =  document.getElementById("seconds");

function setValue(element,value)  {
    if (element.textContent !== String(value))
        element.textContent= value;
    element.classList.remove("tick")
    void element.offsetWidth;
    element.classList.add("tick");
}

function updateCountdown() {
    const now = new Date().getTime();
    const timeleft = eventdate - now;

    setValue(daysEl,Math.floor(timeleft/(1000*60*60*24)));
    setValue(hoursRl, Math.floor((timeleft % (1000*60*60*24))/(1000*60*60)));
    setValue(minutesEl, Math.floor((timeleft % (1000*60*60))/(1000*60)));
    setValue(SecondsEl, Math.floor((timeleft % (1000*60)) /1000));
 };

 if (daysEl) {
    updateCountdown();
    setInterval(updateCountdown,1000);
 }

 // Scroll animation/transition JS+CSS
 
 const revealElements = document.querySelectorAll(".reveal");

 const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
 });

 revealElements.forEach(function(element){
    observer.observe(element);
 });

