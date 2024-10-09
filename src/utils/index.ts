export const calculateAge = (birthDate: Date) => {
    const today = new Date();
    const yearsDiff = today.getFullYear() - birthDate.getFullYear();
    const monthsDiff = today.getMonth() - birthDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years}y ${months}m`;
  };
