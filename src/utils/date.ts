export const toHoursAndMinutes = (
    totalMinutes: number,
    twoDigits: boolean
) => {

    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return {
        hours: twoDigits ? padTo2Digits(hours) : hours.toString(),
        minutes: twoDigits ? padTo2Digits(minutes) : minutes.toString()
    }
}

const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
}