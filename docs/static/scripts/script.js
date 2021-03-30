let document = document.getElementById("content");
let digits = [];
for(let i  =0; i <10; i++) {
    let digits = {
        container: null,
        content: {
            bar: document.createElement("div"),
            label: document.createElement("div"),
        }
    }

    digits.container.id = i;
    digits.content.bar.id = "bar_" + i;
    digits.content.label.id = "label_" + i;

    digits.content.bar.classList.add("bar");
    digits.content.label.classList.add("label");

    content.appendChild(digits.content.bar);
    digits.container.appendChild(digits.content.bar);
    digits.container.appendChild(digits.content.label);

    digits.content.label.innerHTML = i;
}

