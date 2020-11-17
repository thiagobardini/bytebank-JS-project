class customer {
  name;
  lastName;
  profession;
  mobile;
}

const customer1 = new customer();
const customer2 = new customer();

customer1.name = "Thiago";
customer1.lastName = "Bardini";
customer1.profession = "Software Engineering";
customer1.mobile = 9786487075;

customer2.name = "Thiago";
customer2.lastName = "Bardini";
customer2.profession = "Software Engineering";
customer2.mobile = 9786487075;

console.log(customer1,`\n\n\n`, customer2);

console.log(`\n\nName:`,customer1.name)