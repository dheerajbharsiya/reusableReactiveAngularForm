
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export const dateConfig = {
    minDate: { year: 2000, month: 1, day: 1 },
    maxDate: { year: 2099, month: 12, day: 31 },
    outsideDays: 'hidden',
    markDisabled: (date: NgbDateStruct) => {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }
}