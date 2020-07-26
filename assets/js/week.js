/*function(year, month) {
    let monthIndex = month - 1; # 0..11 instead of 1..12
    let names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    let date = new Date(year, monthIndex, 1);
    let result = [];

    while (date.getMonth() == monthIndex) {
      result.push(date.getDate() + "-" + names[date.getDay()]);
      date.setDate(date.getDate() + 1);
    }
    return result;
  }*/