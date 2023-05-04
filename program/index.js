// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=150&key=[YOUR_API_KEY] 





const API = `AIzaSyDTw5imc0ZBcN4ARGmuHtWns38pw0r5dYk`;

let popularVideos = async()=>{
    try{
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=IN&key=${API}`)
        let data = await res.json();
        console.log("Data:",data);
        displayData(data.items);
    }catch(err){
        console.log(err);
    }
}
popularVideos();


let displayData = (videos)=>{

    let container = document.querySelector("#container");
    container.innerHTML=null;

    videos.map(({id,snippet:{thumbnails:{high:{url}}},snippet:{title},snippet:{channelTitle}})=>{
        let div = document.createElement("div");

    //     let iframe = document.createElement("iframe");
    //   iframe.src =`https://www.youtube.com/embed/${id}`;
    //   iframe.width="100%";
    //   iframe.height="100%";
    //   iframe.allow = "fullscreen";
      
    let img = document.createElement("img");
    img.src=url;
    img.addEventListener("click",function(){
        videoFunction({id,title});
    })

      let name = document.createElement("p");
      name.innerText =title;

      let channel=document.createElement("p");
      channel.innerText=channelTitle;

      div.append(img,name,channelTitle);
      container.append(div);

    })
}

let items;
let searchVideos = async () => {
    try {
        let query = document.querySelector("#search").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${API} `);
        let data = await res.json();
        console.log("Data:",data)
        items = data.items;
        console.log("Items:",items)
    }
    catch(err) {
        console.error(err);
    }

    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "./result.html";
}

let arr = [];
let videoFunction=({id,title,channelTitle})=>{
    arr.push({id,title,channelTitle});
    localStorage.setItem("Video", JSON.stringify(arr));
    window.location.href = "./video.html";
}


