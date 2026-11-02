const addTest = document.getElementById("addtest")
const fileInput = document.getElementById("fileInput")
const manual = document.getElementById("manual")
const grades = document.getElementById("grades")
let deletebtn = document.querySelectorAll(".deleteButton")
let classificationlist = document.querySelectorAll(".classification")
const gradesindv = document.querySelectorAll("tr")

function popUp(){
    const overlay = document.createElement("div")
        overlay.id = "grademenu"
        overlay.className = "grade-menu-overlay"
    const innermenu = document.createElement("div")
        innermenu.className = "grade-menu"
    const classification = document.createElement("select")
        classification.id="classification"
        const test = document.createElement("option")
            test.className = "subjects"
            test.textContent = "test"
            test.value = "test"
        const quiz = document.createElement("option")
            quiz.className = "subjects"
            quiz.textContent = "quiz"
            quiz.value = "quiz"
        const homework = document.createElement("option")
            homework.className = "subjects"
            homework.textContent = "homework"
            homework.value = "homework"
        classification.append(test, quiz, homework)
        classificationlist = document.querySelectorAll(".classification")
    const date = document.createElement("input")
        date.type= "date", date.id="examdate"
    const score = document.createElement("input")
        score.type= "number", score.id="score"
    const submitButton = document.createElement("button")
        submitButton.id ="manualsubmit"
        submitButton.textContent = "addGrade"
    const cancelButton = document.createElement("button")
        cancelButton.id = "cancel"
        cancelButton.textContent = "cancel"
    submitButton.addEventListener("click", () => {
        tableEdit(overlay, classification, date, score)
    })
    cancelButton.addEventListener("click", () => {
        overlay.remove()
    })

    innermenu.append(classification, date, score, submitButton, cancelButton)
    overlay.appendChild(innermenu)
    document.body.appendChild(overlay)


}

function tableEdit(overlay, classification, date, score){
    if (classification && date && score){
    const newRow = document.createElement("tr")
    const newclassification = document.createElement("td")
    newclassification.textContent = classification.value
    newclassification.className="classification"
    const newDate = document.createElement("td")
    newDate.textContent = date.value
    newDate.className="date"
    const newScore = document.createElement("td")
    newScore.textContent = score.value
    newScore.className="score"
    const impact = document.createElement("td")
    impact.textContent = calculateImpact(score, classification)
    const deleteSection = document.createElement("td")
    const deleteButton = document.createElement("button")
    deleteButton.textContent = " delete "
    deleteButton.className = "deleteButton"
    deleteSection.appendChild(deleteButton)
    newRow.append(newDate, newclassification, newScore, impact, deleteSection)
    grades.appendChild(newRow)
     deleteButton.addEventListener("click", deleteRow)
    overlay.remove()
    }
}
function deleteRow(){
    const delrow = this.closest("tr")
    delrow.remove()
}
manual.addEventListener("click", popUp)
deletebtn.forEach(button =>{
    button.addEventListener("click", deleteRow)
})

function calculateImpact(y, z){
    let counter = 1
    let scorecounter = 0

        classificationlist.forEach(thing=>{
            console.log("thing",thing.textContent)
            console.log("z",z.textContent)

           if (thing.textContent == z.textContent){
            counter += 1
            scorecounter += thing.closest("#score").value
           }
        })
        console.log(counter)
    let impact = (scorecounter + y.value) / counter;
    return impact
    }


function recieveFile(file){
    if (file.files.length > 0){
        const tfile = file.files[0]
        const data = new FormData()
        data.append("test uploaded", tfile)
    }
}
