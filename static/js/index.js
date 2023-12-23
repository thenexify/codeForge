const images = document.getElementsByClassName('img')
Array.from(images).forEach(elem=>{
    elem.addEventListener('contextmenu', (e)=>{
        e.preventDefault()
    })
})

const copyLink = document.getElementsByClassName('copy')
Array.from(copyLink).forEach(elem=>{
    elem.addEventListener('click', ()=>{
        const link = `${window.location.href}#${elem.id}`
        elem.title = link
        navigator.clipboard.writeText(link)
    })
})