import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * Return relative time
 *
 * @param time time to calculate relative time from
 */
export const getRelativeTimeToNow = (time: string) => dayjs().to(dayjs(time));

export default dayjs;
