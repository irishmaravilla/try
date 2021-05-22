var data = [
    {
        username: "joanna",
        password: "secret",
    },
    {
        username: "james",
        password: "secret",
    },
    {
        username: "john",
        password: "secret",
    }
]
var newsfeed = [
    {
        username: "Maiecheang",
        post: "I am a good dog.",
    },
    {
        username: "marimar",
        post:"senyora, where u?",
    }
]

// medyo magulo itong part na ito 

function noloop(user,_passw){
    for (var i=0; i<data.length; i++){
    if (data[i].username === user &&
        data[i].password === _passw){
            return true;
        }
    }
    return false

    
// gets ko to 


}    
function login(user, _passw )
{
        if (noloop(user,_passw)){
            console.log(newsfeed);
        }
        else{
            console.log("error");
        }
    
    // for (var i=0; i<data.length; i++)
    //       if (user === data[i].username &&
    //          _passw === data[i].password)
    //         console.log(newsfeed);       
    //              else {
    //                  alert("failed");
    //              }
    //              console.log(newsfeed)
}
    
    // if (user === data[0].username && _passw === data[0].password)
    // console.log(newsfeed)       
    //         else {
    //             alert("failed");
    //         }
    //         console.log(newsfeed)
// }
var userprompt = prompt("Please type username");
var passprompt = prompt("Please type password");
login(userprompt, passprompt);