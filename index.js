let messageArea = document.querySelector("#talk");
let jmessageArea = $('#talk');
console.log(jmessageArea);

let jmessageElement = $("<div class='message d-flex lex-row align-items-start mb-4'></div>")
let text1 = 'd';
let jmessageIconElement = $("<div class='message-icon rounded-circle text-white fs-5'>  </div>")
jmessageIconElement.text(text1);
jmessageIconElement.addClass('bg-success');
jmessageElement.prepend(jmessageIconElement);

let jmessageTextElement = $("<p class='message-text p-2 ms-2 mb-0'></p>").html('abc');
jmessageTextElement.append('<br>');
jmessageTextElement.append('aaa');

jmessageElement.append(jmessageTextElement);
jmessageElement.append("<br>");
jmessageArea.append(jmessageElement);

let messageElement = document.createElement("div");
messageElement.classList.add('message','d-flex','lex-row','align-items-start','mb-4');
console.log(messageElement);

let messageIconElement = document.createElement("div");
messageIconElement.classList.add('message-icon','rounded-circle','bg-secondary','text-white','fs-5');

let messageIconImageElement = document.createElement("i");
let messageIconText = document.createTextNode("テ");

messageIconElement.appendChild(messageIconText);

let messageUserTextElement = document.createElement("p");
messageUserTextElement.classList.add('message-text', 'p-2', 'ms-2', 'mb-0');
let messageUserText = document.createTextNode("testffffffffffffffffffffff ");

let messageTextElement = document.createElement("p");
messageTextElement.classList.add('message-text', 'p-2', 'ms-2', 'mb-0');
let messageText = document.createTextNode("abc");

let messageTextElement2 = document.createElement("p");
messageTextElement2.classList.add('message-text', 'p-2', 'ms-2', 'mb-0');
let messageText2 = document.createTextNode("bdf");

messageTextElement.appendChild(messageUserText);
messageTextElement.appendChild(document.createElement('BR'));

messageTextElement.appendChild(messageText);
messageTextElement.appendChild(document.createElement('BR'));
messageTextElement.appendChild(messageText2);

messageElement.appendChild(messageIconElement);
messageElement.appendChild(messageTextElement);

document.body.appendChild(messageArea).appendChild(messageElement)
