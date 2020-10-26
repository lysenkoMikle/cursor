let u = 26;
let e = 31;
let r = 2.3;

const usd = document.getElementById('usd');
const euro = document.getElementById('euro');
const rub = document.getElementById('rub');
const content = document.getElementsByClassName('content');
const error = document.getElementsByClassName('error');

//controlPrice = () => {
    // if (currency > 26) return;
    // else if (currency < 26 && currency > 23) {
    //     currency = 26;
    //     console.log(currency);
    // }
    // else if (currency < 23 || currency === 23) {

    //     content[0].style.display = 'none';
    //     error[0].style.display = 'block';

    // }
/*switch (true) {
        case currency > 26:
            return;
            break;
        case currency < 26 && currency > 23:
            currency = 26;
            break;
        case currency < 23 || currency === 23:
            content[0].style.display = 'none';
            error[0].style.display = 'block';
            break;
    }    
}*/
//controlPrice();
const usdBuy = 1 * u;
const euroBuy = 1 * e;
const rubBuy = 1 * r;
const usdSell = 1.1 * u;
const euroSell = 1.1* e;
const rubSell = 1.1 * r;
usd.innerText = usdBuy;
euro.innerText = euroBuy;
rub.innerText = rubBuy;
usd1.innerText = usdSell.toFixed(1);
euro1.innerText = euroSell.toFixed(1);
rub1.innerText = rubSell.toFixed(1);