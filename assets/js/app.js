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

slider.addEventListener('change', () => {
    mappings.forEach((obj, i) => {
        manageStuff(obj, i)
    })
})

toggle.addEventListener('click', function() {
    mappings.forEach((obj, i) => {
        manageStuff(obj, i)
    })
})

function manageStuff(object, index) {
    if (toggle.checked === false) {
        if (slider.value === index.toString()) {
            views.textContent = (object.pageviews).toString()
            price.textContent = (object.monthlyPrice).toFixed(2)
            subscriptionPeriod.textContent = 'month'
        }
    } else {
        if (slider.value === index.toString()) {
            views.textContent = (object.pageviews).toString()
            price.textContent = (object.monthlyPrice * 12 * .75).toFixed(2)
            subscriptionPeriod.textContent = 'year'
        }
    }
}