export const getFormattedDate = (dateString: string) => {
  if (!dateString) {
    return 'Present';
  }
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [year, monthIndex, day] = dateString.split('-');
  const monthName = months[Number(monthIndex) - 1];
  return `${monthName} ${year}`;
};
