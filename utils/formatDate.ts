const formatDate = (dateValue?: string | number | Date) => {
  let date = new Date();

  if (dateValue) {
    date = new Date(dateValue);
  }

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedDate;
};

export default formatDate;
