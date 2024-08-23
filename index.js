let number = document.getElementsByClassName("inner");
let number2 = document.getElementsByClassName("inner2");
let counter = 0;
let counter2 = 0;
// for(let i =0;i<=70;i++)
// {
//     number.innerHTML = counter + "%";
//     counter=counter+1;

// }

    setInterval(()=>
        {
            
            if(counter == 71)
            {
                clearInterval();
            }
            else
            {
                number[0].innerHTML = counter+"%<br><h6>Leadership</h6>";
                counter=counter+1;
        
            }
        
            
        },20)
        
        setInterval(()=>
            {
                
                if(counter2 == 81)
                {
                    clearInterval();
                }
                else
                {
                    number2[0].innerHTML = counter2+"%<br><h6>Communication</h6>";
                    counter2=counter2+1;
            
                }
            
                
            },20)
let span = document.getElementById("myname");
            let wordlist = ['Developer','Teacher','Freelancer','Student'];
            let profession = 0;
            let character = 0;
            let reverse = false;
            
            
            setInterval(()=>
            {
            
            if(!reverse)
            {
            span.innerText+=wordlist[profession][character]
            character++
            }
            else
            {
                span.innerText = span.innerText.slice(0,span.innerText.length-1)
                
            }
            if(span.innerText ==0 && reverse)
            {
                character=0
                reverse=false;
                profession++;
            }
            if(profession == wordlist.length)
            {
                profession=0;
            }
            if(character == wordlist[profession].length)
            {
                reverse = true
            }
            
            
            
            
            
            
            },300)
// let red = false;

function scrolltosection(sectionid)
{
    let section = document.getElementById(sectionid);
    section.scrollIntoView({behaviour:'slow'})
}

function changecolor(colors)
{
    let m =  document.getElementsByClassName("herosection")[0];
   
   if(colors === "yellow")
   {
  
   m.style.backgroundColor = "yellow";

   }
   else if(colors === "violet")
    {
     m.style.backgroundColor = "violet";
    }
    else if(colors === "#ebf4f4")
        {
         m.style.backgroundColor = "#ebf4f4";
        }
}

let active = document.getElementById("home")
let selected = 
function active()
{
let items = document.querySelectorAll('#navul li');
items.forEach(element =>
    {
        element.addEventListener("click",function()
    {
           let activeid = this.id
           document.activeid.style.color = "red"
    })
    }
)
}


let pathname = window.location.pathname;
let pathlink = pathname.split("/").pop();
if(pathlink === "index.html")
{
    document.querySelector("#home").classList.add("active")
}
if(pathlink === "project.html")
    {
        document.querySelector("#projectlist").classList.add("active")
    }
    
    if(pathlink === "about.html")
        {
            document.querySelector("#about").classList.add("active")
        }
        if(pathlink === "resume.html")
            {
                document.querySelector("#resume").classList.add("active")
            }       
            if(pathlink === "contact.html")
                {
                    document.querySelector("#contact").classList.add("active")
                }