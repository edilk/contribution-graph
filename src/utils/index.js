import { addDays, format, isSunday, nextSunday, startOfToday, subDays } from "date-fns"

export const months = [];
export const getDateArray = (dates) => {

    const dateArray = [];

    let today = startOfToday();
    if (!isSunday(new Date())) {
        today = nextSunday(new Date());
    }

    let startDate = subDays(today, 356);
    let currentDate = startDate;

    while (currentDate <= today) {
        const formattedDate = format(currentDate, 'yyyy-MM-dd');
        const formattedMonth = format(currentDate, 'MM');
        const tooltip = format(currentDate, 'eeee, MMMM dd, yyyy');
        const mon = getMonthName(formattedMonth);
        if (!months) {
            months.push(mon);
        }
        if (!months.includes(mon)) {
            months.push(mon);
        }
        let contributions = 0;

        const dateExists = dates.find((item) => item.date === formattedDate);

        if (dateExists) {
            contributions = dateExists.contributions;
        } 
        dateArray.push(
            {
                date: formattedDate,
                contributions: contributions,
                tooltip: tooltip
            });

        currentDate = addDays(currentDate, 1);
    }
    

    return dateArray;
}

const getMonthName = (str) => {
    let month = '';

    switch(str) {
        case '01': {
            month = 'Янв.';
            break;
        }
        case '02': {
            month = 'Февр.';
            break;
        }
        case '03': {
            month = 'Март';
            break;
        }
        case '04': {
            month = 'Апр.';
            break;
        }
        case '05': {
            month = 'Май';
            break;
        }
        case '06': {
            month = 'Июнь';
            break;
        }
        case '07': {
            month = 'Июль';
            break;
        }
        case '08': {
            month = 'Авг.';
            break;
        }
        case '09': {
            month = 'Сент.';
            break;
        }
        case '10': {
            month = 'Окт.';
            break;
        }
        case '11': {
            month = 'Нояб.';
            break;
        }
        case '12': {
            month = 'Дек.';
            break;
        }
        default: {
            break;
        }
    }

    return month;
}