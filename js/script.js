
// clear the screen for testing

var catInfo = {
	"cat": [
	{	
		"name" : "Bob",
		"img": "image/kitten1.jpg",
		"clicks": 0
	},
	{		
		"name": "Potato", 
		"img": "image/kitten2.jpg",
		"clicks": 0
	},
	{		
		"name": "Ninja", 
		"img": "image/kitten3.jpg",
		"clicks": 0
	},
	{	
		"name": "Peanut",
		"img": "image/kitten4.jpg",
		"clicks": 0
	},
	{		
		"name": "Fluffy",
		"img": "./image/kitten5.jpg",
		"clicks": 0
	}
	]};


// Let's loop over the numbers in our array
for (var i = 0; i < catInfo.cat.length; i++) {
	// console.log(catInfo.cat[i].name + catInfo.cat[i].clicks);
    // This is the number we're on...
    var catClicker = catInfo.cat[i].name;

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = catClicker;

    // ... and when we click, alert the value of `name`
    elem.addEventListener('click', (function(iCopy) {
        return function() {
			document.getElementById("catImage").src = catInfo.cat[iCopy].img; 
			// $("#catImage").attr("src",catInfo.cat[iCopy].img);	
        };
    })(i));

    document.body.appendChild(elem);
};

$("body").append('<img id="catImage" src='+ '"' + catInfo.cat[0].img + '"' + 'alt="Ihis is a cat image" width= 300px heigt= 300px>');
$("body").append('<h2 id="clickCount">');

for (var i = 0; i < catInfo.cat.length; i++) {
	// console.log(catInfo.cat[i].name + catInfo.cat[i].clicks);
    // We're creating a DOM element for the number	 
	 var imgElem = document.getElementById("catImage");
	 imgElem.addEventListener('click', (function(iCopy) {
        return function() {
        	catInfo.cat[iCopy].clicks++;
        	$('#clickCount').text(catInfo.cat[iCopy].name + " has been clicked " + catInfo.cat[iCopy].clicks + " times");
			// $("#catImage").attr("src",catInfo.cat[iCopy].img);	
        };
    })(i));
};



// var counter1 = 0;
// var counter2 = 0;

// $("#name1").text("Bob");

// $("#catImage1").click(function() {
// 	// console.log("click");
// 	counter1++;
//     $("#output1").text("Number of clicks: " + counter1);
// });

// $("#name2").text("Bob jr");

// $("#catImage2").click(function() {
// 	// console.log("click");k
// 	counter2++;
//     $("#output2").text("Number of clicks: " + counter2);
// });


 	  //the element has been clicked... do stuff here







