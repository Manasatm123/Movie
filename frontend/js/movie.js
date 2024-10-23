const url = window.location.href;
const urlParams = new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
console.log(id);

async function getdata() {
    const res=await fetch(`http://localhost:3001/api/getMovie/${id}`)
    const data=await res.json();
    console.log(data);
    document.getElementById('js-section').innerHTML=`
    <div class="main-section">
        <div class="bg-img" id="bg-img">
          <div class="main-block">
            <div class="left">
              <div class="left-1">
                <img src="${data.pic}" alt />
                <div>In cinemas</div>
              </div>
              <div class="left-2">
                <div class="text-1">${data.title}</div>
                <div class="text-2-div">
                  <div>⭐ ${data.rating}/10 (${data.vote}K Votes)</div>
                  <div><button>Rate now</button></div>
                </div>
                <div class="text-3-div">
                  <div class="one">${data.screen}</div>
                  <div class="two">${data.language}</div>
                </div>
                <div>${data.duration} • ${data.catogery} • UA • ${data.releaseDate}</div>
                <div class="mn-btn"><button>Book tickets</button></div>
              </div>
            </div>
            <div class="right">
              <button>
                <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="40" height="40" viewBox="0,0,300,150"
                    style="fill:#FFFFFF;">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none"
                      stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10"
                      stroke-dasharray stroke-dashoffset="0" font-family="none"
                      font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal"><g
                        transform="scale(4,4)"><path
                          d="M44,10c-3.859,0 -7,3.14 -7,7c0,0.41247 0.04255,0.81396 0.11133,1.20703l-15.27734,7.63867c-0.99176,-0.53943 -2.12805,-0.8457 -3.33398,-0.8457c-3.859,0 -7,3.14 -7,7c0,3.86 3.141,7 7,7c1.40858,0 2.71894,-0.42161 3.81836,-1.14062l14.71484,8.49414c-0.01963,0.21314 -0.0332,0.42831 -0.0332,0.64648c0,3.86 3.141,7 7,7c3.859,0 7,-3.14 7,-7c0,-3.86 -3.141,-7 -7,-7c-2.19865,0 -4.16093,1.02229 -5.44531,2.61328l-13.61914,-7.86133c0.3628,-0.84515 0.56445,-1.77546 0.56445,-2.75195c0,-1.12925 -0.27497,-2.19326 -0.75195,-3.13867l14.15625,-7.07812c1.27792,1.36048 3.0868,2.2168 5.0957,2.2168c3.859,0 7,-3.14 7,-7c0,-3.86 -3.141,-7 -7,-7zM44,14c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3zM18.5,29c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3zM44,44c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
                  </svg>
                </div>
                <div> Share</div>
              </button>
            </div>
          </div>
        </div>
    </div>
    <br>
    <div class="mblock">
        <div class="msblock">
          <h2>About the movie</h2>
          <br>
          <div><div class="about1">About the movie</div>
        <div class="cname">Martin is a pulse pounding edge of the seat action thriller. A character whose
            dramatic journey takes him to the length and breadth of the country to fight against evil forces
            lurking to destroy India. But he is also in love with a beautiful lass. His journey is of
            discovering himself, finding love and fighting for his motherland. Can he hold the fort on all
            three gates?
        </div></div>
          
          
          </div>
          
          
    </div>
    <br>
    <div class="modify-btn">
        <a href="./edit.html?id=${data._id}"><button class="edit-btn">Edit</button></a>
        <button class="del-btn" onclick="deletedata('${data._id}')">Delete</button>
    </div>
    `
    document.getElementById('bg-img').style.backgroundImage=`linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 90.47%, rgb(26, 26, 26) 100%), url('${data.pic1}')`;
}
getdata()

function deletedata(id) {
    fetch(`http://localhost:3001/api/deleteMovie/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    })
    .then((res)=>{
        console.log(res);
        if(res.status == 201) {
            alert("success");
             window.location.href="../index.html"
        }
        else{
            alert("error");
        }
    });
    
}