
 module.exports = function(bot){
    bot.hear(/What does the fox say?/, function(res) {
   return res.send("Gering-ding-ding-ding-dingeringeding!");
 });
 };
