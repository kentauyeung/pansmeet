document.querySelector("#share-post").addEventListener("click", toggleForm)
console.log("main")
function toggleForm(){
    const shareFormStyle = document.querySelector('.share-form').style
    console.log(shareFormStyle["max-height"])
    if (shareFormStyle["max-height"] == "" || shareFormStyle["max-height"] == "0px"){
        shareFormStyle.opacity = 1
        shareFormStyle["max-height"] = "500px"
    }else {
        shareFormStyle.opacity = 0
        shareFormStyle["max-height"] = 0
    }
}