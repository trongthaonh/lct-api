module.exports = function(app) {
  app.dataSources.systemStorage.connector.getFilename = function(fileInfo, req, res) {
    var origFilename = fileInfo.name;
    // optimisticly get the extension
    var parts = origFilename.split('.');

    // Using a local timestamp + user id in the filename (you might want to change this)
    var newFilename = new Array(30).join().replace(/(.|$)/g, function(){
        return ((Math.random()*36)|0).toString(36);
      });
    return "loichuctet.net_" + newFilename + '.'+ "png";
  };
};
