
//1// 

const productInfo = [

  { key: "name", value: "Laptop" },

  { key: "price", value: 12000 },

  { key: "brand", value: "Dell" },

];

const updatePrtoductInfo = productInfo.reduce((acc,curr) => {
  acc[curr.key] = curr.value
  return acc
},{})
console.log(updatePrtoductInfo)

//2//

const colleges = [

  { item: "Book", university: "Harvard" },

  { item: "Book", university: "MIT" },

  { item: "Book", university: "Stanford" },

];

const universities = colleges.reduce((acc,curr) => {
  acc.push(curr.university)
return acc

},[])
console.log(universities)

//3//

const userPreferences = [

  { key: "theme", value: "Dark Mode" },

  { key: "fontSize", value: 16 },

  { key: "notifications", value: true },

];

const preferences = userPreferences.reduce((acc,curr) => {
  acc[curr.key] = curr.value
return acc
},{})

console.log(preferences)


//4//

const continents = [

  { key: "Asia", country: "India" },

  { key: "Europe", country: "France" },

  { key: "North America", country: "USA" },

];


const countries = continents.reduce((acc,curr) => {
  acc[curr.key]= curr.country
return acc
},{})
console.log(countries)

//5//

const information = [

  { key: "city", value: "New York" },

  { key: "population", value: 8398748 },

  { key: "area", value: 468.9 },

];

const cities = information.reduce((acc,curr) => {
  acc[curr.key] = curr.value
return acc
},{})
console.log(cities)


