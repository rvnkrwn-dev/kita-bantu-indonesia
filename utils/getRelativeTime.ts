import dayjs from "dayjs";

export default function getRelativeTime(postedAt : string) {
  const now = dayjs();
  const postedTime = dayjs(postedAt);
  const diffInMinutes = now.diff(postedTime, 'minute');

  if (diffInMinutes < 60) {
      return `${diffInMinutes} menit yang lalu`;
  } else {
      const diffInHours = now.diff(postedTime, 'hour');
      if (diffInHours < 24) {
          return `${diffInHours} jam yang lalu`;
      } else {
          const diffInDays = now.diff(postedTime, 'day');
          if (diffInDays < 30) {
              return `${diffInDays} hari yang lalu`;
          } else {
              const diffInMonths = now.diff(postedTime, 'month');
              return `${diffInMonths} bulan yang lalu`;
          }
      }
  }
}

