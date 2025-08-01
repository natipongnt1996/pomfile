let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.offAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

var typed = new Typed(".text", {
    strings: ["นักศึกษาฝึกงาน", "นักออกแบบเว็บไซต์", "นักพัฒนาเว็บไซต์"],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

function emailSend(){

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var messageBody = "Name " + userName +
    "<br/> Phone " + phone +
    "<br/> Email " + email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "natipong.nt1996@gmail.com",
        Password : "2B5B9094A5A86B9BB4CAEDE2A63B511CD170",
        To : 'pom@digiserve.org',
        From : "natipong.nt1996@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
    