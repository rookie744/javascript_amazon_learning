const xhr = new XMLHttpRequest();
xhr.addEventListener('load',() => 
{
    console.log(xhr.response);
})
xhr.open('GET','https://supersimplebackend.dev/greeting');
xhr.send();

async function getdatafromurl ()
{
    const data = await fetch('https://supersimplebackend.dev/greeting').then((response) => {
        return response.text();
    })
    
    console.log(`${data}33`);
}
 
getdatafromurl();

async function senddata ()
{
    try {
    const  response = 
    await fetch('https://supersimplebackend.dev/greeting',{
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' }
        // ,
        // body : JSON.stringify({name : 'Kishore'})
    }) /* .then((response) => 
    {
            return response.text();

    }).then ((response) => {
        console.log(response);
    });
    */
   if (response.status === 400)
        throw response;
   const data = await response.text();
   console.log(data);
    }
   catch(response)
   {
    console.log (await response.text());
   }

}
senddata();

async function amazonURL()
{
    try {
    const response = await fetch('https://www.amazon.in/');
    const data = await response.JSON();
    console.log(data);
    }
    catch{
        console.log('CROS');
    }
}
amazonURL();