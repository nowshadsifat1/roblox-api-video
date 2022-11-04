const roblox = require('noblox.js')
const express = require('express')

var routes = function (app) {
  app.get("/", function(req, res) {
    res.send("ping")
  });

  app.get("/setrank", (req, res) => {
    var userid = req.query.userid;
    var groupid = req.query.groupid;
    var rankid = parseInt(req.query.rankid);

    if (!userid || !groupid || !rankid){
      return res.send({errormessage: "error, you are missing either ; userid,groupid,rankid"})
    }

    roblox.setRank(groupid,userid,rankid);
    return res.send({success: "successful ranking"})
  })

  app.use(function (err, req, res, next) {
    console.error(err.stack)
  })


};

module.exports = routes;
