const addTest = document.getElementById("addtest")
const fileinput = document.getElementById("fileinput")
const manual = document.getElementById("manual")
const grades = document.getElementById("grades")


function popUp(){
    const newWindow = window.open(newTest, "width = 400, height= 600");
    const subject = document.createElement("input")
                                        subject.type= "text", subject.id="subject"
    const date = document.createElement("input")
                                        date.type= "date", input.id="examdate"
    const score = document.createElement("input")
                                        score.type= "number", id="score"
    document.appendChild(newWindow)
    newWindow.appendChild("subject")
    newWindow.appendChild("date")
    newWindow.appendChild("score")
    const newButton = document.createElement("button")
                                        newButton.id ="manualsubmit"
}

function tableEdit(){
    if (subject && date && score)
    const newSubject = document.createElement("tr")
    newSubject.textContent = subject.value
    const newDate = document.createElement("tr")
    newDate.textContent = date.value
    const newScore = document.createElement("tr")
    newScore.textContent = score.value
    grades.appendChild("newDate", "newSubject", "newScore")
}

manual.addEventListener("click", popUp())

function recieveFile(file){
    if file.files.length > 0{
        const tfile = file.files[0]
        const data = new FormData()
        data.append("test uploaded", tfile)
    }
}
