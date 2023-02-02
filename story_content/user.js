function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KutJMchXwz":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxJdP6cPVcDl6Wz6JInVmZvKHZNmpkLL7dZICj-7JOxnK-5nt7E7aOvktcsBZUyP1jC/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

