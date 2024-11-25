// const dayElem = document.getElementById('day');
//         const hourElem = document.getElementById('hour');
//         const minuteElem = document.getElementById('minute');
//         const secondElem = document.getElementById('second');
//         const birthdayMessage = document.getElementById('birthday-message');
//         const birthday = new Date(2024, 10, 29); 

//         const formatNum = (num) => num < 10 ? `0${num} : num`; 

//         setInterval(() => {
//             const timeDifference = birthday - new Date();

//             if (timeDifference <= 0) {
//                 birthdayMessage.style.display = 'block';
//                 document.querySelector('.timer').style.display = 'none';
//                 return;
//             }

//             const days = formatNum(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
//             const hours = formatNum(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//             const minutes = formatNum(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
//             const seconds = formatNum(Math.floor((timeDifference % (1000 * 60)) / 1000));

//             dayElem.textContent = `${days}:`;
//             hourElem.textContent = `${hours}:`;
//             minuteElem.textContent = `${minutes}:`;
//             secondElem.textContent = seconds; 
//         }, 1000);