const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/patients/:amount', (req, res) => {
  const patients = [];
  const { amount } = req.params;

  for (let i = 0; i < amount; i++) {
    const patient = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      streetName: faker.address.streetName(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
      dateOfBirth:faker.date.past(),
    };

    patients.push(patient);
  };

  res.json(patients)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))