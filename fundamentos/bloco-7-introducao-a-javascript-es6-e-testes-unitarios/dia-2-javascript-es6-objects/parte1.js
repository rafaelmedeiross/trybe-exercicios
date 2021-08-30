const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
 console.log(`Ola, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, ${order.phoneNumber}, ${Object.values(order.address)}`);
}

customerInfo(order);

const orderModifier = (order) => {
 const novaOrd = Object.assign({}, order);
 novaOrd.name = "Luiz Silva";
 novaOrd.payment.total = "50";

 console.log(`Olá, ${novaOrd.name}, o total do seu pedido é ${novaOrd.payment.total}`)
}

orderModifier(order);
console.log(order);