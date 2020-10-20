
export const capitalizeThis = (searchAdress) => {
    if (typeof searchAdress !== 'string') {
        return '';
    } else {
        return searchAdress.charAt(0).toUpperCase() + searchAdress.slice(1);
    }
}

export const filterPopupData = (mapLocation) => {
    // mapLocation.properties.START_WEEKDAY
    // mapLocation.properties.START_TIME
    // mapLocation.properties.END_TIME
    mapLocation.filter()
}

// Given time as a number representing 13.00 as 1300 
// Return datetime as an Date().getHours() instead.
export const adressTimeConverter = time => {
    let newTime = new Date(0,0,0, time / 100);
    return newTime.getHours();
}

// Temporary solution to format the time recieved from endpoint. 
// Reformat using new Intl.DateTimeFormat ( Better performace )
export const adressTimeConverterToString = time => {

    let newTime = new Date(0,0,0, time / 100);
    let options = {
        hour: "2-digit", minute: "2-digit"
    };
    return newTime.toLocaleTimeString("sv", options);
}

// Given adress data, return bool if its _currently_ forbidden to park there.
export const isAdressCurrentlyForbidden = date => {
    // Get current date
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var hh = today.getHours();
    // var minutes = String(today.getMinutes());
    // How to get the locale day string from given Date object?
    let options = {
        weekday: 'long'
    };
    const dayIs = new Intl.DateTimeFormat('sv', options).format(today);

    today = dd + '/' + mm
    // console.log("Today is: " +  dd + " -> " + dayIs + " Given date: " + date.day );
    // want date.starthour as a 2digit number
    if (dayIs === date.day) {
        if(hh >= date.startHour && hh <= date.endHour ) {
            // Hours match
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// Given data array, return center position of first adress, or return default.
export const helpFindCenter = data => {
    // If data, return first elements position arr
    //console.log("Inside helpFindCenter conditional ", data);
    if (data.data) {
        if (data.data.length && data.data[0]) {
            //console.log("Inside helpFindCenter conditional");
            return [data.data[0].geometry.coordinates[0][1], data.data[0].geometry.coordinates[0][0]];
        }
    } else {
        // Return default center value
        return [59.339891, 18.046240];
    }
};