/*

Create an interface StringMap with an index signature that allows any number of string keys to be mapped to string values. Then, create an object dictionary that adheres to StringMap and stores a couple of key-value pairs.

Expected outcome:

The dictionary object should allow string keys with string values, as per StringMap's index signature.

*/

interface StringMap {
  [index: string]: string;
}

const dictionary: StringMap = {
  'Cup_of_1950': 'Uruguay',
  'Cup_of_1954': 'Germany',
  'Cup_of_1958': 'Brazil',
  'Cup_of_1962': 'Brazil',
  'Cup_of_1966': 'England',
}
