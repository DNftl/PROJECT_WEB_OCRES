var express = require("express");
var router = express.Router();

var graphLine = require("./../models/graphLineModel");


//affichage
router.get("/", function(req, res) {

  graphLine.find((err, graphLine) => {
    if(err)res.send(err)
      res.json(graphLine)
  })
});

//ajout (on en ajoute un)
router.post('/', async (req, res) => {
  
  const month = req.body.month
  const income = req.body.income
  const outcome = req.body.outcome
  if (!outcome || !income || !month) { // on vérifie que les variables existent
    res.send('Il manque un argument')
  
  }
  const newGraph = new graphLine({ // création d'un graph
  month : month,
  income : income,
  outcome : outcome
  })
  await newGraph.save() // sauvegarde
  res.json(newGraph)    //res == return
  
  });

//quand on fait new on cree une instance
//save sur l'instance du modele
//create directement sur le modele

//mise a jour à faire (on en modifie un seul)
router.put('/:month', async (req, res) => {
  const income = req.body.income
  const outcome = req.body.outcome

  if (!outcome || ! income) { 
    res.send('Il manque un argument')
  return
  }

  graphLine.findOneAndUpdate({ month : req.params.month}, { income : income, outcome : outcome}, (err) => {
    if(err){
      res.send(err);
    }
    res.send("ok");
  });
});

//suppression
router.delete('/:month', async (req, res) => {
  const income = req.body.income
  const outcome = req.body.outcome

  if (!outcome || ! income) { 
    res.send('Il manque un argument')
  return
  }

  graphLine.deleteOne({ month : req.params.month}, (err) => {
    if(err){
      res.send(err);
    }
    res.send("ok");
  });
});

module.exports = router;