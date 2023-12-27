import InvoiceApartmentService from "../../service/InvoiceApartmentService.js";

export default async function seedInvoiceApartment() {
  const invoiceApartments = [
    {
      ApartmentId: 1,
      InvoiceId: 1,
      description: "Tiền quản lý tháng 1",
      amount: 100000,
      startDate: "2021-01-01",
      endDate: "2021-01-31",
      status: "paid",
      paidDate: "2021-01-31",
    },
    {
      ApartmentId: 2,
      InvoiceId: 1,
      description: "Tiền quản lý tháng 2",
      amount: 1000000,
      startDate: "2021-01-01",
      endDate: "2021-01-31",
      status: "unpaid",
    },
    {
      ApartmentId: 3,
      InvoiceId: 3,
      description: "Tiền vệ sinh tháng 1",
      amount: 2500000,
      startDate: "2021-01-01",
      endDate: "2021-01-31",
      status: "paid",
      paidDate: "2021-01-31",
    },
    {
      ApartmentId: 4,
      InvoiceId: 4,
      description: "Tiền vệ sinh tháng 2",
      amount: 2000000,
      startDate: "2021-01-01",
      endDate: "2021-01-31",
      status: "unpaid",
    },
  ];

  for (let invoiceApartment of invoiceApartments) {
    const result = await InvoiceApartmentService.createInvoiceApartment(
      invoiceApartment
    );
  }

  return;
}
