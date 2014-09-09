/* JavaScript functions */

var i = 0;
var ex = "X", oh = "O";
var t = [["", "", ""], ["", "", ""], ["", "", ""]];
var counter = 0;

function initialize()
{
	//alert("Initializing elements...");
	document.getElementById("btn00").value = "";
	document.getElementById("btn01").value = "";
	document.getElementById("btn02").value = "";
	document.getElementById("btn10").value = "";
	document.getElementById("btn11").value = "";
	document.getElementById("btn12").value = "";
	document.getElementById("btn20").value = "";
	document.getElementById("btn21").value = "";
	document.getElementById("btn22").value = "";
}
function rowCol(r, c)
{	
	t[r][c] = ex;
}

function button00_Click()
{
	if(document.getElementById("btn00").value == "")
	{
		document.getElementById("btn00").value = ex;
		document.getElementById("btn00").style.backgroundColor = "green";
		rowCol(0, 0); 
		winOrLose();
	}

}

function button01_Click()
{
	if(document.getElementById("btn01").value == "")
	{
		document.getElementById("btn01").value = ex;
		document.getElementById("btn01").style.backgroundColor = "green";
		rowCol(0, 1); 
		winOrLose();
	}
}

function button02_Click()
{
	if(document.getElementById("btn02").value == "")
	{
		document.getElementById("btn02").value = ex;
		document.getElementById("btn02").style.backgroundColor = "green";
		rowCol(0, 2); 
		winOrLose();
	}
}

function button10_Click()
{
	if(document.getElementById("btn10").value == "")
	{
		document.getElementById("btn10").value = ex;
		document.getElementById("btn10").style.backgroundColor = "green";
		rowCol(1, 0); 
		winOrLose();
	}
}

function button11_Click()
{
	if(document.getElementById("btn11").value == "")
	{
		document.getElementById("btn11").value = ex;
		document.getElementById("btn11").style.backgroundColor = "green";
		rowCol(1, 1); 
		winOrLose();
	}
}

function button12_Click()
{
	if(document.getElementById("btn12").value == "")
	{
		document.getElementById("btn12").value = ex;
		document.getElementById("btn12").style.backgroundColor = "green";
		rowCol(1, 2); 
		winOrLose();
	}
}

function button20_Click()
{
	if(document.getElementById("btn20").value == "")
	{
		document.getElementById("btn20").value = ex;
		document.getElementById("btn20").style.backgroundColor = "green";
		rowCol(2, 0); 
		winOrLose();
	}
}

function button21_Click()
{
	if(document.getElementById("btn21").value == "")
	{
		document.getElementById("btn21").value = ex;
		document.getElementById("btn21").style.backgroundColor = "green";
		rowCol(2, 1);
		winOrLose();
	}
}

function button22_Click()
{
	if(document.getElementById("btn22").value == "")
	{
		document.getElementById("btn22").value = ex;
		document.getElementById("btn22").style.backgroundColor = "green";
		rowCol(2, 2); 
		winOrLose();
	}
}

function compMove()
{
	++counter; 
	// Diagonal O's Topleft-to-BottomRight
	if(t[0][0] == oh && t[1][1] == oh && t[2][2] == "")
	{
		document.getElementById("btn22").value = oh;
		document.getElementById("btn22").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn00").style.backgroundColor = "lime";
		t[2][2] = oh;
		alert("You lose!");
		resetGame(); return;
	}
	else if(t[0][0] == oh && t[1][1] == "" && t[2][2] == oh)
	{
		document.getElementById("btn11").value = oh;
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn00").style.backgroundColor = "lime";
		document.getElementById("btn22").style.backgroundColor = "lime";
		t[1][1] = oh;  
		alert("You lose!");
		resetGame(); return;
	}
	else if(t[0][0] == "" && t[1][1] == oh && t[2][2] == oh)
	{
		document.getElementById("btn00").value = oh;
		document.getElementById("btn00").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn22").style.backgroundColor = "lime";
		t[0][0] = oh; 
		alert("You lose!");
		resetGame(); return;
	}
	// Diagonal O's Bottomleft-to-Topright
	else if(t[2][0] == oh && t[1][1] == oh && t[0][2] == "")
	{
		document.getElementById("btn02").value = oh;
		document.getElementById("btn02").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn20").style.backgroundColor = "lime";
		t[0][2] = oh; 
		alert("You lose!");
		resetGame(); return;
	}
	else if(t[2][0] == oh && t[1][1] == "" && t[0][2] == oh)
	{
		document.getElementById("btn11").value = oh;
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn02").style.backgroundColor = "lime";
		document.getElementById("btn20").style.backgroundColor = "lime";
		t[1][1] = oh; 
		alert("You lose!");
		resetGame(); return;
	}
	else if(t[2][0] == "" && t[1][1] == oh && t[0][2] == oh)
	{
		document.getElementById("btn20").value = oh;
		document.getElementById("btn20").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn02").style.backgroundColor = "lime";
		t[2][0] = oh;
		alert("You lose!");
		resetGame(); return;
	}
	

	//Loop through row-wise for finding winning pattern for comp
	for(i = 0; i < 3; i++)
	{
		if(t[i][0] == oh && t[i][1] == oh && t[i][2] == "")
		{
			if (i == 0)
			{
				document.getElementById("btn02").value = oh;
				document.getElementById("btn02").style.backgroundColor = "lime";
				document.getElementById("btn01").style.backgroundColor = "lime";
				document.getElementById("btn00").style.backgroundColor = "lime";
			}
			else if (i == 1)
			{
				document.getElementById("btn12").value = oh;
				document.getElementById("btn12").style.backgroundColor = "lime";
				document.getElementById("btn11").style.backgroundColor = "lime";
				document.getElementById("btn10").style.backgroundColor = "lime";
			}
			else if (i == 2)
			{
				document.getElementById("btn22").value = oh;
				document.getElementById("btn22").style.backgroundColor = "lime";
				document.getElementById("btn21").style.backgroundColor = "lime";
				document.getElementById("btn20").style.backgroundColor = "lime";
			}
			t[i][2] = oh; 
			alert("You lose! ");
			resetGame(); return;
		}
		else if(t[i][0] == oh && t[i][1] == "" && t[i][2] == oh)
		{
			if (i == 0)
			{
				document.getElementById("btn01").value = oh;
				document.getElementById("btn01").style.backgroundColor = "lime";
				document.getElementById("btn00").style.backgroundColor = "lime";
				document.getElementById("btn02").style.backgroundColor = "lime";
			}
			else if (i == 1)
			{
				document.getElementById("btn11").value = oh;
				document.getElementById("btn11").style.backgroundColor = "lime";
				document.getElementById("btn10").style.backgroundColor = "lime";
				document.getElementById("btn12").style.backgroundColor = "lime";
			}
			else if (i == 2)
			{
				document.getElementById("btn21").value = oh;
				document.getElementById("btn21").style.backgroundColor = "lime";
				document.getElementById("btn20").style.backgroundColor = "lime";
				document.getElementById("btn22").style.backgroundColor = "lime";
			}
			t[i][1] = oh; 
			alert("You lose! ");
			resetGame(); return;
		}
		else if(t[i][0] == "" && t[i][1] == oh && t[i][2] == oh)
		{
			if (i == 0)
			{
				document.getElementById("btn00").value = oh;
				document.getElementById("btn00").style.backgroundColor = "lime";
				document.getElementById("btn01").style.backgroundColor = "lime";
				document.getElementById("btn02").style.backgroundColor = "lime";
			}
			else if (i == 1)
			{
				document.getElementById("btn10").value = oh;
				document.getElementById("btn10").style.backgroundColor = "lime";
				document.getElementById("btn11").style.backgroundColor = "lime";
				document.getElementById("btn12").style.backgroundColor = "lime";
			}
			else if (i == 2)
			{
				document.getElementById("btn20").value = oh;
				document.getElementById("btn20").style.backgroundColor = "lime";
				document.getElementById("btn21").style.backgroundColor = "lime";
				document.getElementById("btn22").style.backgroundColor = "lime";
			}
			t[i][0] = oh; 
			alert("You lose! ");
			resetGame(); return;
		}
	}
	
	//Loop through column-wise for finding winning pattern for comp
	for(i = 0; i < 3; i++)
	{
		if(t[0][i] == oh && t[1][i] == oh && t[2][i] == "")
		{
			if (i == 0)
			{
				document.getElementById("btn20").value = oh;
				document.getElementById("btn20").style.backgroundColor = "lime";
				document.getElementById("btn10").style.backgroundColor = "lime";
				document.getElementById("btn00").style.backgroundColor = "lime";
			}
			else if (i == 1)
			{
				document.getElementById("btn21").value = oh;
				document.getElementById("btn21").style.backgroundColor = "lime";
				document.getElementById("btn11").style.backgroundColor = "lime";
				document.getElementById("btn01").style.backgroundColor = "lime";
			}
			else if (i == 2)
			{
				document.getElementById("btn22").value = oh;
				document.getElementById("btn22").style.backgroundColor = "lime";
				document.getElementById("btn12").style.backgroundColor = "lime";
				document.getElementById("btn02").style.backgroundColor = "lime";
			}
			t[2][i] = oh; 
			alert("You lose! ");
			resetGame(); return;
		}
		else if(t[0][i] == oh && t[1][i] == "" && t[2][i] == oh)
		{
			if (i == 0)
			{
				document.getElementById("btn10").value = oh;
				document.getElementById("btn10").style.backgroundColor = "lime";
				document.getElementById("btn00").style.backgroundColor = "lime";
				document.getElementById("btn20").style.backgroundColor = "lime";
			}
			else if (i == 1)
			{
				document.getElementById("btn11").value = oh;
				document.getElementById("btn11").style.backgroundColor = "lime";
				document.getElementById("btn01").style.backgroundColor = "lime";
				document.getElementById("btn21").style.backgroundColor = "lime";
			}
			else if (i == 2)
			{
				document.getElementById("btn12").value = oh;
				document.getElementById("btn12").style.backgroundColor = "lime";
				document.getElementById("btn02").style.backgroundColor = "lime";
				document.getElementById("btn22").style.backgroundColor = "lime";
			}
			t[1][i] = oh; 
			alert("You lose! ");
			resetGame(); return;
		}
		else if(t[0][i] == "" && t[1][i] == oh && t[2][i] == oh)
		{
			if (i == 0)
			{
				document.getElementById("btn00").value = oh;
				document.getElementById("btn00").style.backgroundColor = "lime";
				document.getElementById("btn10").style.backgroundColor = "lime";
				document.getElementById("btn20").style.backgroundColor = "lime";
			}
			else if (i == 1)
			{
				document.getElementById("btn01").value = oh;
				document.getElementById("btn01").style.backgroundColor = "lime";
				document.getElementById("btn11").style.backgroundColor = "lime";
				document.getElementById("btn21").style.backgroundColor = "lime";
			}
			else if (i == 2)
			{
				document.getElementById("btn02").value = oh;
				document.getElementById("btn02").style.backgroundColor = "lime";
				document.getElementById("btn12").style.backgroundColor = "lime";
				document.getElementById("btn22").style.backgroundColor = "lime";
			}
			t[0][i] = oh; 
			alert("You lose! ");
			resetGame(); return;
		}
	}
	//////////////////////////////////////////////////////////////////////
	//To prevent player from winning
	// Diagonal O's Topleft-to-BottomRight
	if(t[0][0] == ex && t[1][1] == ex && t[2][2] == "")
	{
		document.getElementById("btn22").value = oh;
		document.getElementById("btn22").style.backgroundColor = "green";
		t[2][2] = oh; 
		return;
	}
	else if(t[0][0] == ex && t[1][1] == "" && t[2][2] == ex)
	{
		document.getElementById("btn11").value = oh;
		document.getElementById("btn11").style.backgroundColor = "green";
		t[1][1] = oh;  
		return;
	}
	else if(t[0][0] == "" && t[1][1] == ex && t[2][2] == ex)
	{
		document.getElementById("btn00").value = oh;
		document.getElementById("btn00").style.backgroundColor = "green";
		t[0][0] = oh; 
		return;
	}
	// Diagonal O's Bottomleft-to-Topright
	else if(t[2][0] == ex && t[1][1] == ex && t[0][2] == "")
	{
		document.getElementById("btn02").value = oh;
		document.getElementById("btn02").style.backgroundColor = "green";
		t[0][2] = oh;
		return;
	}
	else if(t[2][0] == ex && t[1][1] == "" && t[0][2] == ex)
	{
		document.getElementById("btn11").value = oh;
		document.getElementById("btn11").style.backgroundColor = "green";
		t[1][1] = oh; 
		return;

	}
	else if(t[2][0] == "" && t[1][1] == ex && t[0][2] == ex)
	{
		document.getElementById("btn20").value = oh;
		document.getElementById("btn20").style.backgroundColor = "green";
		t[2][0] = oh; 
		return;
	}
	
	//Loop through row-wise for finding winning pattern for comp
	for(i = 0; i < 3; i++)
	{
		if(t[i][0] == ex && t[i][1] == ex && t[i][2] == "")
		{
			if (i == 0)
			{
				document.getElementById("btn02").value = oh;
				document.getElementById("btn02").style.backgroundColor = "green";
			}
			else if (i == 1)
			{
				document.getElementById("btn12").value = oh;
				document.getElementById("btn12").style.backgroundColor = "green";
			}
			else if (i == 2)
			{
				document.getElementById("btn22").value = oh;
				document.getElementById("btn22").style.backgroundColor = "green";
			}
			t[i][2] = oh; 
			return;
		}
		else if(t[i][0] == ex && t[i][1] == "" && t[i][2] == ex)
		{
			if (i == 0)
			{
				document.getElementById("btn01").value = oh;
				document.getElementById("btn01").style.backgroundColor = "green";
			}
			else if (i == 1)
			{
				document.getElementById("btn11").value = oh;
				document.getElementById("btn11").style.backgroundColor = "green";
			}
			else if (i == 2)
			{
				document.getElementById("btn21").value = oh;
				document.getElementById("btn21").style.backgroundColor = "green";
			}
			t[i][1] = oh; 
			return;
		}
		else if(t[i][0] == "" && t[i][1] == ex && t[i][2] == ex)
		{
			if (i == 0)
			{
				document.getElementById("btn00").value = oh;
				document.getElementById("btn00").style.backgroundColor = "green";
			}
			else if (i == 1)
			{
				document.getElementById("btn10").value = oh;
				document.getElementById("btn10").style.backgroundColor = "green";
			}
			else if (i == 2)
			{
				document.getElementById("btn20").value = oh;
				document.getElementById("btn20").style.backgroundColor = "green";
			}
			t[i][0] = oh;
			return;
		}
	}
	
	//Loop through column-wise for finding winning pattern for comp
	for(i = 0; i < 3; i++)
	{
		if(t[0][i] == ex && t[1][i] == ex && t[2][i] == "")
		{
			if (i == 0)
			{
				document.getElementById("btn20").value = oh;
				document.getElementById("btn20").style.backgroundColor = "green";
			}
			else if (i == 1)
			{
				document.getElementById("btn21").value = oh;
				document.getElementById("btn21").style.backgroundColor = "green";
			}
			else if (i == 2)
			{
				document.getElementById("btn22").value = oh;
				document.getElementById("btn22").style.backgroundColor = "green";
			}
			t[2][i] = oh;
			return;
		}
		else if(t[0][i] == ex && t[1][i] == "" && t[2][i] == ex)
		{
			if (i == 0)
			{
				document.getElementById("btn10").value = oh;
				document.getElementById("btn10").style.backgroundColor = "green";
			}
			else if (i == 1)
			{
				document.getElementById("btn11").value = oh;
				document.getElementById("btn11").style.backgroundColor = "green";
			}
			else if (i == 2)
			{
				document.getElementById("btn12").value = oh;
				document.getElementById("btn12").style.backgroundColor = "green";
			}
			t[1][i] = oh; 
			return;
		}
		else if(t[0][i] == "" && t[1][i] == ex && t[2][i] == ex)
		{
			if (i == 0)
			{
				document.getElementById("btn00").value = oh;
				document.getElementById("btn00").style.backgroundColor = "green";
			}
			else if (i == 1)
			{
				document.getElementById("btn01").value = oh;
				document.getElementById("btn01").style.backgroundColor = "green";
			}
			else if (i == 2)
			{
				document.getElementById("btn02").value = oh;
				document.getElementById("btn02").style.backgroundColor = "green";
			}
			t[0][i] = oh;
			return;
		}
	}
	
	//If any of the above conditions fails, then randomly choose an empty position and make comp's move 
	var flag = 0;
	while(flag != 1)
	{
		var randomPos = Math.floor(Math.random() * 9);	//Random numbers from 0 - 8
		if(randomPos == 0 && document.getElementById("btn00").value == "")
		{
			document.getElementById("btn00").value = oh;
			document.getElementById("btn00").style.backgroundColor = "green";
			t[0][0] = oh; flag = 1; 
		}
		else if(randomPos == 1 && document.getElementById("btn01").value == "")
		{
			document.getElementById("btn01").value = oh;
			document.getElementById("btn01").style.backgroundColor = "green";
			t[0][1] = oh; flag = 1; 
		}
		else if(randomPos == 2 && document.getElementById("btn02").value == "")
		{
			document.getElementById("btn02").value = oh;
			document.getElementById("btn02").style.backgroundColor = "green";
			t[0][2] = oh; flag = 1; 
		}
		else if(randomPos == 3 && document.getElementById("btn10").value == "")
		{
			document.getElementById("btn10").value = oh;
			document.getElementById("btn10").style.backgroundColor = "green";
			t[1][0] = oh; flag = 1; 
		}
		else if(randomPos == 4 && document.getElementById("btn11").value == "")
		{
			document.getElementById("btn11").value = oh;
			document.getElementById("btn11").style.backgroundColor = "green";
			t[1][1] = oh; flag = 1; 
		}
		else if(randomPos == 5 && document.getElementById("btn12").value == "")
		{
			document.getElementById("btn12").value = oh;
			document.getElementById("btn12").style.backgroundColor = "green";
			t[1][2] = oh; flag = 1;
		}
		else if(randomPos == 6 && document.getElementById("btn20").value == "")
		{
			document.getElementById("btn20").value = oh;
			document.getElementById("btn20").style.backgroundColor = "green";
			t[2][0] = oh; flag = 1; 
		}
		else if(randomPos == 7 && document.getElementById("btn21").value == "")
		{
			document.getElementById("btn21").value = oh;
			document.getElementById("btn21").style.backgroundColor = "green";
			t[2][1] = oh; flag = 1; 
		}
		else if(randomPos == 8 && document.getElementById("btn22").value == "")
		{
			document.getElementById("btn22").value = oh;
			document.getElementById("btn22").style.backgroundColor = "green";
			t[2][2] = oh; flag = 1; 
		}
	}

	
}

function resetGame()
{

		/* Reset values to start a fresh new game*/
		document.getElementById("btn00").value = "";
		document.getElementById("btn01").value = "";
		document.getElementById("btn02").value = "";
		document.getElementById("btn10").value = "";
		document.getElementById("btn11").value = "";
		document.getElementById("btn12").value = "";
		document.getElementById("btn20").value = "";
		document.getElementById("btn21").value = "";
		document.getElementById("btn22").value = "";
		
		document.getElementById("btn00").style.backgroundColor = "olive";
		document.getElementById("btn01").style.backgroundColor = "olive";
		document.getElementById("btn02").style.backgroundColor = "olive";
		document.getElementById("btn10").style.backgroundColor = "olive";
		document.getElementById("btn11").style.backgroundColor = "olive";
		document.getElementById("btn12").style.backgroundColor = "olive";
		document.getElementById("btn20").style.backgroundColor = "olive";
		document.getElementById("btn21").style.backgroundColor = "olive";
		document.getElementById("btn22").style.backgroundColor = "olive";
		
		document.getElementById("btn00").style.color = "aqua";
		document.getElementById("btn01").style.color = "aqua";
		document.getElementById("btn02").style.color = "aqua";
		document.getElementById("btn10").style.color = "aqua";
		document.getElementById("btn11").style.color = "aqua";
		document.getElementById("btn12").style.color = "aqua";
		document.getElementById("btn20").style.color = "aqua";
		document.getElementById("btn21").style.color = "aqua";
		document.getElementById("btn22").style.color = "aqua";
		counter = 0;
		
		t[0][0] = ""; t[0][1] = ""; t[0][2] = "";
		t[1][0] = ""; t[1][1] = ""; t[1][2] = "";
		t[2][0] = ""; t[2][1] = ""; t[2][2] = "";
	
}

function winOrLose()
{
	++counter;
    if(counter == 9)
	{
		alert("Draw match!");
		resetGame();
	}
	// Diagonal X's 
	else if(t[0][0] == ex && t[1][1] == ex && t[2][2] == ex)
	{
		document.getElementById("btn00").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn22").style.backgroundColor = "lime";
		document.getElementById("btn00").style.color = "blue";
		document.getElementById("btn11").style.color = "blue";
		document.getElementById("btn22").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	else if(t[2][0] == ex && t[1][1] == ex && t[0][2] == ex)
	{
		document.getElementById("btn20").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn02").style.backgroundColor = "lime";
		document.getElementById("btn20").style.color = "blue";
		document.getElementById("btn11").style.color = "blue";
		document.getElementById("btn02").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	
	// Horizontal X's 
	else if(t[0][0] == ex && t[0][1] == ex && t[0][2] == ex)
	{
		document.getElementById("btn00").style.backgroundColor = "lime";
		document.getElementById("btn01").style.backgroundColor = "lime";
		document.getElementById("btn02").style.backgroundColor = "lime";
		document.getElementById("btn00").style.color = "blue";
		document.getElementById("btn01").style.color = "blue";
		document.getElementById("btn02").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	else if(t[1][0] == ex && t[1][1] == ex && t[1][2] == ex)
	{
		document.getElementById("btn10").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn12").style.backgroundColor = "lime";
		document.getElementById("btn10").style.color = "blue";
		document.getElementById("btn11").style.color = "blue";
		document.getElementById("btn12").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	else if(t[2][0] == ex && t[2][1] == ex && t[2][2] == ex)
	{
		document.getElementById("btn20").style.backgroundColor = "lime";
		document.getElementById("btn21").style.backgroundColor = "lime";
		document.getElementById("btn22").style.backgroundColor = "lime";
		document.getElementById("btn20").style.color = "blue";
		document.getElementById("btn21").style.color = "blue";
		document.getElementById("btn22").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	
	// Vertical X's 
	else if(t[0][0] == ex && t[1][0] == ex && t[2][0] == ex)
	{
		document.getElementById("btn00").style.backgroundColor = "lime";
		document.getElementById("btn10").style.backgroundColor = "lime";
		document.getElementById("btn20").style.backgroundColor = "lime";
		document.getElementById("btn00").style.color = "blue";
		document.getElementById("btn10").style.color = "blue";
		document.getElementById("btn20").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	else if(t[0][1] == ex && t[1][1] == ex && t[2][1] == ex)
	{
		document.getElementById("btn01").style.backgroundColor = "lime";
		document.getElementById("btn11").style.backgroundColor = "lime";
		document.getElementById("btn21").style.backgroundColor = "lime";
		document.getElementById("btn01").style.color = "blue";
		document.getElementById("btn11").style.color = "blue";
		document.getElementById("btn21").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	else if(t[0][2] == ex && t[1][2] == ex && t[2][2] == ex)
	{
		document.getElementById("btn02").style.backgroundColor = "lime";
		document.getElementById("btn12").style.backgroundColor = "lime";
		document.getElementById("btn22").style.backgroundColor = "lime";
		document.getElementById("btn02").style.color = "blue";
		document.getElementById("btn12").style.color = "blue";
		document.getElementById("btn22").style.color = "blue";
		alert("You win!");
		resetGame();
	}
	
	else
	{
		compMove();
		if(counter == 9)
		{
			alert("Draw match!");
			resetGame();
		}
	}

	
}
