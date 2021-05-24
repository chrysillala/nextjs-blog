import {parseISO, format} from 'date-fns';

type dateString = {
  dateString: string
}

export default function Date({ dateString }: dateString) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}