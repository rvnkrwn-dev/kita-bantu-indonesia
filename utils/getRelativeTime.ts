import dayjs from 'dayjs';

export default function getRelativeTime(postedAt: string) {
  const now = dayjs();
  const postedTime = dayjs(postedAt);
  const diffInMinutes = now.diff(postedTime, 'minute');
  const diffInHours = now.diff(postedTime, 'hour');
  const diffInDays = now.diff(postedTime, 'day');
  const diffInMonths = now.diff(postedTime, 'month');

  let displayTime;
  let filterTime;

  // Set displayTime berdasarkan waktu relatif
  if (diffInMinutes < 60) {
    displayTime = `${diffInMinutes} menit yang lalu`;
  } else if (diffInHours < 24) {
    displayTime = `${diffInHours} jam yang lalu`;
  } else if (diffInDays < 30) {
    displayTime = `${diffInDays} hari yang lalu`;
  } else {
    displayTime = `${diffInMonths} bulan yang lalu`;
  }

  // Set filterTime berdasarkan kategori waktu
  if (diffInDays < 1) {
    filterTime = '24 jam terakhir';
  } else if (diffInDays < 7) {
    filterTime = 'Minggu lalu';
  } else if (diffInDays < 30) {
    filterTime = 'Bulan lalu';
  } else {
    filterTime = 'Kapan pun';
  }

  return { displayTime, filterTime };
}
