function formatCurrency(amount: number, country: string, currencyCode: string) {
  const formatter = new Intl.NumberFormat(country, {
    style: 'currency',
    currency: currencyCode,
  });

  return formatter.format(amount);
}

export { formatCurrency };
