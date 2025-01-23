// Clase que define un factura (invoice), se necesita:
// Un número de factura
// Concepto
// Número de unidades compradas
// Precio de unidad
// Método: Print que nos enseñara la factura, recogiendo:
//          - Su número
//          - El concepto X numero --- precio
//          - Total + IVA

//  1ra parte: Declaración de propiedades, preferiblemente privadas
//  2da parte: Levantar un constructor
//  3ra parte: Si se necesitasen, iniciamos propiedades y métodos static

class Company {
  #nif;
  #nameCompany;
  constructor(nif, nameCompany) {
    this.#nif = nif;
    this.#nameCompany = nameCompany;
  }

  // print() {
  //   console.log(`
  //       NIF - Empresa: ${this.#nif}
  //       Empresa:       ${this.#nameCompany}
  //     `);
  // }
}

const boeStore = new Company("Z78998765", "BOEE-Store");

export class Invoice {
  // propiedades y métodos static
  static #myCompany = boeStore;
  static #lastID = 0;
  static #getID() {
    const year = new Date().getFullYear();
    const id = String(year) + "/" + String(++this.#lastID);
    return id;
  }

  // Declaración de propiedades
  #invoiceId = Invoice.#getID();
  #client;
  #product;
  #amount;
  #unitPrice;
  #iva;

  // Constructor
  constructor(client, product, amount, unitPrice, iva = 1.12) {
    this.client = client;
    this.#product = product;
    this.#amount = amount;
    this.#unitPrice = unitPrice;
    this.#iva = iva;
  }

  #getClient() {
    return this.client;
  }

  #calculatePrice() {
    return this.#amount * this.#unitPrice;
  }

  print() {
    const price = this.#calculatePrice();
    const total = price * this.#iva;
    const invoice = `
    ${Invoice.#myCompany.nameCompany}
    NIF: ${Invoice.#myCompany.nif}
    Cliente: ${Invoice.client.nameCompany}
    NIF Cliente: ${Invoice.client.nif}
    # Factura ${this.#invoiceId}
    ${this.#product} | ${this.#amount} uni. | ${
      this.#unitPrice
    }€ ----- ${price}€
    Total (IVA) ------ ${total}€
    `;
    console.log(invoice);
  }
}

const client1 = new Company("16756485M", "Ariel");
const invoice1 = new Invoice("apples", 20, 4, 1.04);
const invoice2 = new Invoice("mobile", 1, 400);
const invoice3 = new Invoice(client1, invoice2);

invoice1.print();
invoice2.print();

// Relaciones entre clases: Asociación

// Añadimos:
// - La empresa (NIF - nombre)
// - El cliente (NIF - nombre)
