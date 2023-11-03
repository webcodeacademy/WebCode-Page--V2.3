const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute("data-them"),
        newTheme 
    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-them', newTheme)

    //set the new local storage item
    localStorage.setItem("Theme", newTheme)
} 

document.querySelector("#darklighticon").addEventListener("click", switchTheme)