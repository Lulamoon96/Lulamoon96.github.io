var box = document.getElementById("box")
box.style.opacity = 1

document.getElementById("button1").addEventListener("click", function(){
        var ht =  parseFloat(box.style.height)
        var wd = parseFloat(box.style.width)
        box.style.height = ht + 10 + "px"
        box.style.width = ht + 10 + "px"
})

document.getElementById("button2").addEventListener("click", function(){
    if (box.style.backgroundColor == "orange") {
        box.style.backgroundColor = "blue"
        return
    }

    if (box.style.backgroundColor == "blue") {
        box.style.backgroundColor = "cyan"
        return
    }

    if (box.style.backgroundColor == "cyan") {
        box.style.backgroundColor = "navy"
        return
    }

    if (box.style.backgroundColor == "navy") {
        box.style.backgroundColor = "aqua"
        return
    }

    if (box.style.backgroundColor == "aqua") {
        box.style.backgroundColor = "blue"
        return
    }
})

document.getElementById("button3").addEventListener("click", function(){
    var op = parseFloat(box.style.opacity)
    box.style.opacity = op - 0.04
})

document.getElementById("button4").addEventListener("click", function(){
    box.style.opacity = 1
    box.style.height = "150px"
    box.style.width = "150px"
    box.style.backgroundColor = "orange"
})