const FnList = [
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


(()=> {
    const container = document.getElementById("Editor-container")
    CreateBtnBox(container)
})()