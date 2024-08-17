/*

  The processOrder function shown below accepts the following arguments: price, quantity, discount, serviceCharge and tax. Any arguments other than price may be omitted when calling the function, in which case, default values will be assigned.

  function processOrder(price, quantity, discount, serviceCharge, tax) {
    if (!quantity) {
      quantity = 1;
    }

    if (!discount) {
      discount = 0;
    }

    if (!serviceCharge) {
      serviceCharge = 0.1;
    }

    if (!tax) {
      tax = 0.15;
    }

    return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
  }

  processOrder(100);      // 126.5

  This function uses conditional statements to test whether arguments have been omitted. When an argument is omitted, JavaScript automatically initializes it to a value of undefined. The function takes advantage of this behavior by setting undefined arguments to a default value.

  The following variation of the processOrder function has the same behavior as the first:

  function processOrder(price, quantity, discount, serviceCharge, tax) {
    quantity = quantity || 1;
    discount = discount || 0;
    serviceCharge = serviceCharge || 0.1;
    tax = tax || 0.15;

    return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
  }

  However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

  Solution:

  1) If either quantity, serviceCharge or tax is passed as argument with the value of 0, it will be reassigned to the default value. 
  2) If the function is to be called without the default value for one of the parameters: quantity, discount, serviceCharge and tax, it needs to be given an argument corresponding to all the previous parameters before itself in the function declaration. For example, if a value different from the default is to be assigned to serviceCharge, then it is necessary to provide a value for quantity and discount also. Only quantity can be given a non-default value without bringing forth the need to others non-default. 

*/
