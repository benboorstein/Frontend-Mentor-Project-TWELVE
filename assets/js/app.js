// MONTHLY subscription:
// - 25K pageviews = $2.00 / month
// - 40K pageviews = $7.00 / month
// - 55K pageviews = $11.50 / month
// - 70K pageviews = $15.50 / month
// - 85K pageviews = $19.00 / month
// - 100K pageviews = $22.00 / month
// - 115K pageviews = $24.50 / month
// - 130K pageviews = $26.50 / month
// - 145K pageviews = $28.00 / month
// - 160K pageviews = $29.00 / month
// - 175K pageviews = $29.50 / month

// YEARLY subscription:
// - 25K pageviews = $18.00 / year
// - 40K pageviews = $63.00 / year
// - 55K pageviews = $103.50 / year
// - 70K pageviews = $139.50 / year
// - 85K pageviews = $171.00 / year
// - 100K pageviews = $198.00 / year
// - 115K pageviews = $220.50 / year
// - 130K pageviews = $238.50 / year
// - 145K pageviews = $252.00 / year
// - 160K pageviews = $261.00 / year
// - 175K pageviews = $265.50 / year

// global variables
const views = document.querySelector('.pageviews-num')
const price = document.querySelector('.price')
const slider = document.getElementById('points')
const toggle = document.getElementById('monthly-yearly-toggle')
const subscriptionPeriod = document.querySelector('.subscription-period')

const mappings = [
    {
        pageviews: 25,
        monthlyPrice: 2.00
    },
    {
        pageviews: 40,
        monthlyPrice: 7.00
    },
    {
        pageviews: 55,
        monthlyPrice: 11.50
    },
    {
        pageviews: 70,
        monthlyPrice: 15.50
    },
    {
        pageviews: 85,
        monthlyPrice: 19.00
    },
    {
        pageviews: 100,
        monthlyPrice: 22.00
    },
    {
        pageviews: 115,
        monthlyPrice: 24.50
    },
    {
        pageviews: 130,
        monthlyPrice: 26.50
    },
    {
        pageviews: 145,
        monthlyPrice: 28.00
    },
    {
        pageviews: 160,
        monthlyPrice: 29.00
    },
    {
        pageviews: 175,
        monthlyPrice: 29.50
    }
]

// // fifth iteration - works
// slider.addEventListener('change', updateText)
// toggle.addEventListener('click', updateText)

// const subscriptionInfo = [
//     {
//         timePeriod: 'month',
//         months: 1,
//         ofMonthlyPrice: 1
//     },
//     {
//         timePeriod: 'year',
//         months: 12,
//         ofMonthlyPrice: .75
//     }
// ]

// function updateText(event) {
//     const object = mappings.find(obj => mappings.indexOf(obj) === +slider.value) 
//     views.textContent = (object.pageviews).toString()

//     // note exactly how '+event.target.checked' and '+toggle.checked' are used as boolean values (this is why Robert had me explore this way of writing the below code)
//     if (event.target.type === 'checkbox') {
//         price.textContent = (object.monthlyPrice * subscriptionInfo[+event.target.checked].months * subscriptionInfo[+event.target.checked].ofMonthlyPrice).toFixed(2)
//         subscriptionPeriod.textContent = subscriptionInfo[+event.target.checked].timePeriod
//     } else { // i.e., if the 'event.target.type' is 'range'
//         price.textContent = (object.monthlyPrice * subscriptionInfo[+toggle.checked].months * subscriptionInfo[+toggle.checked].ofMonthlyPrice).toFixed(2)
//         subscriptionPeriod.textContent = subscriptionInfo[+toggle.checked].timePeriod
//     }
// }


// fourth iteration - works
slider.addEventListener('change', updateText)
toggle.addEventListener('click', updateText)

function updateText() {
    const object = mappings.find(obj => mappings.indexOf(obj) === +slider.value) 
    views.textContent = (object.pageviews).toString()

    if (toggle.checked) {
        price.textContent = (object.monthlyPrice * 12 * .75).toFixed(2)
        subscriptionPeriod.textContent = 'year'
    } else {
        price.textContent = (object.monthlyPrice).toFixed(2)
        subscriptionPeriod.textContent = 'month'
    }
}


// // third iteration - works
// slider.addEventListener('change', () => { manageStuff() })

// toggle.addEventListener('click', function() { manageStuff() })

// function manageStuff() {
//     if (toggle.checked === false) {
//         updateText('month', 1, 1)
//     } else {
//         updateText('year', 12, .75)
//     }
// }

// function updateText(subscriptionText, n1, n2) {
//     const getObj = mappings.find(obj => mappings.indexOf(obj) === +slider.value)
//     views.textContent = (getObj.pageviews).toString()
//     price.textContent = (getObj.monthlyPrice * n1 * n2).toFixed(2)
//     subscriptionPeriod.textContent = subscriptionText
// }


// // second iteration - works
// slider.addEventListener('change', manageStuff)
// toggle.addEventListener('click', manageStuff)

// function manageStuff() {
//     if (toggle.checked === false) {
//         updateText(mappings, 'month', 1, 1)
//     } else {
//         updateText(mappings, 'year', 12, .75)
//     }
// }

// function updateText(arr, subscriptionText, n1, n2) {
//     arr.forEach((obj, i) => {
//         if (slider.value === i.toString()) {
//             views.textContent = (obj.pageviews).toString()
//             price.textContent = (obj.monthlyPrice * n1 * n2).toFixed(2)
//             subscriptionPeriod.textContent = subscriptionText
//         }
//     })
// }


// // first iteration - works
// slider.addEventListener('change', () => {
//     manageStuff(mappings)
// })

// toggle.addEventListener('click', function() {
//     manageStuff(mappings)
// })

// function manageStuff(arr) {
//     arr.forEach((obj, i) => {
//         if (toggle.checked === false) {
//             if (slider.value === i.toString()) {
//                 views.textContent = (obj.pageviews).toString()
//                 price.textContent = (obj.monthlyPrice).toFixed(2)
//                 subscriptionPeriod.textContent = 'month'
//             }
//         } else {
//             if (slider.value === i.toString()) {
//                 views.textContent = (obj.pageviews).toString()
//                 price.textContent = (obj.monthlyPrice * 12 * .75).toFixed(2)
//                 subscriptionPeriod.textContent = 'year'
//             }
//         }
//     })
// }