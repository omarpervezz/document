var a = document.getElementById('efficency');
var w = document.getElementById('powerWatts');
let divider;
a.addEventListener('change', function() {
   //  psu efficency to W
   efficencyConverter(this.value);
}, false);

const efficencyConverter = (value) => {
   // checking value
   switch (value) {
      case '81':
      divider = Math.ceil(100 / 0.81);
         w.value = divider;
         break;
         case '82':
      divider = Math.ceil(100 / 0.82);
         w.value = divider;
         break;
         case '83':
      divider = Math.ceil(100 / 0.83);
         w.value = divider;
         break;
         case '84':
      divider = Math.ceil(100 / 0.84);
         w.value = divider;
         break;
         case '85':
      divider = Math.ceil(100 / 0.85);
         w.value = divider;
         break;
         case '86':
      divider = Math.ceil(100 / 0.86);
         w.value = divider;
         break;
         case '87':
         divider = Math.ceil(100 / 0.87);
         w.value = divider;
         break;
         case '88':
         divider = Math.ceil(100 / 0.88);
         w.value = divider;
         break;
         case '89':
         divider = Math.ceil(100 / 0.89);
         w.value = divider;
         break;
         case '90':
         divider = Math.ceil(100 / 0.9);
         w.value = divider;
         break;
         case '91':
         divider = Math.ceil(100 / 0.91);
         w.value = divider;
         break;
      default:
         w.value = ''
   }
};

function validateEntry() {

   var numbersOnly = /^\d*\.?\,?\d*$/;
   document.getElementById("errorid").innerHTML = "";
   
   if (document.getElementById("hoursPerDay").value === "" || document.getElementById("powerWatts").value === "" || document.getElementById("kwhPrice").value === "") {
         document.getElementById("errorid").innerHTML = "<b>Notice:</b> You left a required input field empty.";
         return false;
      }
   else if (document.getElementById("hoursPerDay").value > 24) {
         document.getElementById("errorid").innerHTML = "<b>Notice:</b> Please check over Hours Used Per Day, it appears to be greater than 24 hours.";
         return false;
      }
   else if (document.getElementById("hoursPerDay").value.match(numbersOnly) && document.getElementById("powerWatts").value.match(numbersOnly) && document.getElementById("kwhPrice").value.match(numbersOnly)) {
         return true;
      }
   else {
         document.getElementById("errorid").innerHTML = "<b>Notice:</b> Check the input fields there is an invalid character, only numbers are allowed.";
         return false;
      }
   }
   

   function energyCost() {
      var powerWatts = document.getElementById("powerWatts").value.replace(",",".");
      var hoursPerDay = document.getElementById("hoursPerDay").value.replace(",",".");
      var kwhPrice = document.getElementById("kwhPrice").value.replace(",",".");
      
      var costPerHour = (powerWatts / 1000) * kwhPrice;
      var costPerDay = hoursPerDay * costPerHour;
      var costPerMonth = 30.42 * costPerDay;
      var costPerYear = 12 * costPerMonth;
      var kwhPerDay = (powerWatts / 1000) * hoursPerDay;
           
      document.getElementById("costPerHour").value = costPerHour.toFixed(4);
      document.getElementById("costPerDay").value = costPerDay.toFixed(4);
      document.getElementById("costPerMonth").value = costPerMonth.toFixed(2);
      document.getElementById("costPerYear").value = costPerYear.toFixed(2);
      document.getElementById("kwhPerDay").value = kwhPerDay.toFixed(2);
      
      }