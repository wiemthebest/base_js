const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  console.log("Les entrepreneurs qui qont nés dans les années 70"); 
  entrepreneurs.forEach(function(item, index, array) {
      if(item.year>=1970 && item.year<1980){
    console.log(item, index)}
  })

  console.log("Le prénom et le nom des entrepreneurs");
  namesTab = [];
  entrepreneurs.forEach(item => { 
      let name = item.first + " " + item.last  
   namesTab.push(name);
  });
  console.log(namesTab);

  console.log("L'age des inventeurs aujourd'hui");
  let currentYear = 2021;
  entrepreneurs.forEach(item => {
  let age = currentYear - item.year
  console.log(item.first + " " + item.last + " " +"a" + " " + age + " " + "ans");
  });

console.log("Les noms de famille des entrepreneurs par ordre alphabétique");
entrepreneurs.sort(function compare(a,b) {
    if (a.last < b.last)
    return -1;
    if (a.last > b.last)
    return 1;
    return 0;
});
console.log(entrepreneurs);
  