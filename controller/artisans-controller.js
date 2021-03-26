const artisanModel = require("../models/artisans-model");

exports.findUserAndCredits = (req, res) => {
  artisanModel.find({}, (err, result) => {
    res.send(result);
  });
};

exports.getCertainUserCredits = (req, res) => {
  artisanModel.find({ certainUserID: req.body._id }, (err, response) => {
    res.send(response);
  });
};

exports.addCredits = (req, res) => {
  artisanModel.find(
    { certainUserID: req.body.certainUserID },
    (err, result) => {
      if (result.length == 0) {
        var newCreditsAdd = new artisanModel(req.body);
        newCreditsAdd.save();
        res.send(newCreditsAdd);
      } else {
        artisanModel.findByIdAndUpdate(
          { _id: result[0]._id },
          {
            certainUserCredits:
              Number(req.body.certainUserCredits) +
              Number(result[0].certainUserCredits),
          },
          (err, output) => {
            res.send(output);
          }
        );
      }
    }
  );
};

exports.deductCredits = (req, res) => {
  artisanModel.find({ certainUserID: req.body.certainUserID }, (err, result) => {
    artisanModel.findByIdAndUpdate(
      { _id: result[0]._id },
      {
        certainUserCredits:
          Number(result[0].certainUserCredits) -
          Number(req.body.certainUserCredits),
      },
      (err, response) => {
        res.send(response);
      }
    );
  });
};

exports.editCertainUserSituation = (req, res) => {
  artisanModel.find(
    { certainUserID: req.body.certainUserID },
    (err, result) => {
      if (result.length == 0) {
        res.send(false);
      } else {
        artisanModel.updateOne(
          { certainUserID: req.body.certainUserID },
          { userSituation: req.body.userSituation },
          (err, result) => {
            res.send(result);
          }
        );
      }
    }
  );
};
