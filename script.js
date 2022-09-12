const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
//prints what we said while we speak

let p = document.createElement('p');

recognition.addEventListener('result' , (e) => {

    const x = document.getElementById('para');
    x.classList.add('hide');

    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);
    
    if(e.results[0].isFinal)
    {
        if(text.includes('hello') || text.includes('hey'))
        {
            p = document.createElement('p');
            p.innerText = 'Hey';
            p.classList.add('replay');
            texts.appendChild(p);
        }

        if(text.includes('your name'))
        {
            p = document.createElement('p');
            p.innerText = 'My name is "Talk-Bot"';
            p.classList.add('replay');
            texts.appendChild(p);
        }

        if(text.includes('how are you'))
        {
            p = document.createElement('p');
            p.innerText = 'I\'m Good';
            p.classList.add('replay');
            texts.appendChild(p);
        }

        if(text.includes('YouTube') || text.includes('channel'))
        {
            p = document.createElement('p');
            p.innerText = 'Opening Youtube Channel of Mohak';
            p.classList.add('replay');
            texts.appendChild(p);
            setTimeout(() => {
                window.open('https://www.youtube.com/channel/UCYnaS255ym5yzKy0PX1y5Gg');
            }, 2000);
        }
        p = document.createElement('p');
    }
});

recognition.addEventListener('end' , () => {
    recognition.start();
});

recognition.start();

