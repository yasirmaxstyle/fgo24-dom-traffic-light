const lamp1 = document.querySelector('body>div>div:first-child')
const lamp2 = document.querySelector('body>div>div:nth-child(2)')
const lamp3 = document.querySelector('body>div>div:nth-child(3)')

lamp1.classList.add('red')

// function delay(interval) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve
//         }, interval)
//     })
// }

// delay(3000).then(() => {
//     lamp2.classList.add('yellow')
//     lamp1.classList.remove('red')
//     delay(2000)
// }).then(() => {
//     lamp3.classList.add('green')
//     lamp2.classList.remove('yellow')
//     delay(3000)
// }).then(() => {
//     lamp1.classList.add('red')
//     lamp3.classList.remove('green')
// })

setInterval(() => {
    if (lamp1.classList.contains('red')) {
        setTimeout(() => {
            lamp2.classList.add('yellow')
            lamp1.classList.remove('red')
            if (lamp2.classList.contains('yellow')) {
                setTimeout(() => {
                    lamp3.classList.add('green')
                    lamp2.classList.remove('yellow')
                    if (lamp3.classList.contains('green')) {
                        setTimeout(() => {
                            lamp1.classList.add('red')
                            lamp3.classList.remove('green')
                        }, 3000);
                    }
                }, 2000);
            }
        }, 3000);
    }
}, 0);

