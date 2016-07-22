/*
an interactive website that you have created by hand, and from scratch, that is live on the internet. By "interactive" we mean that it
    --uses vanilla JavaScript (specifically event listeners) to 
        -process and store user input and 
        -subsequently display new content to the user. 
    --The user input and new content must remain retrievable/viewable after a screen refresh.
*/
window.onload = function(){
    var name = "guest" || localStorage.getItem("userName");
    
    displayName();
    //test for local storage
    
    function isLocalStorage(){
        var availavle = "yes";
        try{
            localStorage.setItem(availavle, availavle);
            localStorage.removeItem(availavle);
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }
    var totalDaily = totalMonthly = totalYearly = totalDecade = totalCareer = 0;
    var smokeDaily = packCost = packPerDay = smokeMonthly = smokeYearly = smokeDecade = smokeCareer = 0;
    var lunchCost = lunchDaysPerWeek = brownBagCost = lunchDaily =  brownBagPerWeek = 0;
    var lunchWeekly = lunchMonthly = lunchYearly = lunchDecade = lunchCareer = 0;
    var latteCost = latteDaysPerWeek = cupsPerDay = cheaperCup = 0;
    var latteDaily = latteWeekly = latteMonthly = latteYearly = latteDecade = latteCareer = 0;
    //If local storage is available, retrive items from local storage and display them.
    if (isLocalStorage()){

        
        //Totals
        totalDaily   = parseFloat(localStorage.getItem("tDaily"),    10)   || 0;
        totalMonthly =  parseFloat(localStorage.getItem("tMonthly"), 10) || 0;
        totalYearly  =  parseFloat(localStorage.getItem("tYearly"),  10)  || 0;
        totalDecade  =  parseFloat(localStorage.getItem("tDecade"),  10)  || 0;
        totalCareer  =  parseFloat(localStorage.getItem("tCareer"),  10)  || 0;

        document.getElementById("daily").innerHTML   = numberToDollar(totalDaily);
        document.getElementById("monthly").innerHTML = numberToDollar(totalMonthly);
        document.getElementById("yearly").innerHTML  = numberToDollar(totalYearly);
        document.getElementById("decade").innerHTML  = numberToDollar(totalDecade);
        document.getElementById("career").innerHTML  = numberToDollar(totalCareer);

        //Quit Smoking Section
        smokeDaily   = parseFloat(localStorage.getItem("smDaily"), 10)   || 0;
        smokeMonthly = parseFloat(localStorage.getItem("smMonthly"), 10) || 0;
        smokeYearly  = parseFloat(localStorage.getItem("smYearly"), 10)  || 0;
        smokeDecade  = parseFloat(localStorage.getItem("smDecade"), 10)  || 0;
        smokeCareer  = parseFloat(localStorage.getItem("smCareer"), 10)  || 0;

        document.getElementById("smokeDaily").innerHTML   = numberToDollar(smokeDaily);
        document.getElementById("smokeMonthly").innerHTML = numberToDollar(smokeMonthly);
        document.getElementById("smokeYearly").innerHTML  = numberToDollar(smokeYearly);
        document.getElementById("smokeDecade").innerHTML  = numberToDollar(smokeDecade);
        document.getElementById("smokeCareer").innerHTML  = numberToDollar(smokeCareer);

        //Brown Bagging
        lunchDaily   = parseFloat(localStorage.getItem("luDaily"), 10)   || 0;
        lunchMonthly = parseFloat(localStorage.getItem("luMonthly"), 10) || 0;
        lunchYearly  = parseFloat(localStorage.getItem("luYearly"), 10)  || 0;
        lunchDecade  = parseFloat(localStorage.getItem("luDecade"), 10)  || 0;
        lunchCareer  = parseFloat(localStorage.getItem("luCareer"), 10)  || 0;

        document.getElementById("returnLunchDaily").innerHTML  = numberToDollar(lunchDaily);
        document.getElementById("lunchMonthly").innerHTML =numberToDollar(lunchMonthly);
        document.getElementById("lunchYearly").innerHTML = numberToDollar(lunchYearly);
        document.getElementById("lunchDecade").innerHTML =numberToDollar(lunchDecade);
        document.getElementById("lunchCareer").innerHTML = numberToDollar(lunchCareer);

        //Latte
        latteDaily   = parseFloat(localStorage.getItem("laDaily"), 10)   || 0;
        latteMonthly = parseFloat(localStorage.getItem("laMonthly"), 10) || 0;
        latteYearly  = parseFloat(localStorage.getItem("laYearly"), 10)  || 0;
        latteDecade  = parseFloat(localStorage.getItem("laDecade"), 10)  || 0;
        latteCareer  = parseFloat(localStorage.getItem("laCareer"), 10)  || 0;

        document.getElementById("latteDaily").innerHTML  = numberToDollar(latteDaily);
        document.getElementById("latteMonthly").innerHTML =numberToDollar(latteMonthly);
        document.getElementById("latteYearly").innerHTML = numberToDollar(latteYearly);
        document.getElementById("latteDecade").innerHTML =numberToDollar(latteDecade);
        document.getElementById("latteCareer").innerHTML = numberToDollar(latteCareer);
        

        

    }   
    else{
        totalDaily = totalMonthly = totalYearly = totalDecade = totalCareer = 0;
        smokeDaily = packCost = packPerDay = smokeMonthly = smokeYearly = smokeDecade = smokeCareer = 0;
        lunchCost = lunchDaysPerWeek = brownBagCost = lunchDaily =  brownBagPerWeek = 0;
        lunchWeekly = lunchMonthly = lunchYearly = lunchDecade = lunchCareer = 0;
        latteCost = latteDaysPerWeek = cupsPerDay = cheaperCup = 0;
        latteDaily = latteWeekly = latteMonthly = latteYearly = latteDecade = latteCareer = 0;
    }
    
        
   
   function totals(){
        totalDaily   = smokeDaily   + lunchDaily   + latteDaily;
        totalMonthly = smokeMonthly + lunchMonthly + latteMonthly;
        totalYearly  = smokeYearly  + lunchYearly  + latteYearly;
        totalDecade  = smokeDecade  + lunchDecade  + latteDecade;
        totalCareer  = smokeCareer  + lunchCareer  + latteCareer;

        if (isLocalStorage()){
            localStorage.setItem("tDaily", totalDaily);
            localStorage.setItem("tMonthly", totalMonthly);
            localStorage.setItem("tYearly", totalYearly);
            localStorage.setItem("tDecade", totalDecade);
            localStorage.setItem("tCareer", totalCareer);
        }

        document.getElementById("daily").innerHTML = numberToDollar(totalDaily);
        document.getElementById("monthly").innerHTML = numberToDollar(totalMonthly);
        document.getElementById("yearly").innerHTML = numberToDollar(totalYearly);
        document.getElementById("decade").innerHTML = numberToDollar(totalDecade);
        document.getElementById("career").innerHTML = numberToDollar(totalCareer);
}

   function displayName(){
       if(isLocalStorage()){
            if (localStorage.getItem("userName") != null){
                name = localStorage.getItem("userName");
                document.getElementById("divUser").innerHTML = name;
            }else{
                document.getElementById("divUser").innerHTML = "Guest";
            }
        }
    }

    function numberToDollar(num){
        var dollars = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimulFractionDigits: 2, 
    });
        return dollars.format(num);
    }
  
    document.getElementById("getName").addEventListener("click", function(){
        name = document.getElementById("userName").value;
        if (name.length <= 0 || name.length > 100)
            name = "Guest";
        if(isLocalStorage())
            localStorage.setItem("userName", name);
        displayName();
    });

   //Smoking Savings
 document.getElementById("smokeButton").addEventListener("click", function(){
        packCost = packPerDay = smokeDaily = smokeMonthly = smokeYearly = smokeDecade = smokeCareer = 0;
        packCost = parseFloat(document.getElementById("singlePack").value, 10) || 9;
        packPerDay = parseInt(document.getElementById("packDay").value, 10) || 1;
        //If a negative number is input or cost is over 100 dollars use default
        if(packCost < 0 || packCost > 100){
            document.getElementById("singlePack").value = 9;
            packCost = 9;
        }
        if (packPerDay < 0 || packPerDay > 10){
            document.getElementById("packDay").value = 1;
                packPerDay = 1;
        }

        smokeDaily = packCost * packPerDay
        smokeMonthly = smokeDaily * 30;
        smokeYearly = smokeDaily * 365;
        smokeDecade = smokeYearly * 10;
        smokeCareer = smokeDecade * 3;

         if (isLocalStorage()){
            localStorage.setItem("smDaily", smokeDaily);
            localStorage.setItem("smMonthly", smokeMonthly);
            localStorage.setItem("smYearly", smokeYearly);
            localStorage.setItem("smDecade", smokeDecade);
            localStorage.setItem("smCareer", smokeCareer);
        }

        totals();
        document.getElementById("smokeDaily").innerHTML  =numberToDollar(smokeDaily);
        document.getElementById("smokeMonthly").innerHTML =numberToDollar(smokeMonthly);
        document.getElementById("smokeYearly").innerHTML = numberToDollar(smokeYearly);
        document.getElementById("smokeDecade").innerHTML =numberToDollar(smokeDecade);
        document.getElementById("smokeCareer").innerHTML = numberToDollar(smokeCareer);
});

    //Brown Bagging Savings
    document.getElementById("bagButton").addEventListener("click", function(){
        //reset values when button is pushed again
        lunchCost = lunchDaysPerWeek = brownBagCost = lunchDaily =  brownBagPerWeek = 0;
        lunchWeekly = lunchMonthly = lunchYearly = lunchDecade = lunchCareer = 0; 

        lunchCost = parseFloat(document.getElementById("lunchCost").value, 10) || 15.50;
        lunchDaysPerWeek = parseInt(document.getElementById("eatOutDays").value, 10) || 5;
        brownBagCost = parseFloat(document.getElementById("costToBrownBag").value, 10) || 2.50;
        //If a negative number is input or cost is over 100 dollars use default
        if(lunchCost < 0 || lunchCost > 1000){
            document.getElementById("lunchCost").value = 15.50;
            lunchCost = 15.50;
        }
        if (lunchDaysPerWeek < 0 || lunchDaysPerWeek > 7){
            document.getElementById("eatOutDays").value = 5;
                lunchDaysPerWeek = 5;
        }
        if (brownBagCost < 0 || brownBagCost > lunchCost){
            brownBagCost = 2.50
            document.getElementById("costToBrownBag").value = 2.50;
        }

        lunchDaily = lunchCost - brownBagCost;
        
        brownBagPerWeek = brownBagCost * 5;

        lunchWeekly = (lunchDaily * lunchDaysPerWeek) - brownBagPerWeek;
        lunchMonthly = lunchWeekly * 4;
        lunchYearly = lunchWeekly * 52;
        lunchDecade = lunchYearly * 10;
        lunchCareer = lunchDecade * 3;

        if (isLocalStorage()){
            localStorage.setItem("luDaily",   lunchDaily);
            localStorage.setItem("luMonthly", lunchMonthly);
            localStorage.setItem("luYearly",  lunchYearly);
            localStorage.setItem("luDecade",  lunchDecade);
            localStorage.setItem("luCareer",  lunchCareer);
        }


        totals();
        document.getElementById("returnLunchDaily").innerHTML  = numberToDollar(lunchDaily);
        document.getElementById("lunchMonthly").innerHTML =numberToDollar(lunchMonthly);
        document.getElementById("lunchYearly").innerHTML = numberToDollar(lunchYearly);
        document.getElementById("lunchDecade").innerHTML =numberToDollar(lunchDecade);
        document.getElementById("lunchCareer").innerHTML = numberToDollar(lunchCareer);
});

        //Latte Savings
    document.getElementById("latteButton").addEventListener("click", function(){
        //reset values when button is pushed
        latteCost = latteDaysPerWeek = cupsPerDay = cheaperCup = 0;
         latteDaily = latteWeekly = latteMonthly = latteYearly = latteDecade = latteCareer = 0;    
        
        latteCost = parseFloat(document.getElementById("latteCostInput").value, 10) || 5;
        latteDaysPerWeek = parseInt(document.getElementById("latteDaysPerWeek").value, 10) || 5;
        cupsPerDay = parseInt(document.getElementById("lattesPerDay").value, 10) || 1;
        cheaperCup = parseFloat(document.getElementById("cheaperCoffee").value, 10) || 0;
        //If a negative number is input or cost is over 100 dollars use default
        if(latteCost < 0 || latteCost > 25){
            document.getElementById("latteCost").value = 5.09;
            latteCost = 15.50;
        }
        if (latteDaysPerWeek < 0 || latteDaysPerWeek > 7){
            document.getElementById("latteDaysPerWeek").value = 5;
                latteDaysPerWeek = 5;
        }
        if (cupsPerDay < 0 || cupsPerDay > 10){
            document.getElementById("lattesPerday").value = 1;
            cupsPerDay = 1;
        }

        latteDaily   = (latteCost  * cupsPerDay) - (cheaperCup * cupsPerDay);
        latteWeekly  = (latteDaily * latteDaysPerWeek);
        latteMonthly = latteWeekly * 4;
        latteYearly  = latteWeekly * 52;
        latteDecade  = latteYearly * 10;
        latteCareer  = latteDecade * 3;

        if (isLocalStorage()){
            localStorage.setItem("laDaily",   latteDaily);
            localStorage.setItem("laMonthly", latteMonthly);
            localStorage.setItem("laYearly",  latteYearly);
            localStorage.setItem("laDecade",  latteDecade);
            localStorage.setItem("laCareer",  latteCareer);
        }

        totals();
        document.getElementById("latteDaily").innerHTML  = numberToDollar(latteDaily);
        document.getElementById("latteMonthly").innerHTML =numberToDollar(latteMonthly);
        document.getElementById("latteYearly").innerHTML = numberToDollar(latteYearly);
        document.getElementById("latteDecade").innerHTML =numberToDollar(latteDecade);
        document.getElementById("latteCareer").innerHTML = numberToDollar(latteCareer);
        
});



}

