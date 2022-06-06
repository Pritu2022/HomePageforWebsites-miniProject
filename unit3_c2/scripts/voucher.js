// let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`


//console.log("abs")
 let getdata=async ()=>{
     try{
        let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
        let res= await fetch(url)
      // console.log(res)
       let thing=await res.json()
      //console.log(thing)
             append1(thing)
     }
     catch(error){
         console.log(error)
     }

    

 }

 getdata()


 class funct{
    constructor(n,e,a){
        this.image=n;
        this.name=e;
        this.price=a;
       
    }
}

 function append1(data){
     //console.log(data[0])
     let x=data[0]
     let y=x.vouchers
     console.log(y)
     console.log(typeof y)

    
   y.map((el)=>{
     let arr=JSON.parse(localStorage.getItem("user")) || []

      // console.log(el.image)
         let box=document.createElement("div")

         let image=document.createElement("img")
           image.src=el.image
         let name=document.createElement("p")
         name.innerText=el.name
         let price=document.createElement("p")
            price.innerText=el.price

            let btn=document.createElement("button")
            btn.innerText="Buy"
            btn.setAttribute("class","buy_voucher")
            btn.addEventListener("click",function(){
                 st(el)
            })

            let s1=new funct(image,name,price)

            arr.push(s1)
            //console.log(image,name,price,btn)

            box.append(image,name,price,btn)

            document.getElementById("voucher_list").append(box)

            // localStorage.setItem( "purchase",JSON.stringify(arr))
     })
 }

 function st(e){
    let arr=JSON.parse(localStorage.getItem("purchase")) || []
    arr.push(e)
    localStorage.setItem( "purchase",JSON.stringify(arr))
 }
 