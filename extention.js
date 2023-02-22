let myleads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
let unorderedEl = document.getElementById('unordered-el')
inputBtn.addEventListener("click", () => {
    myleads.push(inputEl.value)
    for(let i=0;i<myleads.length;i++){
        unorderedEl.innerHTML = `<li>${myleads[i]}</li>`
    }
})

