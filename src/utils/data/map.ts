export const map = `
const mailList = [
    "robson@email.com",
    "fulano@gmail.com",
    "cleiton@email.com",
    "diego@email.com",
    "eu@adonis.com",
    "aloha@hawaii.com",
    "outro@emailqualquer.com"
  ];

  const passengers = [
    { name: "Ademar", birthYear: 1975 },
    { name: "Tiago", birthYear: 1997 },
    { name: "Eduarda", birthYear: 2004 },
    { name: "Jessica", birthYear: 1984 },
    { name: "Enzo", birthYear: 2015 },
    { name: "Natan", birthYear: 2001 },
    { name: "Ana", birthYear: 1995 }
  ];

const newPassengers = passengers.map(passenger => \`\${passenger.name} - \${passenger.birthYear}\`);
console.log(newPassengers);

const founds = passengers.map(passenger => {
  const reserveName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");

    if (reserveName.toLowerCase() === passenger.name.toLowerCase())
    return \`This is palindrome: \${passenger.name}\`;
});

console.log(founds);

const domains = mailList.map(mail => {
  const mailArray = mail.split("@");
  return mailArray[1];
});

console.log(domains);
`
