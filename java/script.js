document.querySelector('button').addEventListener ('click', function() {
    // 1) Pak een random getal tussen 1 en 2 -> Math.random()
    // 2) Stop dat in een variabele (const, let, var)
    // 3) Stop dat samen met 'rgb' + dat getal in je classlist
    let number = Math.random(...)
    document.querySelector('html').classList.toggle('rgb' + number)
});