const FnList = [ //[제목, 굵게, 밑줄, 인용문, 코드블럭, 링크, 이미지]
    {
        start : "#",
        end : "",
        icon : '<i class="fa-solid fa-heading"></i>'
    },
    {
        start : "**",
        end : "**",
        icon : '<i class="fa-solid fa-bold"></i>'
    },
    {
        start : "__",
        end : "__",
        icon : '<i class="fa-solid fa-underline"></i>'
    },
    {
        start : "> ",
        end : "",
        icon : '<i class="fa-solid fa-quote-left"></i>'
    },
    {
        start : "```",
        end : "```",
        icon : '<i class="fa-solid fa-code"></i>'
    },
    {
        start : "[링크](url)",
        end : "",
        icon : '<i class="fa-solid fa-link"></i>'
    },
    {
        start : "![이미지 설명/필수 아님](url)",
        end : "",
        icon : '<i class="fa-solid fa-image"></i>'
    }
]

const CreateBtnElement = (FnStart,FnEnd,icon) => {
    return `<button data-start="${FnStart}" data-end="${FnEnd}">${icon}</button>`
}

const CreateAllButton = (FnList) => {
    const box = document.getElementById("Button-Box")
    console.log(box);
    FnList.map(obj => {
        const {start , end , icon} = obj;
        box.innerHTML += CreateBtnElement(start,end,icon)
    })
}

const CreateBtnBox = container => {
    const ButtonBox = document.createElement("div")
    ButtonBox.id = "Button-Box"
    container.appendChild(ButtonBox)
    CreateAllButton(FnList)

}

const CreateTextarea = container => {
    const textarea = document.createElement("textarea")
    textarea.id = "Editor"
    textarea.rows = 6
    container.appendChild(textarea)
}

(()=> {
    const container = document.getElementById("Editor-container")
    CreateBtnBox(container)
    CreateTextarea(container)
    
})()

const textarea = document.getElementById("Editor")

textarea.addEventListener("input", (event)=> {
    document.getElementById("preview").innerHTML = marked.parse(event.target.value)
})