class dateTime {

    static getDateTime() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    }

    static getDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    static getTime() {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        return `${hour}:${minute}:${second}`;
    }

    static getDay() {
        let date = new Date();
        let day = date.getDate();
        return `${day}`;
    }

    static getMonth() {
        let date = new Date();
        let month = date.getMonth() + 1;
        return `${month}`;
    }

    static getYear() {
        let date = new Date();
        let year = date.getFullYear();
        return `${year}`;
    }

    static getHour() {
        let date = new Date();
        let hour = date.getHours();
        return `${hour}`;
    }

    static getMinute() {
        let date = new Date();
        let minute = date.getMinutes();
        return `${minute}`;
    }

    static getSecond() {
        let date = new Date();
        let second = date.getSeconds();
        return `${second}`;
    }

    static getDayOfWeek() {
        let date = new Date();
        let day = date.getDay();
        return `${day}`;
    }

    static getDayName() {
        let date = new Date();
        let day = date.getDay();
        let dayName = "";
        switch (day) {
            case 0:
                dayName = "Sunday";
                break;
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
        }
        return `${dayName}`;
    }

    static getMonthName() {
        let date = new Date();
        let month = date.getMonth();
        let monthName = "";
        switch (month) {
            case 0:
                monthName = "January";
                break;
            case 1:
                monthName = "February";
                break;
            case 2:
                monthName = "March";
                break;
            case 3:
                monthName = "April";
                break;
            case 4:
                monthName = "May";
                break;
            case 5:
                monthName = "June";
                break;
            case 6:
                monthName = "July";
                break;
            case 7:
                monthName = "August";
                break;
            case 8:
                monthName = "September";
                break;
            case 9:
                monthName = "October";
                break;
            case 10:
                monthName = "November";
                break;
            case 11:
                monthName = "December";
                break;
        }
        return `${monthName}`;
    }


}

module.exports = dateTime;