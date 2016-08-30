$(function(){

    var model = {
    	"currentCatIndex": null,
    	"catInfo": [
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
			]
    };


 	var octopus = {
		
	    init: function() {
	    	model.currentCatIndex = 0;
            view.init();
            view.render();
            view.adminBtnClick();
            view.saveBtnClick();
        },

        clickCount: function() {
 			model.catInfo[model.currentCatIndex].clicks+=1;	
        }
	};

	var view = {
		init: function() {
			$("body").append('<h3 id="clickCount"></h3>');
			$("#clickCount").text(model.catInfo[model.currentCatIndex].name + " has been clicked " + model.catInfo[model.currentCatIndex].clicks + " time");
			$("#clickCount").before('<img id="catImage" src='+ '"' + model.catInfo[0].img + '"' + 'alt="Ihis is a cat image" width= 300px heigt= 300px>');

	     // Let's loop over the numbers in our array
			for (var i = 0; i < model.catInfo.length; i++) {

			    // This is the number we're on...
			    var catClicker = model.catInfo[i].name;

			    // We're creating a DOM element for the number
			    var elem = document.createElement('div');
			    elem.textContent = catClicker;

			    // ... and when we click, alert the value of `name`
			    elem.addEventListener('click', (function(iCopy) {
			        return function() {
			        	model.currentCatIndex = iCopy;
						document.getElementById("catImage").src = model.catInfo[iCopy].img; 
						$("#clickCount").text(model.catInfo[model.currentCatIndex].name + " has been clicked " + model.catInfo[model.currentCatIndex].clicks + " time");		
			        
			        };
			    })(i));
			    $("#catImage").before(elem);
			}
		   },
        
		render: function() {
			$("#catImage").click(function() {
				octopus.clickCount(); 
				$("#clickCount").text(model.catInfo[model.currentCatIndex].name + " has been clicked " + model.catInfo[model.currentCatIndex].clicks + " time");
			})	
    	},

    	adminBtnClick: function() {
    		$("#adminBtn").click(function() {
    			$("form").toggle();
    			$("#catName").val(model.catInfo[model.currentCatIndex].name);
    			$("#imageurl").val(model.catInfo[model.currentCatIndex].img);
    			$("#clickCountInput").val(model.catInfo[model.currentCatIndex].clicks);
    		})
    	},

    	saveBtnClick: function() {
    		$("#saveBtn").click(function() { 
    			console.log(model.catInfo[model.currentCatIndex].name);
    			// model.catInfo[model.currentCatIndex].name= cn;
    			model.catInfo[model.currentCatIndex].name= $("#catName").val();
    			model.catInfo[model.currentCatIndex].img= $("#imageurl").val();
    			model.catInfo[model.currentCatIndex].clicks= $("#clickCountInput").val(); 
    			console.log(model.catInfo[model.currentCatIndex].name);
    			})
    	}
	};
	octopus.init();

});

