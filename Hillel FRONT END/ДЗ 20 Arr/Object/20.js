const customers = [
  {
    id: "A1",
    name: "Oliver",
    verified: true,
  },
  {
    id: "A2",
    name: "alex",
  },
];
const countries = [
  {
    id: "A1",
    country: "usa",
  },
  {
    id: "A2",
    country: "poland",
  },
];

function getCustomers(customers = [], countries = []) {
  return new Promise((resolve, reject) => {
    const result = customers.map((customer) => {
      const country = countries.find((country) => customer.id === country.id);

      if (!country)
        reject(
          `We don't have information about country for this customer: ${customer.name}`
        ); // если не нашли страну с таким же id, то реджект
      if (customer.verified) return { ...customer, ...country };
    });

    resolve(result);
    console.log(customers);
  });
}

getCustomers(customers, countries)
  .then((customers) => console.log(customers)) // [ { id: 'A1', name: 'Oliver', verified: true, country: 'usa' } ]
  .catch((error) => console.log(error));
