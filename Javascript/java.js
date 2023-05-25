//Website user data coding test

const userName1 = {
    nickname: 'RemaxGP',
    regDate: '11.02.2022',
    birthDate:'26.12.1994',
    managed:true
}
const userName2 = {
    nickname: 'Kirillus',
    regDate: '17.03.2023',
    birthDate: '25.05.1999',
    managed:false
}
function managerCheck() {
 if(userName1.managed === true) {
    console.log('Congratulation! You are managed!')
}
else {
    console.log('Do not supported')
}
}
function managerCheck2() {
    if(userName2.managed === true) {
       console.log('Congratulation! You are managed!')
   }
   else {
       console.log('Do not supported')
   }
   }