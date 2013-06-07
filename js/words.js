function calculate() {
var p = $('#phrase').val();
var fee = 0;
p = p.toLowerCase();
// BEGIN cut/paste from worksheet
fee +=c(p, 'Cunt') * 0.02;
fee +=c(p, 'Motherfucker*') * 0.01;
fee +=c(p, 'Fuck') * 0.01;
fee +=c(p, 'Wanker') * 0.01;
fee +=c(p, 'Nigger') * 0.01;
fee +=c(p, 'Bastard') * 0.01;
fee +=c(p, 'Prick') * 0.01;
fee +=c(p, 'Bollocks') * 0.01;
fee +=c(p, 'Arsehole') * 0.002;
fee +=c(p, 'Asshole') * 0.002;
fee +=c(p, 'Paki') * 0.002;
fee +=c(p, 'Shag') * 0.002;
fee +=c(p, 'Whore') * 0.002;
fee +=c(p, 'Twat') * 0.002;
fee +=c(p, 'Piss off') * 0.002;
fee +=c(p, 'Spastic') * 0.002;
fee +=c(p, 'Slag') * 0.002;
fee +=c(p, 'Shit') * 0.002;
fee +=c(p, 'Dickhead') * 0.001;
fee +=c(p, 'Pissed off') * 0.001;
fee +=c(p, 'Arse') * 0.001;
fee +=c(p, 'Ass') * 0.001;
fee +=c(p, 'Bugger') * 0.001;
fee +=c(p, 'Balls') * 0.001;
fee +=c(p, 'Jew') * 0.001;
fee +=c(p, 'Sodding') * 0.001;
fee +=c(p, 'Jesus Christ') * 0.001;
fee +=c(p, 'Crap') * 0.001;
fee +=c(p, 'Bloody') * 0.001;
fee +=c(p, 'God') * 0.001;
fee +=c(p, 'Bitch') * 0.001;
fee +=c(p, 'Cock') * 0.001;
fee +=c(p, 'Weiner') * 0.001;
fee +=c(p, 'Schlong') * 0.001;
fee +=c(p, 'Dick') * 0.001;
fee +=c(p, 'Pussy') * 0.001;
// END cut/pate from worksheet

setfee(fee);

}

