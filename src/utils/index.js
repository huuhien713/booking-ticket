export const randomReview = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // tạo số ngẫu nhiên
        let random = Math.floor(Math.random()* 19);
        // duyệt mảng tìm item có index = arr[random]
        const temp = newArr.findIndex(item => {
          return item === arr[random];
        });
        // push vào mảng mới
        if (temp === -1) {
          newArr.push(arr[random])
        }
    }
    return newArr;
}


export const changeDay = (day) => {
  switch(day) {
      case 0 : return 'chủ nhật';
      case 1 : return 'thứ 2';
      case 2 : return 'thứ 3';
      case 3 : return 'thứ 4';
      case 4 : return 'thứ 5';
      case 5 : return 'thứ 6';
      case 6 : return 'thứ 7';           
      default: return '';
  }
}

export const changeDate = (num) => {
  switch(num - 6) {
      case 1 : return 0;
      case 2 : return 1;
      case 3 : return 2;
      case 4 : return 3;
      case 5 : return 4;
      case 6 : return 5;
      case 7 : return 6; 
      default: return num
  }
}

export const changeName = (name) => {
  switch(name) {
      case('bhd') : return 'BHDStar';
      case('cgv') : return 'CGV';
      case('cns') : return 'CineStar';
      case('glx') : return 'Galaxy';
      case('lotte') : return 'LotteCinima';
      case('megags') : return 'MegaGS';
      default: return ''
  }
}