const marriageYearsElement = document.getElementById('marriageYears');
const copyrightYearElement = document.getElementById('copyrightYear');
const lastModifiedElement = document.getElementById('lastModified');

const lastModified = document.lastModified;
const year = new Date(lastModified).getFullYear();

// dynamically updating number of married years in webpage
const marriageYear = 2013;

let marriageLength = year - marriageYear;
console.log(`Length: ${marriageLength}`);
marriageYearsElement.textContent = marriageLength;

// updating copyright year
copyrightYearElement.textContent = year;
lastModifiedElement.textContent = `Last Update: ${lastModified}`;
