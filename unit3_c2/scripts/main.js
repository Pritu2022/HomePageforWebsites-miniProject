//console.log("abdc")


class func{
    constructor(n,e,a,am){
        this.name=n;
        this.email=e;
        this.address=a;
        this.amount=am;
    }
}
let sum=0;

function signin(){


  let arr=JSON.parse(localStorage.getItem("user")) || []
 
      let name=document.getElementById("name").value
      let email=document.getElementById("email").value
      let address=document.getElementById("address").value
      let amount=document.getElementById("amount").value
     
      sum=sum+Number(amount);
      
      let p=document.createElement("p")
      p.innerText=sum
      let money_box=document.getElementById("wallet_balance")
      money_box.append(p)

      let s1=new func(name,email,address,sum)
       arr.push(s1)

      //console.log(name,email,address,amount)

      localStorage.setItem("user",JSON.stringify(arr))

    //   window.location.reload()
 
}




