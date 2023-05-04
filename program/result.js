let data = JSON.parse(localStorage.getItem("items"));
console.log(data);
let container = document.querySelector("#container2");

data.map(({id:{videoId},snippet:{thumbnails:{high:{url}}},snippet:{title},snippet:{channelTitle}})=>{
   
    // let iframe = document.createElement("iframe");
    // iframe.src =`https://www.youtube.com/embed/${el.id.videoId}`;
    //   iframe.width="100%";
    //   iframe.height="100%";
    //   iframe.allow = "fullscreen";

    let img = document.createElement("img");
    img.src=url;
    img.addEventListener("click",function(){
        videoFunction({videoId,title,channelTitle});
    })

    let name = document.createElement("p");
    name.innerText=title;
    let channel = document.createElement("p");
    channel.innerText = channelTitle;
    let content = document.createElement("div");
    content.setAttribute("id","content");
    content.append(name,channel);

    let div = document.createElement("div");
    div.append(img,content);

    container.append(div);
})

let arr = [];
let videoFunction=({videoId,title,channelTitle})=>{
    arr.push({videoId,title,channelTitle});
    localStorage.setItem("video", JSON.stringify(arr));
    window.location.href = "./resultVideo.html";
}