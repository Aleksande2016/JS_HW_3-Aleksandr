// Задание 1 (+)

let i = 1;

while (i <= 50) {
    console.log(i);
    i++;
}

i = 35;

while (i >= 8) {
    console.log(i);
    i--;
}

// Задание 2  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

i = 89;

while (i >= 11) {
    console.log(i);
    i--;
}

// Задание 3 (+)

let sto = 100,
    sum = 0;

for(q = 0; q <= sto; q++) {
    sum += q;
}

console.log(sum);

// Задание 4

let a = 5,
    summa = 0;
    
for(let d = 1; d <= a; d++) {
    summa = 0;

    for(let j = 1; j <= d; j++) {
        summa += j;
    }

    console.log('Symma ' + d + ' = ' + summa);
}

// Задание 5 (+)

i = 8;

while(i <= 56) {
    console.log(i);
    i += 2;
}

for(let z = 8; z <= 56; z++) {
    if((z + 1) % 2 == 0) continue;

    console.log(z);
}

// Задание 6 (+)

for(let u = 2; u <= 10; u++) {

    for(let w = 1; w <= 10; w++) {
        console.log(`${u}*${w} = ${u*w}`);
    }
}

// Задание 7 

let n = 1000,
    e = 0;

for(; n > 50; n/=2) {
    e += 1;
}

console.log(n, e);

// Задание 8 ----------------------------------------------------------------

let stri = '123',
    sumi = 0;

    for(let i = 0; i < stri.length; i++) {
        console.log(stri[i]);
        sumi += +stri[i];
    }

    console.log(sumi);

// Задание 9 ---------------------------------------------------------------------

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

for(let q = 0; q < str.length; q++) {
    
   // if((str.length - str[q]) != 0 && (str.length - str[q]) != ' ');
    console.log(str.length);
}

// Задание 10