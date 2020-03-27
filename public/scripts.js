function onOff() {

    document.querySelector("#modal").classList.toggle("hide");
    document.querySelector("body").classList.toggle("hideScroll");
    
    document.querySelector("#modal").classList.toggle("addScroll");
}


function checkFields(event) {

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link"
    ]

    const required = valuesToCheck.find(function(value) {
        
        const isString = typeof event.target[value].value === "string"
        const isEmpty = !event.target[value].value.trim()
        
        if( isString && isEmpty ) {
            return true
        }
    })

    if(required) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }

}