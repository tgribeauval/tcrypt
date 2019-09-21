const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  
  });

rl.question('How many S17 53TH you own?: ', (n) => {
    if (isNaN(n)) {
      console.log("You must enter a number smartass");
      rl.close();
      process.stdin.destroy();
      process.exit()
    }
    rl.question('What is your investment in USD? (3338.18$) ', (investment) => {
        if (isNaN(investment)) {
            console.log("You must enter a number smartass");
            rl.close();
            process.stdin.destroy();
            process.exit()
        }
        rl.question('Cost in electricity in USD? (127.86$) ', (cost) => {

            if (isNaN(cost)) {
                console.log("You must enter a number smartass");
                rl.close();
                process.stdin.destroy();
                process.exit()
            }
        
    
            var http = require('https');
            http.createServer(function(req, res) {});
    
    
            var url = "https://www.coincalculators.io/api?name=bitcoin&hashrate=53000000000000&power=2100&powercost=0&difficultytime=0";
    
            http.get(url, function(res){
                var body = '';
    
                res.on('data', function(chunk){
                    body += chunk;
                });
        
                res.on('end', function(){
                    var data = JSON.parse(body);
                    var dailyRevenue = data.revenueInDayUSD.toFixed(2);
                    var weelyRevenue = data.revenueInWeekUSD.toFixed(2);
                    var monthlyRevenue = data.revenueInMonthUSD.toFixed(2);
                    var yearlyRevenue = data.revenueInYearUSD.toFixed(2);

                    var btcPrice = data.exchanges[0].price;
                    

                    var monthlyProfit = (monthlyRevenue - cost).toFixed(2);
                    var yearlyProfit = (yearlyRevenue - (cost*12)).toFixed(2);
                    var paybackPeriod = (investment/(n*monthlyProfit)).toFixed(2);

                    console.log("CALCULATIONS ARE BASED ON:")
                    console.log("THE CURRENT BTC PRICE IN USD:");
                    console.log(btcPrice)
                    console.log("DAILY REVENUE:",n*dailyRevenue,"$USD");
                    console.log("WEEKLY REVENUE:",n*weelyRevenue,"$USD");
                    console.log("MONTHLY REVENUE:",n*monthlyRevenue,"$USD");
                    console.log("MONTHLY PROFIT:", n*monthlyProfit,"$USD");
                    console.log("YEARLY REVENUE:",n*yearlyRevenue,"$USD");                   
                    console.log ("YEARLY PROFT:", n*yearlyProfit,"$USD");
                    console.log("PAYBACK PERIOD:", paybackPeriod,"MONTHS");
                    process.exit()
                });
                }).on('error', function(e){
                console.log("Got an error: ", e);
                });
        });

    });
});