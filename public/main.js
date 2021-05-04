document.querySelector("#share-post").addEventListener("click", toggleForm)
Array.from(document.querySelectorAll(".deletePost")).forEach(el => el.addEventListener("click", deletePost))
console.log("main")
function toggleForm(){
    const shareFormStyle = document.querySelector('.share-form').style
    //console.log(shareFormStyle["max-height"])
    if (shareFormStyle["max-height"] == "" || shareFormStyle["max-height"] == "0px"){
        shareFormStyle.opacity = 1
        shareFormStyle["max-height"] = "500px"
    }else {
        shareFormStyle.opacity = 0
        shareFormStyle["max-height"] = 0
    }
}

async function deletePost(){
    const parentClassList = this.parentNode.className.split(" ")
    const storyId = parentClassList[3]
    const cloudinaryId = parentClassList[4]    
    console.log(storyId) 
    console.log(cloudinaryId)
    const result = await fetch(`/feed/${storyId}`,{
        method: "delete",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "cloudinaryId":cloudinaryId
        })
    }) 
    console.log(result)
    location.reload()
}