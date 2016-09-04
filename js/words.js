function calculate() {
  // Return US dollar value of current text's swear contents

var fee = 0;

var p = $('#phrase').val();
p = p.toLowerCase();

// BEGIN cut/paste from worksheet
fee +=c(p, 'Cunt') * 1;
fee +=c(p, 'Motherfucker') * 1;
fee +=c(p, 'Fuck') * 1;
fee +=c(p, 'Wanker') * 1;
fee +=c(p, 'Nigger') * 1;
fee +=c(p, 'Bastard') * 1;
fee +=c(p, 'Prick') * 1;
fee +=c(p, 'Bollocks') * 1;
fee +=c(p, 'Arsehole') * 0.25;
fee +=c(p, 'Asshole') * 0.25;
fee +=c(p, 'Paki') * 0.25;
fee +=c(p, 'Shag') * 0.25;
fee +=c(p, 'Whore') * 0.25;
fee +=c(p, 'Twat') * 0.25;
fee +=c(p, 'Piss off') * 0.25;
fee +=c(p, 'Spastic') * 0.25;
fee +=c(p, 'Slag') * 0.25;
fee +=c(p, 'Shit') * 0.25;
fee +=c(p, 'Test') * 0.25;
fee +=c(p, 'Dickhead') * 0.1;
fee +=c(p, 'Pissed off') * 0.1;
fee +=c(p, 'Arse') * 0.1;
fee +=c(p, 'Ass') * 0.1;
fee +=c(p, 'Bugger') * 0.1;
fee +=c(p, 'Balls') * 0.1;
fee +=c(p, 'Jew') * 0.1;
fee +=c(p, 'Sodding') * 0.1;
fee +=c(p, 'Jesus Christ') * 0.05;
fee +=c(p, 'Crap') * 0.05;
fee +=c(p, 'Bloody') * 0.05;
fee +=c(p, 'God') * 0.05;
fee +=c(p, 'Bitch') * 0.05;
fee +=c(p, 'Cock') * 0.05;
fee +=c(p, 'Weiner') * 0.05;
fee +=c(p, 'Schlong') * 0.05;
fee +=c(p, 'Dick') * 0.05;
fee +=c(p, 'Pussy') * 0.05;
// END cut/pate from worksheet

setfee(fee);

}
