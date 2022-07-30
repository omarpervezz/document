var a = document.getElementById('efficency');
var w = document.getElementById('powerWatts');

const powerWatts = document.getElementById('powerWatts');
const operationTime = document.getElementById('hoursPerDay');
const kWhPrice = document.getElementById('kwhPrice');
const amd = document.getElementById('amt');
const kWhTargetNumber = document.getElementById('c_output');
const resultOutput = document.querySelector('.output .print-output');


let divider, fxn, savingsYear;
a.addEventListener('change', function () {
   //  psu efficency to W
   efficencyConverter(this.value);
}, false);


const efficencyConverter = (value) => {
   // checking value
   if (powerWatts.value == '') {
      alert('please give your PSU power')
   } else {
      switch (value) {
         case '81':
            divider = (150 / 0.81);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '82':
            divider = (150 / 0.82);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '83':
            divider = (150 / 0.83);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '84':
            divider = (150 / 0.84);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '85':
            divider = (100 / 0.85);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '86':
            divider = (150 / 0.86);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '87':
            divider = (150 / 0.87);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '88':
            divider = (150 / 0.88);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '89':
            divider = (150 / 0.89);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '90':
            divider = (150 / 0.9)
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '91':
            divider = (150 / 0.91);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '92':
            divider = (150 / 0.92);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '93':
            divider = (150 / 0.93);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '94':
            divider = (150 / 0.94);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '95':
            divider = (150 / 0.95);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '96':
            divider = (150 / 0.96);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '97':
            divider = (150 / 0.97);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '98':
            divider = (150 / 0.98);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         case '99':
            divider = (150 / 0.99);
            fxn = divider.toFixed(2);
            calculated(fxn);
            break;
         default:
            console.log('please give the value');
      }
   }
};

function calculated(number) {
   const pwats = (powerWatts.value - number);
   let psuUsages = pwats.toFixed(2);
   let hoursdivided = (psuUsages * operationTime.value);
   amd.value = hoursdivided;
   do_conversion(0.00099999999920001);
   // get kWh unit
   let equals = kWhTargetNumber.querySelector('#kWhatts').innerHTML;
   // remove space
   removeSpace(equals);


}


function removeSpace(e) {
   let splitingValue = e.split('');
   const index = splitingValue.indexOf(" ");
   if (index > -1) { // only splice array when item is found
      splitingValue.splice(index, 1); // 2nd parameter means remove one item only
   }
   const filtering = splitingValue.join("").toString();
   const flowting = ((parseFloat(filtering)) * 0.2) * 365;
   savingsYear = flowting;
   if (savingsYear) {
      resultOutput.innerHTML = `$${savingsYear.toFixed(4)}`;
   } else {
      resultOutput.innerHTML = 0;
   }
}


function do_conversion(conversionFactor) {
   var amtToConvert = document.getElementById('amt').value;
   var precision = 5;
   if (isNaN(precision) || precision == "") precision = 0;
   var conversionResult = 0;
   amtToConvert = amtToConvert.replace(/^[\s\-]*/, "");
   amtToConvert = amtToConvert.replace(/\s*$/, "");

   if (amtToConvert == "") conversionResult = "";
   else {
      if (amtToConvert.indexOf('/') > 0) {

         if (/\d+\s+\d+/.test(amtToConvert)) {
            wholenumber = amtToConvert.replace(/^(\d+)\s.*/, "$1");
            fractionpart = amtToConvert.replace(/^\d+\s+(.*)/, "$1");
            fractionpart = fractionpart.replace(/\s/g, "");
            amtToConvert = wholenumber + " " + fractionpart;
         } else {
            wholenumber = 0;
            fractionpart = amtToConvert.replace(/\s/g, "");
            amtToConvert = fractionpart;
         }
         var numerator = fractionpart.replace(/([^\D])\/.*/, "$1");
         var denominator = fractionpart.replace(/.*\/+/, "");
         var decimal_val = (+wholenumber) + ((+numerator) / (+denominator));
         if (isNaN(denominator) || isNaN(numerator)) {
            conversionResult = 0;
            amtToConvert = 0;
         } else {
            conversionResult = decimal_val * conversionFactor;
         }
      } else {
         amtToConvert = amtToConvert.replace(/\s/g, "");
         conversionResult = amtToConvert * conversionFactor;


      }
      conversionResult = (parseInt(precision) >= 0) ? conversionResult.toFixed(precision) : conversionResult;
   }

   if (Math.round(conversionResult) != conversionResult) {
      cR_raw = conversionResult + '';
      decamt = cR_raw.replace(/(^\d+|0+$)/g, "").length - 1;
      tvalround = Math.round(conversionResult * Math.pow(10, 3)) / Math.pow(10, 3);
      tvalwhole = String(tvalround).split('.')[0];
      while (/(\d+)(\d{3})/.test(tvalwhole)) tvalwhole = tvalwhole.replace(/(\d+)(\d{3})/, '$1 $2');
      tvalfrac1 = parseFloat("." + String(tvalround).split('.')[1]);
      tvalfrac2 = "1";
      for (z = 0; z < String(tvalfrac1).length - 2; z++) tvalfrac2 += "0";
      tvalfrac1 = parseInt(tvalfrac1 * tvalfrac2);
      tvalfrac2 = parseInt(tvalfrac2);
      for (z = 2; z < tvalfrac1 + 1; z++) {
         if (tvalfrac1 % z == 0 && tvalfrac2 % z == 0) {
            tvalfrac1 = tvalfrac1 / z;
            tvalfrac2 = tvalfrac2 / z;
            z = 2;
         }
      }

      gcd = 1;
      if (tvalfrac1 > tvalfrac2) {
         tvalfrac1 = tvalfrac1 + tvalfrac2;
         tvalfrac2 = tvalfrac1 - tvalfrac2;
         tvalfrac1 = tvalfrac1 - tvalfrac2;
      }
      if (tvalfrac2 == (Math.round(tvalfrac2 / tvalfrac1)) * tvalfrac1) gcd = tvalfrac1;
      else {
         for (var i = Math.round(tvalfrac1 / 2); i > 1; i = i - 1) {
            if ((tvalfrac1 == (Math.round(tvalfrac1 / i)) * i))
               if ((tvalfrac2 == (Math.round(tvalfrac2 / i)) * i)) {
                  gcd = i;
                  i = -1;
               }
         }
      }
      tvalfrac1 = tvalfrac1 / gcd;
      tvalfrac2 = tvalfrac2 / gcd;

      disptfrac = '<br /><b>Fraction :</b> <span>' + ((tvalwhole == 0) ? '' : tvalwhole + ' ') + '<sup>' + tvalfrac1 + "</sup>/<small>" + tvalfrac2 + '</small></span> ' + to_plural + ' (' + to_abbr + ')';
   } else disptfrac = '';

   if (/[^\d\s\/\.]/.test(amtToConvert) || amtToConvert == "") var c_out = "";
   else {
      conversionResult_raw = conversionResult;
      while (/(\d+)(\d{3})/.test(conversionResult)) conversionResult = conversionResult.replace(/(\d+)(\d{3})/, '$1 $2');
      if (amtToConvert == 1) from_word = from_singular;
      else from_word = from_plural;
      if (conversionResult == 1) to_word = to_singular;
      else to_word = to_plural;

      if (conversionResult != "Infinity") c_out += "<br /><b>Equals :</b> <span id='kWhatts' style='color: #339933'>" + conversionResult + "</span> " + to_word + ' (' + to_abbr + ')';
   }
   var el = document.getElementById('c_output');
   if (isNaN(conversionResult_raw)) el.innerHTML = "";
   else el.innerHTML = c_out + disptfrac;
}
const kwatss = document.getElementById('kWhatts');


amd.addEventListener('change', () => {
   do_conversion(0.00099999999920001)
});