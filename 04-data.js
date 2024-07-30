// // console.log(new Date()) // время прямо сейчас

// // const now = new Date ()

// // const start = new Date(1000 * 60 * 60 * 24 * 365) // другое какое то время

// // const date = new Date(2011, 0, 4, 12, 42)

// // console.log(now.getFullYear())
// // console.log(now.getMonth())
// // console.log(now.getDate())
// // console.log(now.getHours())
// // console.log(now.getMinutes())
// // console.log(now.getSeconds())
// // console.log(now.getMilliseconds())

// // now.setFullYear(2055)

// // console.log(now.toDateString())
// // console.log(now.toDateString())
// // console.log(now.toLocaleDateString())
// // console.log(now.toLocaleTimeString())





// /* data time практика 3 =====================================
// */

// const now = new Date()
let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
    return function() {
        mode = name 
        update()
    }
} // более улудшенная версия с нажатием на клавиши

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')

// fullBtn.onclick = function() {
//     mode = 'full'
//     update()
// }

// dateBtn.onclick = function() {
//     mode = 'date'
//     update()
// }

// timeBtn.onclick = function() {
//     mode = 'time'
//     update()
// }


setInterval(update, 100)
update()

function update() {
    output.textContent = format(mode)
}

// /* pure function 
// */
function format(formatMode) {
    const now =  new Date()

    switch (formatMode) {
        case 'time': return now.toLocaleTimeString()
        // case 'time': return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'date': return now.toLocaleDateString()
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default: return now.toLocaleTimeString()
    }
}