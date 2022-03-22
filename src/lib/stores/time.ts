import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';

export const time = interval(1).pipe(map((_) => DateTime.local()));
