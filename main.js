const answerBtn = document.getElementById('btn')
const textBox = document.querySelector('#inputText')

const getAnswer = (event) => {
    event.preventDefault()
    axios.get('http://localhost:5500/api/answer')
    .then(res => {
        const data = res.data;
        console.log(data)
        displayAlert(data)
    })

}
const getQuestion = () => {
    let body = {
    question:
    textBox.textContent
    }

    axios.post('http://localhost:5500/api/question', body)
    .then(res => {
        const data = res.data
        displayAlert(data)
        alert(data)
    })
}

function displayAlert(data) {
    const answerDiv = document.getElementById('answerBox')
    const answerEl = document.createElement('span')
    answerEl.innerHTML=data
    answerEl.classList.add('answer')
    answerDiv.appendChild(answerEl)
}

answerBtn.addEventListener('click', getAnswer)
