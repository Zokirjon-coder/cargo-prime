// form 1
const form1 = document.querySelector('.form1');
const m1name = form1.querySelector('.mess1-name');
const m1phone = form1.querySelector('.mess1-phone');
const m1mail = form1.querySelector('.mess1-mail');
const m1exper = form1.querySelector('.mess1-exper');
const m1posi = form1.querySelector('.mess1-posi');
const m1notes = form1.querySelector('.mess1-notes');

const mess1 = {
  name: m1name,
  phone: m1phone,
  mail: m1mail,
  exper: m1exper,
  posi: m1posi,
  notes: m1notes,
};

function sendM1() {
  let body = `
    Name: ${m1name.value} <br />
    Phone: ${m1phone.value} <br />
    Mail: ${m1mail.value} <br />
    Experiance: ${m1exper.value} years<br />
    Job position: ${m1posi.value} <br />
    Notes: <br /> ${m1notes.value}
    `;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'cargo-prime-message@mail.com',
    Password: 'F3187508D77DFE0C5F874C742D82492FFE7C',
    To: 'marketing@cargoprimecorp.com',
    From: 'cargo-prime-message@mail.com',
    Subject: 'Driver Application',
    Body: body,
  }).then((message) => alert(message));
}

// form 2
const form2 = document.querySelector('.form2');
const m2name = form2.querySelector('.mess2-name');
const m2phone = form2.querySelector('.mess2-phone');
const m2mail = form2.querySelector('.mess2-mail');
const m2subj = form2.querySelector('.mess2-subject');
const m2notes = form2.querySelector('.mess2-notes');

function sendM2() {
  let body = `
    Name: ${m2name.value} <br />
    Phone: ${m2phone.value} <br />
    Mail: ${m2mail.value} <br />
    Subject: ${m2subj.value}<br />
    Notes: <br /> ${m2notes.value}
    `;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'cargo-prime-message@mail.com',
    Password: 'F3187508D77DFE0C5F874C742D82492FFE7C',
    To: 'marketing@cargoprimecorp.com',
    From: 'cargo-prime-message@mail.com',
    Subject: 'Quote ' + m2subj.value,
    Body: body,
  }).then((message) => alert(message));
}
