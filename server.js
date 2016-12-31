var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true
  }
}));

//Home page view

app.get('/', function(req, res) {
  res.render('home', {
    title: 'iErgo'
  });
});

//Flowchart views

app.get('/assessed_risk', function(req, res) {
  res.render('assessed_risk', {
    title: 'iErgo'
  });
});

app.get('/checklist', function(req, res) {
  res.render('checklist', {
    title: 'iErgo'
  });
});

app.get('/mmh_or_uet', function(req, res) {
  res.render('mmh_or_uet', {
    title: 'iErgo'
  });
});

app.get('/mmh_repetitive', function(req, res) {
  res.render('mmh_repetitive', {
    title: 'iErgo'
  });
});

app.get('/uet_repetitive', function(req, res) {
  res.render('uet_repetitive', {
    title: 'iErgo'
  });
});

app.get('/push_or_pull', function(req, res) {
  res.render('push_or_pull', {
    title: 'iErgo'
  });
});

app.get('/risk_from_force', function(req, res) {
  res.render('risk_from_force', {
    title: 'iErgo'
  });
});

app.get('/vibration', function(req, res) {
  res.render('vibration', {
    title: 'iErgo'
  });
});

app.get('/mmh_repetitive_yes', function(req, res) {
  res.render('mmh_repetitive_yes', {
    title: 'iErgo'
  });
});

app.get('/uet_repetitive_yes', function(req, res) {
  res.render('uet_repetitive_yes', {
    title: 'iErgo'
  });
});

app.get('/mmh_push_pull_yes', function(req, res) {
  res.render('mmh_push_pull_yes', {
    title: 'iErgo'
  });
});

app.get('/mmh_push_pull_no', function(req, res) {
  res.render('mmh_push_pull_no', {
    title: 'iErgo'
  });
});

app.get('/uet_risk_from_force', function(req, res) {
  res.render('uet_risk_from_force', {
    title: 'iErgo'
  });
});

app.get('/uet_vibration_yes', function(req, res) {
  res.render('uet_vibration_yes', {
    title: 'iErgo'
  });
});

app.get('/uet_vibration_no', function(req, res) {
  res.render('uet_vibration_no', {
    title: 'iErgo'
  });
});

//Flow Chart result tools views
//These are exact same as tool definition views
//Except for the links used by their back button

app.get('/mmh_repetitive_yes_moore', function(req, res) {
  res.render('mmh_repetitive_yes_moore', {
    title: 'iErgo'
  });
});

app.get('/mmh_repetitive_yes_reba', function(req, res) {
  res.render('mmh_repetitive_yes_reba', {
    title: 'iErgo'
  });
});

app.get('/mmh_repetitive_yes_niosh', function(req, res) {
  res.render('mmh_repetitive_yes_niosh', {
    title: 'iErgo'
  });
});

app.get('/mmh_push_pull_yes_liberty', function(req, res) {
  res.render('mmh_push_pull_yes_liberty', {
    title: 'iErgo'
  });
});

app.get('/mmh_push_pull_no_niosh', function(req, res) {
  res.render('mmh_push_pull_no_niosh', {
    title: 'iErgo'
  });
});

app.get('/mmh_push_pull_no_wisha', function(req, res) {
  res.render('mmh_push_pull_no_niosh', {
    title: 'iErgo'
  });
});

app.get('/uet_repetitive_yes_moore', function(req, res) {
  res.render('uet_repetitive_yes_moore', {
    title: 'iErgo'
  });
});

app.get('/uet_repetitive_yes_roger', function(req, res) {
  res.render('uet_repetitive_yes_roger', {
    title: 'iErgo'
  });
});

app.get('/uet_risk_from_force_moore', function(req, res) {
  res.render('uet_risk_from_force_moore', {
    title: 'iErgo'
  });
});

app.get('/uet_vibration_yes_acgih', function(req, res) {
  res.render('uet_vibration_yes_acgih', {
    title: 'iErgo'
  });
});

app.get('/uet_vibration_no_rula', function(req, res) {
  res.render('uet_vibration_no_rula', {
    title: 'iErgo'
  });
});

app.get('/uet_vibration_no_moore', function(req, res) {
  res.render('uet_vibration_no_moore', {
    title: 'iErgo'
  });
});



//Tool List page view

app.get('/tool_definitions', function(req, res) {
  res.render('tool_definitions', {
    title: 'iErgo'
  });
});

//Tool page views

app.get('/acgih', function(req, res) {
  res.render('acgih', {
    title: 'iErgo'
  });
});

app.get('/roger', function(req, res) {
  res.render('roger', {
    title: 'iErgo'
  });
});

app.get('/rula', function(req, res) {
  res.render('rula', {
    title: 'iErgo'
  });
});

app.get('/wisha', function(req, res) {
  res.render('wisha', {
    title: 'iErgo'
  });
});

app.get('/strain_index', function(req, res) {
  res.render('moore', {
    title: 'iErgo'
  });
});

app.get('/niosh', function(req, res) {
  res.render('niosh_lifting', {
    title: 'iErgo'
  });
});

app.get('/reba', function(req, res) {
  res.render('reba', {
    title: 'iErgo'
  });
});

app.get('/liberty', function(req, res) {
  res.render('liberty', {
    title: 'iErgo'
  });
});

app.get('/moore', function(req, res) {
  res.render('moore', {
    title: 'iErgo'
  });
});

app.get('/niosh_lifting', function(req, res) {
  res.render('niosh_lifting', {
    title: 'iErgo'
  });
});

//Stormpath function

app.on('stormpath.ready',function(){
  console.log('Stormpath Ready');
  app.listen(10001);
});
