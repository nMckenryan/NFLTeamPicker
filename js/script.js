//Team Constructor
function Team(name, logo, message) {
    this.name = name;
    this.logo = logo;
    this.message = message;
}

// //declare array of team objects.
// var teamArray = new Array();

var testTeam = {name: "TESTNAME", logo: "tESTIMG", message: "TESTDESC"}


var pats = {name: "New England Patriots", logo: "img/pats.png", message: "Tom Brady: The Team."}
var cowboys = {name: "Dallas Cowboys", logo: "img/cowb.png", message: "An elite team with a sketchy owner."}
var eagles = {name: "Philadelphia Eagles", logo: "img/eagles.jpg", message: "Good Team, Obnoxious Fans"}
var gbPackers = {name: "Green Bay Packers", logo: "img/gbp.jpg", message: "Known for cheese paraphenalia."}
var steelers = {name: "Pittsburgh Steelers", logo: "img/steelers.png", message: "Most of their players have criminal records."}
var broncos = {name: "Denver Broncos", logo: "img/bronc.png", message: "Yeah They're alright"}
var raiders =  { name: "Oakland Raiders", logo: "img/raid.jpg", message: "Yarr Harr"}
var chicagoBears = { name: "Chicago Bears", logo: "img/bears.jpg", message: "Wait, aren't they a baseball team?"}
var norlSaints =  { name: "New Orleans Saints", logo: "img/saints.png", message: "Yo why is everything from N'Orleans deep fried?"}
var laRams =  { name: "Los Angeles Rams", logo: "img/rams.jpg", message: "Recently destroyed by the Patriots"}
var kansaCityChiefs =  { name: "Kansas City Chiefs", logo: "img/chiefs.jpg", message: "America's least racist Native American themed team."}
var nyGiants =  { name: "New York Giants", logo: "img/nyg.jpg", message: "They're not that big, really."}
var sanFran49ers =  { name: "San Francisco 49ers", logo: "img/sf49.jpg", message: "HUR HUR MORE LIKE 69ERS"}
var washingtonRedskins =  { name: "Washington Redskins", logo: "img/wrs.jpg", message: "Bruh just change your name already."}
var seattleSeahawks =  { name: "Seattle Seahawks", logo: "img/ssh.jpg", message: "Did ok in a SuperBowl once."}
var minnesotaVikings =  { name: "Minnesota Vikings", logo: "img/vik.jpg", message: "I've never seen a Viking wear Purple and Yellow."}
var miamiDolphins =  { name: "Miami Dolphins", logo: "img/md.jpg", message: "Unaffiliated with Seaworld."}
var baltimoreRaves =  { name: "Baltimore Ravens", logo: "img/ravens.jpg", message: "Wait, is this a Edgar Allan Poe reference?"}
var nyJets =  {name: "New York Jets", logo: "img/nyj.jpg", message: "Gee New York, how come Mom lets you have two teams?"}
var houstTex =  {name: "Houston Texans", logo: "img/houst.jpg", message: "Rivals to to the Jacksonville Mississipians and the Chicago Illinoisans"}
var detroitLions =  {name: "Detroit Lions", logo: "img/lions.jpg", message: "The players are just happy to have jobs, really."}
var indianapolisColts =  {name: "Indianapolis Colts", logo: "img/colt.jpg", message: "They have a Colt following"}
var laChargers =  {name: "Los Angeles Chargers", logo: "img/charg.png", message: "Their logo looks like a Schoolboy's haircut."}
var carolinaPanthers =  {name: "Carolina Panthers", logo: "img/panthers.jpg", message: "Who cares"}
var atlantaFalcons =  {name: "Atlanta Falcons", logo: "img/falcons.jpg", message: "cool I guess"}
var cincinBengals =  {name: "Cincinatti Bengals", logo: "img/bengal.jpg", message: "Someone needs to tell them that a Bengal is a place, not just a Tiger."}
var buffaloBills =  {name: "Buffalo Bills", logo: "img/bill.jpg", message: "None of the players are actually called Bill."}
var tenTitans =  {name: "Tennessee Titans", logo: "img/titans.jpg", message: "The name 'Giants' was taken."}
var jacksonJag =  {name: "Jacksonville Jaguars", logo: "img/jag.jpg", message: "They're based in London. Naturally."}
var arizonaCardinals =  {name: "Arizona Cardinals", logo: "img/card.png", message: "Not eligible for the Papacy."}
var tampBuc =  {name: "Tampa Bay Buccanners", logo: "img/bucc.jpg", message: "Totally forgot about this team until the last minute."}
var browns =  {name: "Cleveland Browns", logo: "img/browns.jpg", message: "Move over Detroit, there's a new Factory of Sadness"}

var sampleTeamArray = [pats, cowboys, eagles, gbPackers, steelers, broncos, raiders, chicagoBears];
var fullTeamArray = [pats, cowboys, eagles, gbPackers, steelers, broncos, raiders, chicagoBears, norlSaints, laRams, kansaCityChiefs, nyGiants,
                      sanFran49ers, washingtonRedskins, seattleSeahawks, minnesotaVikings, miamiDolphins, baltimoreRaves, nyJets, houstTex, detroitLions,
                    indianapolisColts, laChargers, carolinaPanthers, atlantaFalcons, cincinBengals, buffaloBills, tenTitans, jacksonJag, tampBuc, browns];

function Spinner(teamArray) {
  this.teamList = teamArray;
  this.teamActive = testTeam;
}

var spin = {teamList: sampleTeamArray };

//populate spinner w/ images corresponding to objects.
function populateSpinner(spinner) {
  for (var i = 0; i < spinner.teamList.length; i++) {
    var build = "<div class='item'>"
      + "<img src=" + spinner.teamList[i].logo + " alt=" + spinner.teamList[i].name + "/></div>";

    document.getElementById('carousel-inner').appendChild = build;
  }
}


//create function to cycle through teams.


//create function to display team name & logo.
function expandTeam(team) {
  // var wrapper = $('#wrapper'), container;
  // container = $('<div class = "team" class="container"></div>');
  // container.append('<div class="teamName"' + team.name + "</div>");
  // container.append('<div class="teamLogo"><img src="' + team.logo + '" alt="' + team.name + '"></div>');
  // container.append('<div class="teamDesc"' + team.message + "</div>");
  // document.write(container);

  return document.getElementById('clunge').innerHTML = "<h2>" + team.name + "</h2>"
    + "<h3>" + team.message + "</h3>"
    + "<img src='" + team.logo + "' alt=''></img>";
};
