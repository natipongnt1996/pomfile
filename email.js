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