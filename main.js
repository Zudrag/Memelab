var siteMining = require('site.mining');
var siteColony = require('site.colony');


module.exports.loop = function () {

    // Clear dead creeps from Memory
    for (var n in Memory.creeps) {
        if (!Game.creeps[n]) {
            delete Memory.creeps[n];
        }
    }


    /* TO DO:
    */     


    // siteColony.run(rmColony, popRepairer, popWorker, popSoldier)
    // siteMining.run(rmDeliver, rmHarvest, popBurrower, popCarrier, popMiner, popReserver, popMineralist)

    /* Colonies and in-colony mining operations */
    siteMining.run('W18S43', 'W18S43', 1, 2, 0, 0, 0);    // W18S43 colony #1 mining
    siteMining.run('W16S43', 'W16S43', 1, 1, 0, 0, 1);    // W16S43 colony #2 mining
    siteMining.run('W19S42', 'W19S42', 2, 2, 0, 0, 0);    // W19S42 colony #3 mining
    siteColony.run('W18S43', 1, 2, 0);     // W16S43 colony #1
    siteColony.run('W16S43', 1, 2, 0);     // W16S43 colony #2
    siteColony.run('W19S42', 2, 6, 0);     // W19S42 colony #3

    /* All other mining operations */
    siteMining.run('W18S43', 'W17S43', 1, 2, 0, 1, 0);    // W17S43 mining operation (from Colony #1, W18S43)
    siteMining.run('W18S43', 'W19S43', 1, 1, 0, 1, 0);    // W19S43 mining operation (from Colony #1, W18S43)
    siteMining.run('W18S43', 'W17S42', 1, 2, 0, 1, 0);    // W17S42 mining operation (from Colony #1, W18S43)
    
    siteMining.run('W16S43', 'W16S42', 1, 3, 0, 1, 0);    // W16S42 mining operation (from Colony #2, W16S43)
    siteMining.run('W16S43', 'W16S41', 1, 2, 0, 1, 0);    // W16S41 mining operation (from Colony #2, W16S43)
    
}
