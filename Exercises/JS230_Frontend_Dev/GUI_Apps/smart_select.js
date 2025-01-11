/*

Problem with car filtering
The car filtering application that we developed in the previous exercise works fine, but it has a small problem. When we select a car make from the filtering options, the model selection options remain the same. Ideally, selecting a specific make should limit the possible model choices to cars made by that manufacturer.

Required change
Make the changes needed in the car filtering application so that selecting a make restricts the model choices to the manufacturer's models.

*/

const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];
let makes = cars.map(car => car.make);
makes = makes.filter((item, index) => makes.indexOf(item) === index);
let models = cars.map(car => car.model);
models = models.filter((item, index) => models.indexOf(item) === index);
let years = cars.map(car => car.year);
years = years.filter((item, index) => years.indexOf(item) === index);
let prices = cars.map(car => car.price);
prices = prices.filter((item, index) => prices.indexOf(item) === index);
const filtersTemplate = Handlebars.compile($('#filters_template').html());
const carsTemplate = Handlebars.compile($('#cars_template').html());
const carTemplate = Handlebars.compile($('#car_template').html());
Handlebars.registerPartial('car_template', $('#car_template').html());

$(function() {
  $('#filters').append(filtersTemplate({makes, models, prices, years}));
  $('#cars').append(carsTemplate({cars}));

  $('button.filter_btn').on('click', e => {
    const make = $('#make_select').val();
    const model = $('#model_select').val();
    const year = $('#year_select').val();
    const price = $('#price_select').val();
    const filteredCars = cars.filter(car => {
      return (
        (!make || car.make === make) &&
        (!model || car.model === model) &&
        (!year || car.year === year) &&
        (!price || car.price === price)
      )
    });
    $('#cars').empty();
    $('#cars').append(carsTemplate({cars: filteredCars}));

    let makes = filteredCars.map(car => car.make);
    makes = makes.filter((item, index) => makes.indexOf(item) === index);
    let models = filteredCars.map(car => car.model);
    models = models.filter((item, index) => models.indexOf(item) === index);
    let years = filteredCars.map(car => car.year);
    years = years.filter((item, index) => years.indexOf(item) === index);
    let prices = filteredCars.map(car => car.price);
    prices = prices.filter((item, index) => prices.indexOf(item) === index);
    $('#filters').empty();
    $('#filters').append(filtersTemplate({makes, models, prices, years}));
  });
});
