const percentBtns = document.querySelectorAll('.card-number')
percentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        percentBtns.forEach(btn2 => {
            btn2.classList.remove('active')
        })
        btn.classList.add('active')
    })
})