db.transaction(function (tx) {
    //tx.executeSql('DROP TABLE IF EXISTS positions');
    tx.executeSql('CREATE TABLE IF NOT EXISTS positions (' +
        'id integer primary key,' +
        'latitude text not null,' +
        'longitude text not null,' +
        'timestamp text not null)');
}, null);

function insertData(latitude, longitude, timestamp) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO positions (latitude, longitude, timestamp) VALUES (?,?,?)', [String(latitude), String(longitude), String(timestamp)], success, error);
    })
}

function getPositions() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM positions ORDER BY timestamp DESC', [], displayHistory);
    })
}


function success(tx, res) {
}

function error(tx, err) {
    console.log(err);
}

function displayHistory(tx, res) {
    var rows = res.rows;
    var select = document.getElementById('history_positions');
    for (i = 0; i < rows.length; i++){
        var row = rows[i];
        var o = document.createElement('option');
        o.text = formatDate(row.timestamp * 1000);
        o.value = row.timestamp;
        select.appendChild(o);
    }
}

function deleteHistory(){
    db.transaction(function(tx){
        tx.executeSql('DELETE FROM positions');
        document.getElementById('history_positions').innerHTML = null;
    })
}

function getPosFromTimestamp(ts){
    db.transaction(function(tx){
        tx.executeSql('SELECT * FROM positions WHERE timestamp = ?',[ts],successPosFromTs);
    })
}

function successPosFromTs(tx, res){
    var row = res.rows[0];
    googlemap = generateGmapLink(row.latitude,row.longitude);
}