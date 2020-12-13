var express = require("express");
var router = express.Router();

var graphPie = require("./../models/graphPieModel");


//affichage
router.get("/", function(req, res) {

  graphPie.find((err, graphPie) => {
    if(err)res.send(err)
      res.json(graphPie)
  })
});

//ajout (on en ajoute un)
router.post('/', async (req, res) => {
  
  const event = req.body.event
  const budget = req.body.budget
  if (!event || !budget) { // on vérifie que les variables existent
    res.send('Il manque un argument')
  
  }
  const newGraph = new graphPie({ // création d'un graph
  event : event,
  budget : budget
  })
  await newGraph.save() // sauvegarde
  res.json(newGraph)    //res == return
  
  });

//quand on fait new on cree une instance
//save sur l'instance du modele
//create directement sur le modele

//mise a jour à faire (on en modifie un seul)
router.put('/:event', async (req, res) => {
  const budget = req.body.budget

  if (! budget) { 
    res.send('Il manque un argument')
  return
  }

  graphPie.findOneAndUpdate({ event : req.params.event}, { budget : budget}, (err) => {
    if(err){
      res.send(err);
    }
    res.send("ok");
  });
});


//suppression
router.delete('/:event', async (req, res) => {
  const budget = req.body.budget

  if (!budget) { 
    res.send('Il manque un argument')
  return
  }

  graphPie.deleteOne({ event : req.params.event}, (err) => {
    if(err){
      res.send(err);
    }
    res.send("ok");
  });
});


module.exports = router;