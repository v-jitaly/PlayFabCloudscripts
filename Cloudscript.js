// Should be invoked from a task that runs over certain segment
handlers.Rule_TestProfile = function (args, context)
{
    var profile = context.playerProfile;
    var totalAmt = profile.TotalValueToDateInUSD/100;
//changes yo
    log.debug(totalAmt);

    for(var i=0; i<profile.ValuesToDate.length; i++)
    {
        var vtd = profile.ValuesToDate[i];
        var s= "value: "+vtd.TotalValueAsDecimal;
        //log.debug(s);
    }

    log.debug(profile.ValuesToDate)

}
// Utility method to generate random number
let getRandomInRange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

handlers.GetPlayerTitleID = function (args, context)
{
  var allPlayersSegmentResult = server.GetPlayersInSegment({
                                                             "SegmentId" : ALL_PLAYERS_SEGMENT_ID,
                                                             "MaxBatchSize" : 2000,
                                                             "SecondsToLive" : 30
                                                           });

  sdfsd
  var request = { PlayFabId: currentPlayerId };

  var userAccountResult = server.GetUserAccountInfo(request);

  //log.info(userAccountResult);

  var jsUserInfo = JSON.parse(userAccountResult);
  var userInfo = userAccountResult.UserAccountInfo;
  log.info(userInfo);
  var titleInfo = userInfo.UserTitleInfo;
  log.info(titleInfo);
  var entityKey = titleInfo.TitlePlayerAccount;
  log.info(entityKey.Id);
}

handlers.DoPurchase = function (args, context)
{
    var request = {
        "ItemId": "1",
        "VirtualCurrency": "TC",
        "Price": 500};

    var headers = {
        "X-Authorization": "23E1B29644693DB4--6BBC39B666E38FE3-5C75-8D7570C8A7B4E73-3ib5hU0j4zx6VvLasHA/oMzQjAHW7uUyYrb2YYd4M5U=",
        "X-PlayFabSDK": "PostmanCollection-0.85.190717"
    };

    var url = "https://5C75.playfabapi.com/Client/PurchaseItem?sdk=PostmanCollection-0.85.190717";
    var content = JSON.stringify(request);
    var httpMethod = "post";
    var contentType = "application/json";

    // The pre-defined http object makes synchronous HTTP requests
     http.request(url, httpMethod, content, contentType, headers);
     http.request(url, httpMethod, content, contentType, headers);
     http.request(url, httpMethod, content, contentType, headers);
     http.request(url, httpMethod, content, contentType, headers);
    var response4 = http.request(url, httpMethod, content, contentType, headers);

    //log.info(response);
    //log.info(response1);
    //log.info(response2);
    //log.info(response3);
    log.info(response4);
}
