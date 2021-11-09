
const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const pageHTML = generatePage(name, github);
// capture user input
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

