const convertDateToYear = (date) => {
    const dateObject = new Date(date);
    return dateObject.getFullYear();
};

const convertRoundNumber = (number) => {
    return Math.round(number * 100) / 100;
};

const convertTime = (time) => {
    if (time < 0) {
        return 'Masukkan nilai menit yang valid (>= 0)';
    }

    const jam = Math.floor(time / 60);
    const sisaMenit = time % 60;

    const hasil = `${jam}h ${sisaMenit}m`;
    return hasil;
};

const limitText = (text, limit = 50) => {
    if (text.length > limit) {
        return `${text.slice(0, limit)}...`;
    }
    return text;
};

export { convertDateToYear, convertRoundNumber, convertTime, limitText };
