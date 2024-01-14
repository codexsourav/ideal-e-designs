export const futureTime = (min) => {
    let now = new Date();
    now.setMinutes(now.getMinutes() + min);
    now = new Date(now);
    return now;
};
export function isDateUpToCurrent(dateToCheck) {
    const currentDate = new Date();
    const inputDate = new Date(dateToCheck);
    return inputDate <= currentDate;
}
