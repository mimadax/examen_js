class Darklight {
    constructor(rootElement) {
        this.root = rootElement; 
        this.lightThemeBtn = lightThemeBtn;
        this.darkThemeBtn = darkThemeBtn;

        this.addEventListeners();
    }
}

// localStorage.setItem('lightThemeBtn', 'darkThemeBtn');

button.addEventListeners("click", () => {
    document.body.classList.darkThemeBtn("dark");
    if (theme === "dark") {
        document.body.classList.lightThemeBtn("light"); 
    } else document.body.classList.lightThemeBtn("light"); 
});
