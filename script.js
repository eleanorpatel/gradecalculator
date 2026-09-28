const addTest = document.getElementById("addtest")
const fileinput = document.getElementById("fileinput")
const manual = document.getElementById("manual")
const grades = document.getElementById("grades")


function popUp(){
    const newWindow = window.open(newTest, "width = 400, height= 600");
    const name = document.createElement("input")
                                        name.type= "text", name.id="name"
    const date = document.createElement("input")
                                        date.type= "date", input.id="examdate"
    const score = document.createElement("input")
                                        score.type= "number", id="score"
    document.appendChild(newWindow)
    newWindow.appendChild("name")
    newWindow.appendChild("date")
    newWindow.appendChild("score")
    const newButton = document.createElement("button")
                                        newButton.id ="manualsubmit"
}

function tableEdit(){
    if (name && date && score)
    const newRow = document.createElement("tr")
    newRow.textContent = name.value
    
}

manual.addEventListener("click", popUp())

function recieveFile(file){
    if file.files.length > 0{
        const tfile = file.files[0]
        const data = new FormData()
        data.append("test uploaded", tfile)
    }
}
