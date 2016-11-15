/*--------------------------------------------------------------------------------------*/
/* Document   : mobile.js                                                               */
/* Created on : August 18, 2016                                                         */
/* Author     : Brandon E. Hofmann                                                      */
/*                                                                                      */
/* Purpose:  Define JavaScript Mobile Application Functions.                            */
/*--------------------------------------------------------------------------------------*/

// index.html
function getMobileConfig()
{
   var url = "http://www.flcbranson.org/xml/mobileConfig.xml"
   var queryString = "contentType=TEXT/XML"
   var requestType = "GET"
   var responseType = "XML"

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "setMobileConfig" )

   // Get Live Broadcast Status
   getLiveBroadcastStatus()
}

function setMobileConfig( output )
{
   var entrySize = 0, entryElement = null, androidSiteID, appleSiteID, websiteURL, sowingURL, mediaURL, wowzaServerURL, cdnLiveURL, vodFriRebroadcastURL
   var vodSunRebroadcastURL, mlmMobileLogRebroadcastRequestURL, mlmPHPClassManagerURL, mlmLiveBroadcastManagerClass, mlmLiveBroadcastManagerClassFunction
   var mlmMobileLogLiveBroadcastRequestURL, mlmMediaChannelContentInfoURL, mlmMediaChannelContentInfoChannelID, mlmMediaLogStreamRequestURL
   var mlmMediaStreamRequestAppID, flcbBibleReadingDatesURL, flcbBibleReadingVersesURL, flcbEventsURL, cssDivLayer

   // Number of Mobile Configuration Entries
   entrySize = output.getElementsByTagName( "config" ).length

   // Retrieve Mobile Configuration
   if ( entrySize > 0 )
   {
      entryElement = output.getElementsByTagName( "config" )[0]
      androidSiteID = entryElement.getElementsByTagName( "androidSiteID" )[0].firstChild.data
      appleSiteID = entryElement.getElementsByTagName( "appleSiteID" )[0].firstChild.data
      websiteURL = entryElement.getElementsByTagName( "websiteURL" )[0].firstChild.data
      sowingURL = entryElement.getElementsByTagName( "sowingURL" )[0].firstChild.data
      mediaURL = entryElement.getElementsByTagName( "mediaURL" )[0].firstChild.data
      wowzaServerURL = entryElement.getElementsByTagName( "wowzaServerURL" )[0].firstChild.data
      cdnLiveURL = entryElement.getElementsByTagName( "cdnLiveURL" )[0].firstChild.data
      vodFriRebroadcastURL = entryElement.getElementsByTagName( "vodFriRebroadcastURL" )[0].firstChild.data
      vodSunRebroadcastURL = entryElement.getElementsByTagName( "vodSunRebroadcastURL" )[0].firstChild.data
      mlmMobileLogRebroadcastRequestURL = entryElement.getElementsByTagName( "mlmMobileLogRebroadcastRequestURL" )[0].firstChild.data
      mlmPHPClassManagerURL = entryElement.getElementsByTagName( "mlmPHPClassManagerURL" )[0].firstChild.data
      mlmLiveBroadcastManagerClass = entryElement.getElementsByTagName( "mlmLiveBroadcastManagerClass" )[0].firstChild.data
      mlmLiveBroadcastManagerClassFunction = entryElement.getElementsByTagName( "mlmLiveBroadcastManagerClassFunction" )[0].firstChild.data
      mlmMobileLogLiveBroadcastRequestURL = entryElement.getElementsByTagName( "mlmMobileLogLiveBroadcastRequestURL" )[0].firstChild.data
      mlmMediaChannelContentInfoURL = entryElement.getElementsByTagName( "mlmMediaChannelContentInfoURL" )[0].firstChild.data
      mlmMediaChannelContentInfoChannelID = entryElement.getElementsByTagName( "mlmMediaChannelContentInfoChannelID" )[0].firstChild.data
      mlmMediaLogStreamRequestURL = entryElement.getElementsByTagName( "mlmMediaLogStreamRequestURL" )[0].firstChild.data
      mlmMediaStreamRequestAppID = entryElement.getElementsByTagName( "mlmMediaStreamRequestAppID" )[0].firstChild.data
      flcbBibleReadingDatesURL = entryElement.getElementsByTagName( "flcbBibleReadingDatesURL" )[0].firstChild.data
      flcbBibleReadingVersesURL = entryElement.getElementsByTagName( "flcbBibleReadingVersesURL" )[0].firstChild.data
      flcbEventsURL = entryElement.getElementsByTagName( "flcbEventsURL" )[0].firstChild.data

      // Set Session Mobile Configuration
      sessionStorage.setItem( 'androidSiteID', androidSiteID )
      sessionStorage.setItem( 'appleSiteID', appleSiteID )
      sessionStorage.setItem( 'websiteURL', websiteURL )
      sessionStorage.setItem( 'sowingURL', sowingURL )
      sessionStorage.setItem( 'mediaURL', mediaURL )
      sessionStorage.setItem( 'wowzaServerURL', wowzaServerURL )
      sessionStorage.setItem( 'cdnLiveURL', cdnLiveURL )
      sessionStorage.setItem( 'vodFriRebroadcastURL', vodFriRebroadcastURL )
      sessionStorage.setItem( 'vodSunRebroadcastURL', vodSunRebroadcastURL )
      sessionStorage.setItem( 'mlmMobileLogRebroadcastRequestURL', mlmMobileLogRebroadcastRequestURL )
      sessionStorage.setItem( 'mlmPHPClassManagerURL', mlmPHPClassManagerURL )
      sessionStorage.setItem( 'mlmLiveBroadcastManagerClass', mlmLiveBroadcastManagerClass )
      sessionStorage.setItem( 'mlmLiveBroadcastManagerClassFunction', mlmLiveBroadcastManagerClassFunction )
      sessionStorage.setItem( 'mlmMobileLogLiveBroadcastRequestURL', mlmMobileLogLiveBroadcastRequestURL )
      sessionStorage.setItem( 'mlmMediaChannelContentInfoURL', mlmMediaChannelContentInfoURL )
      sessionStorage.setItem( 'mlmMediaChannelContentInfoChannelID', mlmMediaChannelContentInfoChannelID )
      sessionStorage.setItem( 'mlmMediaLogStreamRequestURL', mlmMediaLogStreamRequestURL )
      sessionStorage.setItem( 'mlmMediaStreamRequestAppID', mlmMediaStreamRequestAppID )
      sessionStorage.setItem( 'flcbBibleReadingDatesURL', flcbBibleReadingDatesURL )
      sessionStorage.setItem( 'flcbBibleReadingVersesURL', flcbBibleReadingVersesURL )
      sessionStorage.setItem( 'flcbEventsURL', flcbEventsURL )
   }
   else
   {
      cssDivLayer = '<div align="center">'
      cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
      cssDivLayer += '<tbody><tr>'
      cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">Mobile Configuration NOT FOUND</td>'
      cssDivLayer += '<td height="199">'
      cssDivLayer += '<div align="center">'
      cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
      cssDivLayer += '<tbody><tr>'
      cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
      cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="img/mlm/error.jpg"></div></td></tr>'
      cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'

      document.getElementById( "errorMessage" ).innerHTML = cssDivLayer
   }
}

function getLiveBroadcastStatus()
{
   var url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'mlmPHPClassManagerURL' )
   var requestType = "POST"
   var responseType = "XML"

   // Get Live Broadcast Status
   var queryString = "contentType=TEXT/XML" +
                     "&classFileName=" + sessionStorage.getItem( 'mlmLiveBroadcastManagerClass' ) +
                     "&classFunctionName=" + sessionStorage.getItem( 'mlmLiveBroadcastManagerClassFunction' )

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "checkLiveBroadcastStatus" )
}

function checkLiveBroadcastStatus( output )
{
   var entrySize = 0, entryElement = null, broadcastStatus, displayColor
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage, cssDivLayer

   // Number of XML Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      // Check Live Broadcast Status
      entryElement = output.getElementsByTagName( "entry" )[0]
      broadcastStatus = entryElement.getElementsByTagName( "broadcastStatus" )[0].firstChild.data

      if ( broadcastStatus == "FLCB ON-AIR" )
      {
         logBroadcastRequest( "Branson" )
      }
      else if ( broadcastStatus == "FLCS ON-AIR" )
      {
         logBroadcastRequest( "Sarasota" )
      }
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "errorMessage" ).innerHTML = cssDivLayer
      }
   }
}

function logBroadcastRequest( service )
{
   var url, queryString
   var requestType = "GET"
   var responseType = "XML"

   if ( ( service == "Branson" ) || ( service == "Sarasota" ) )
   {
      url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'mlmMobileLogLiveBroadcastRequestURL' )
   }
   else if ( ( service == "Friday" ) || ( service == "Sunday" ) )
   {
      url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'mlmMobileLogRebroadcastRequestURL' )
   }

   // Log Broadcast Request
   queryString = "contentType=TEXT/XML" +
                 "&site=" + sessionStorage.getItem( 'appleSiteID' ) +
                 "&service=" + service

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "streamBroadcastRequest" )
}

function streamBroadcastRequest( output )
{
   var entrySize = 0, entryElement = null, service, logResult
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage, cssDivLayer = ""

   // Number of Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      entryElement = output.getElementsByTagName( "entry" )[0]
      service = entryElement.getElementsByTagName( "service" )[0].firstChild.data
      logResult = entryElement.getElementsByTagName( "log" )[0].firstChild.data

      // Verify Request was logged
      logResult = entryElement.getElementsByTagName( "log" )[0].firstChild.data

      if ( logResult == "Request Logged" )
      {
         // Stream Broadcast Request
         playMediaStream( service )
      }
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "errorMessage" ).innerHTML = cssDivLayer
      }
   }
}

function playMediaStream( media )
{
   var url = sessionStorage.getItem( 'wowzaServerURL' )
   var imgPoster = "img/Posters/Flcb.jpg"

   if ( media == "Branson" )
   {
      url = sessionStorage.getItem( 'cdnLiveURL' )
   }
   else if ( media == "Sarasota" )
   {
      url = sessionStorage.getItem( 'cdnLiveURL' )
      imgPoster = "img/Posters/Flcs.jpg"
   }
   else if ( media == "Friday" )
   {
      url += sessionStorage.getItem( 'vodFriRebroadcastURL' )
   }
   else if ( media == "Sunday" )
   {
      url += sessionStorage.getItem( 'vodSunRebroadcastURL' )
   }
   else
   {
      url = media
      imgPoster = "../img/Posters/Flcb.jpg"
   }

   $( 'body' ).append( '<div class="lightbox" onclick="closeMediaStream( \'' + media + '\' )"><a class="close link" href="javascript:void(0)" onclick="closeMediaStream( \'' + media + '\' )">x</a></div>' )
   $( '.lightbox' ).append( '<div class="lightboxcontent video"></div>' );
   $( '.lightboxcontent' ).append( '<video src="' + url + '" poster="' + imgPoster + '" autoplay controls x-webkit-airplay="allow" loop></video>' );
}

function closeMediaStream( media )
{
   $( '.lightbox video' )[0].pause()
   $( '.lightbox' ).remove()

   if ( ( media == "Friday" ) || ( media == "Sunday" ) )
   {
      //window.open( 'index.html', '_self' )
      cordova.InAppBrowser.open( 'index.html', '_self' )
   }
}

function openURL( url )
{
   //window.open( encodeURI( url ), '_system' )
   cordova.InAppBrowser.open( encodeURI( url ), '_system' )
}

// bibleReading.html
function getBibleReading()
{
   var url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'flcbBibleReadingDatesURL' )
   var queryString, returnValues = null
   var requestType = "POST"
   var responseType = "XML"

   // Get Current Day Bible Reading Chapter
   queryString = "contentType=TEXT/XML" +
                 "&site=" + sessionStorage.getItem( 'appleSiteID' )

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "displayCurrentChapter" )

   // Get Bible Reading Dates
   returnValues = getBibleReadingDates()

   queryString = "contentType=TEXT/XML" +
                 "&site=" + sessionStorage.getItem( 'appleSiteID' ) +
                 "&requestDay=" + returnValues[0] +
                 "&beginDate=" + returnValues[1] +
                 "&endDate=" + returnValues[2]

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "displayBibleReadingDates" )
}

function getBibleReadingDates()
{
   var requestDay
   var currentDate = new Date()
   var currentDateIndex = currentDate.getDay()
   var beginDate = new Date(), endDate = new Date()
   var beginDateFormat = "", endDateFormat = ""

   if ( currentDateIndex == 0 )
   {
      // Sunday
      requestDay = "Sunday"
      beginDate.setDate( currentDate.getDate() + 1 )
      endDate.setDate( currentDate.getDate() + 5 )
   }
   else if ( currentDateIndex == 1 )
   {
      // Monday
      requestDay = "Monday"
      beginDate.setDate( currentDate.getDate() - 0 )
      endDate.setDate( currentDate.getDate() + 4 )
   }
   else if ( currentDateIndex == 2 )
   {
      // Tuesday
      requestDay = "Tuesday"
      beginDate.setDate( currentDate.getDate() - 1 )
      endDate.setDate( currentDate.getDate() + 3 )
   }
   else if ( currentDateIndex == 3 )
   {
      // Wednesday
      requestDay = "Wednesday"
      beginDate.setDate( currentDate.getDate() - 2 )
      endDate.setDate( currentDate.getDate() + 2 )
   }
   else if ( currentDateIndex == 4 )
   {
      // Thursday
      requestDay = "Thursday"
      beginDate.setDate( currentDate.getDate() - 3 )
      endDate.setDate( currentDate.getDate() + 1 )
   }
   else if ( currentDateIndex == 5 )
   {
      // Friday
      requestDay = "Friday"
      beginDate.setDate( currentDate.getDate() - 4 )
      endDate.setDate( currentDate.getDate() + 0 )
   }
   else if ( currentDateIndex == 6 )
   {
      // Saturday
      requestDay = "Saturday"
      beginDate.setDate( currentDate.getDate() - 5 )
      endDate.setDate( currentDate.getDate() - 1 )
   }

   beginDateFormat = beginDate.getFullYear() + "-" + ( beginDate.getMonth() + 1 ) + "-" + beginDate.getDate()
   endDateFormat = endDate.getFullYear() + "-" + ( endDate.getMonth() + 1 ) + "-" + endDate.getDate()

   return [ requestDay, beginDateFormat, endDateFormat ]
}

function getBibleReadingVerses( book, chapter )
{
   var url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'flcbBibleReadingVersesURL' )
   var requestType = "POST"
   var responseType = "XML"
   var queryString = "contentType=TEXT/XML" +
                     "&site=" + sessionStorage.getItem( 'appleSiteID' ) +
                     "&book=" + book +
                     "&chapter=" + chapter

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "displayBibleReadingVerses" )
}

function displayCurrentChapter( output )
{
   var entrySize = 0, entryElement = null, book, chapter
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage, cssDivLayer = ""

   // Number of Bible Reading Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      cssDivLayer = '<p><strong>Today\'s chapter is '

      // Generate HTML
      for ( var i = 0; i < entrySize; i++ )
      {
         entryElement = output.getElementsByTagName( "entry" )[i]
         book = entryElement.getElementsByTagName( "book" )[0].firstChild.data
         chapter = entryElement.getElementsByTagName( "chapter" )[0].firstChild.data

         cssDivLayer += '<a onclick="getBibleReadingVerses( \'' + book + '\', \'' + chapter + '\' ); return false;">' + book + ' ' + chapter + '.</a></strong></p>'
      }

      document.getElementById( "currentChapter" ).innerHTML = cssDivLayer
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="../img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "currentChapter" ).innerHTML = cssDivLayer
      }
   }
}

function displayBibleReadingDates( output )
{
   var entrySize = 0, entryElement = null, scheduleTitle, dateDisplay, today, book, chapter
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage, cssDivLayer = ""

   // Number of Bible Reading Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      // Get Schedule Title for Current or Previous Week
      scheduleTitle = output.getElementsByTagName( "bibleEntries" )[0].getAttribute( "scheduleTitle" )
      cssDivLayer = '<h2>' + scheduleTitle + '</h2>'

      // Generate HTML
      for ( var i = 0; i < entrySize; i++ )
      {
         entryElement = output.getElementsByTagName( "entry" )[i]
         dateDisplay = entryElement.getElementsByTagName( "date" )[0].firstChild.data
         today = entryElement.getElementsByTagName( "today" )[0].firstChild.data
         book = entryElement.getElementsByTagName( "book" )[0].firstChild.data
         chapter = entryElement.getElementsByTagName( "chapter" )[0].firstChild.data

         if ( today == "true" )
         {
            cssDivLayer += '<dl class="today">'
         }
         else
         {
            cssDivLayer += '<dl>'
         }

         cssDivLayer += '<dt>' + dateDisplay + '</dt>'
         cssDivLayer += '<dd>'

         if ( today == "true" )
         {
            cssDivLayer += '<a class="today" '
         }
         else
         {
            cssDivLayer += '<a '
         }

         cssDivLayer += 'onclick="getBibleReadingVerses( \'' + book + '\', \'' + chapter + '\' ); return false;">' + book + ' ' + chapter
         cssDivLayer += '</a></dd></dl>'
      }

      document.getElementById( "schedule" ).innerHTML = cssDivLayer
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="../img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "schedule" ).innerHTML = cssDivLayer
      }
   }
}

function displayBibleReadingVerses( output )
{
   var entrySize = 0, entryElement = null, bookReference, verseNumber, verseContent
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage, cssDivLayer = ""

   // Number of Bible Verse Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      // Get Book Reference
      bookReference = output.getElementsByTagName( "verseEntries" )[0].getAttribute( "bookReference" )
      cssDivLayer = '<h2>' + bookReference + '</h2>'
      cssDivLayer += '<table class="verses">'

      // Generate HTML
      for ( var i = 0; i < entrySize; i++ )
      {
         entryElement = output.getElementsByTagName( "entry" )[i]
         verseNumber = entryElement.getElementsByTagName( "verseNumber" )[0].firstChild.data
         verseContent = entryElement.getElementsByTagName( "verseContent" )[0].firstChild.data

         cssDivLayer += '<tr><td class="verseNumber">' + verseNumber + '</td><td>' + verseContent + '</td></tr>'
      }

      cssDivLayer += '</table>'
      cssDivLayer += '<br />'

      document.getElementById( "todayschapter" ).innerHTML = cssDivLayer
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="../img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "todayschapter" ).innerHTML = cssDivLayer
      }
   }
}

// events.html
function getEventList()
{
   var url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'flcbEventsURL' )
   var queryString = "contentType=TEXT/XML"
   var requestType = "GET"
   var responseType = "XML"

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "displayEventInfo" )

   //changeLinkBehavior()
}

function displayEventInfo( output )
{
   var entrySize = 0, entryElement = null, titleNode, title, speakerNode, speaker, beginDateNode, beginDate, endDateNode, endDate, websiteNode, website, venueNode, venue
   var addressNode, address, locationNode, location, locationArray, locationCity, locationState, zipCodeNode, zipCode, phoneNode, phone, notesNode, notes, cssDivLayer = ""
   var extraDate1Node, extraDate2Node, extraDate3Node, extraDate4Node
   var today = moment().format( 'YYYYMMDD' )

   // Number of Channel Entries
   entrySize = output.getElementsByTagName( "item" ).length

   if ( entrySize > 0 )
   {
      // Generate HTML
      for ( var i = entrySize - 1; i >= 0; i-- )
      {
         entryElement = output.getElementsByTagName( "item" )[i]

         titleNode = entryElement.getElementsByTagName( "title" )

         if ( titleNode.length > 0 )
         {
            title = entryElement.getElementsByTagName( "title" )[0].firstChild.data
         }
         else
         {
            title = ""
         }

         speakerNode = entryElement.getElementsByTagNameNS( "http://purl.org/dc/elements/1.1/", "creator" )

         if ( speakerNode.length > 0 )
         {
            speaker = entryElement.getElementsByTagNameNS( "http://purl.org/dc/elements/1.1/", "creator" )[0].firstChild.data
         }
         else
         {
            speaker = ""
         }

         beginDateNode = entryElement.getElementsByTagName( "pubDate" )

         if ( beginDateNode.length > 0 )
         {
            beginDate = entryElement.getElementsByTagName( "pubDate" )[0].firstChild.data
         }
         else
         {
            beginDate = ""
         }

         endDateNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "endDate" )

         if ( endDateNode.length > 0 )
         {
            endDate = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "endDate" )[0].firstChild.data
         }
         else
         {
            endDate = ""
         }

         websiteNode = entryElement.getElementsByTagName( "link" )

         if ( websiteNode.length > 0 )
         {
            website = entryElement.getElementsByTagName( "link" )[0].firstChild.data
         }
         else
         {
            website = ""
         }

         venueNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "venue" )

         if ( venueNode.length > 0 )
         {
            venue = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "venue" )[0].firstChild.data
         }
         else
         {
            venue = ""
         }

         addressNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "address" )

         if ( addressNode.length > 0 )
         {
            address = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "address" )[0].firstChild.data
         }
         else
         {
            address = ""
         }

         locationNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "location" )

         if ( locationNode.length > 0 )
         {
            location = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "location" )[0].firstChild.data
         }
         else
         {
            location = ""
         }

         if ( location )
         {
            locationArray = location.split( ',' )
         }

         if ( locationArray.length === 1 )
         {
            locationCity = locationArray[0]
            locationState = ""
         }

         if ( locationArray.length === 2 )
         {
            locationCity = locationArray[0]
            locationState = locationArray[1]
         }

         zipCodeNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "zip" )

         if ( zipCodeNode.length > 0 )
         {
            zipCode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "zip" )[0].firstChild.data
         }
         else
         {
            zipCode = ""
         }

         phoneNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "phone" )

         if ( phoneNode.length > 0 )
         {
            phone = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "phone" )[0].firstChild.data
         }
         else
         {
            phone = ""
         }

         notesNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "notes" )

         if ( notesNode.length > 0 )
         {
            notes = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "notes" )[0].firstChild.data
         }
         else
         {
            notes = ""
         }

         if ( endDate )
         {
            endDate = moment( endDate.substring( 5, 16 ) ).format( 'YYYYMMDD' )
         }
         else
         {
            endDate = moment( beginDate.substring( 5, 16 ) ).format( 'YYYYMMDD' )
         }

         if ( ( endDate ) && ( endDate >= today ) )
         {
            cssDivLayer += '<section id="' + title + '" itemscope itemtype="http://schema.org/Event">'
            cssDivLayer += '<h3 class="title" itemprop="name">' + title + '</h3>'
            cssDivLayer += '<p class="venue">' + venue + '<span class="delimiter"> // </span>' + location + '</p>'
            cssDivLayer += '<dl>'
            cssDivLayer += '<dt>Speaker / Host</dt>'
            cssDivLayer += '<dd class="speaker" itemprop="performer">' + speaker + '</dd>'
            cssDivLayer += '</dl>'
            cssDivLayer += '<div itemprop="location" itemscope itemtype="http://schema.org/Place">'
            cssDivLayer += '<dl>'
            cssDivLayer += '<dt>Address</dt>'
            cssDivLayer += '<dd>'
            cssDivLayer += '<p class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">'
            cssDivLayer += '<span class="street" itemprop="streetAddress">' + address + '</span>'
            cssDivLayer += '<span class="city" itemprop="addressLocality">' + locationCity + '</span>, '
            cssDivLayer += '<span class="state" itemprop="addressRegion">' + locationState + '</span> '
            cssDivLayer += '<span class="zip" itemprop="postalCode">' + zipCode + '</span>'
            cssDivLayer += '</p></dd></dl>'
            cssDivLayer += '<dl>'
            cssDivLayer += '<dt>Phone Number</dt>'
            cssDivLayer += '<dd class="phone" itemprop="telephone">' + phone + '</dd>'
            cssDivLayer += '</dl>'
            cssDivLayer += '<dl>'
            cssDivLayer += '<dt>Website</dt>'
            cssDivLayer += '<dd class="website"><a href="' + website + '" target="_blank" itemprop="url">' + website.substring(7) + '</a></dd>'
            cssDivLayer += '</dl></div>'
            cssDivLayer += '<dl id="' + title + '-schedule" class="schedule">'
            cssDivLayer += '<dt>Schedule</dt>'
            cssDivLayer += '</dl>'
            cssDivLayer += '<dl class="notes">'
            cssDivLayer += '<dt>Event Notes</dt>'
            cssDivLayer += '<dd>' + notes + '</dd>'
            cssDivLayer += '</dl></section>'

            document.getElementById( "eventList" ).innerHTML += cssDivLayer
            cssDivLayer = ""
            var dateArray = new Array()

            if ( beginDateNode.length > 0 )
            {
               dateArray.push( beginDate )
            }

            extraDate1Node = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate1" )

            if ( extraDate1Node.length > 0 )
            {
               dateArray.push( entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate1" )[0].firstChild.data )
            }

            extraDate2Node = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate2" )

            if ( extraDate2Node.length > 0 )
            {
               dateArray.push( entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate2" )[0].firstChild.data )
            }

            extraDate3Node = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate3" )

            if ( extraDate3Node.length > 0 )
            {
               dateArray.push( entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate3" )[0].firstChild.data )
            }

            extraDate4Node = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate4" )

            if ( extraDate4Node.length > 0 )
            {
               dateArray.push( entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "extraDate4" )[0].firstChild.data )
            }

            endDateNode = entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "endDate" )

            if ( endDateNode.length > 0 )
            {
               dateArray.push( entryElement.getElementsByTagNameNS( "http://www.moorelife.org/", "endDate" )[0].firstChild.data )
            }

            for ( var j = 0; j < dateArray.length; j++ )
            {
               var dateValue = "", dateISO8601 = "", dateSplitArray = "", dateTimeZone = "", dateReadable = ""

               dateValue = dateArray[j]

               if ( dateValue )
               {
                  dateISO8601 = moment( dateValue.substring( 5, 25 ) ).toISOString()
                  dateSplitArray = dateValue.split( ' ' )

                  if ( ( dateSplitArray ) && ( dateSplitArray.length === 6 ) )
                  {
                     dateTimeZone = dateSplitArray[5]
                  }

                  dateReadable = moment( dateValue.substring( 5, 25 ) ).format( 'ddd, MMM D @ h:mmA' ) + ' (' + dateTimeZone + ')'
               }

               document.getElementById( title + "-schedule" ).innerHTML += '<dd><time datetime="' + dateISO8601 + '">' + dateReadable + '</time></dd>'
            }
         }
      }
   }
}

function changeLinkBehavior()
{
   $( '#eventList' ).on( 'click', 'a', function( e )
   {
      var elem = $( this );
      var url = elem.attr( 'href' );

      if ( url.indexOf( 'http://' ) !== -1 )
      {
         e.preventDefault();
         cordova.InAppBrowser.open( encodeURI( url ), '_system' );
         return false;
      }
   });
}

// featuredMessages.html
function getChannelContentList()
{
   var url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'mlmMediaChannelContentInfoURL' )
   var requestType = "POST"
   var responseType = "XML"

   // Get Requested Channel Content List
   var queryString = "contentType=TEXT/XML" +
                     "&site=" + sessionStorage.getItem( 'appleSiteID' ) +
                     "&channelID=" + sessionStorage.getItem( 'mlmMediaChannelContentInfoChannelID' ) +
                     "&recentChannelCount=0" +
                     "&locationID=0"

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "displayChannelContentInfo" )
}

function displayChannelContentInfo( output )
{
   var entrySize = 0, entryElement = null, broadcastDateNode, broadcastDate, collectionIDNode, collectionID, collectionNameNode, collectionName, mediaID
   var contentPart, authorName, locationNameNode, locationName, mp3PathNameNode, mp3PathName, mp4SDPathNameNode, mp4SDPathName, mp4HDPathNameNode, mp4HDPathName
   var pdfPathNameNode, pdfPathName, eBookPathNameNode, eBookPathName, cssDivLayer = ""
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage

   // Number of Channel Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      // Generate HTML
      for ( var i = 0; i < entrySize; i++ )
      {
         entryElement = output.getElementsByTagName( "entry" )[i]

         broadcastDateNode = entryElement.getElementsByTagName( "broadcastDate" )[0]

         if ( broadcastDateNode.hasChildNodes() )
         {
            broadcastDate = entryElement.getElementsByTagName( "broadcastDate" )[0].firstChild.data
         }
         else
         {
            broadcastDate = ""
         }

         collectionIDNode = entryElement.getElementsByTagName( "collectionID" )[0]

         if ( collectionIDNode.hasChildNodes() )
         {
            collectionID = entryElement.getElementsByTagName( "collectionID" )[0].firstChild.data
         }
         else
         {
            collectionID = ""
         }

         collectionNameNode = entryElement.getElementsByTagName( "collectionName" )[0]

         if ( collectionNameNode.hasChildNodes() )
         {
            collectionName = entryElement.getElementsByTagName( "collectionName" )[0].firstChild.data
         }
         else
         {
            collectionName = ""
         }

         mediaID = entryElement.getElementsByTagName( "mediaID" )[0].firstChild.data
         contentPart = entryElement.getElementsByTagName( "contentPart" )[0].firstChild.data
         authorName = entryElement.getElementsByTagName( "authorName" )[0].firstChild.data

         locationNameNode = entryElement.getElementsByTagName( "locationName" )[0]

         if ( locationNameNode.hasChildNodes() )
         {
            locationName = entryElement.getElementsByTagName( "locationName" )[0].firstChild.data
         }
         else
         {
            locationName = ""
         }

         mp3PathNameNode = entryElement.getElementsByTagName( "mp3PathName" )[0]

         if ( mp3PathNameNode.hasChildNodes() )
         {
            mp3PathName = entryElement.getElementsByTagName( "mp3PathName" )[0].firstChild.data
         }
         else
         {
            mp3PathName = ""
         }

         mp4SDPathNameNode = entryElement.getElementsByTagName( "mp4SDPathName" )[0]

         if ( mp4SDPathNameNode.hasChildNodes() )
         {
            mp4SDPathName = entryElement.getElementsByTagName( "mp4SDPathName" )[0].firstChild.data
         }
         else
         {
            mp4SDPathName = ""
         }

         mp4HDPathNameNode = entryElement.getElementsByTagName( "mp4HDPathName" )[0]

         if ( mp4HDPathNameNode.hasChildNodes() )
         {
            mp4HDPathName = entryElement.getElementsByTagName( "mp4HDPathName" )[0].firstChild.data
         }
         else
         {
            mp4HDPathName = ""
         }

         pdfPathNameNode = entryElement.getElementsByTagName( "pdfPathName" )[0]

         if ( pdfPathNameNode.hasChildNodes() )
         {
            pdfPathName = entryElement.getElementsByTagName( "pdfPathName" )[0].firstChild.data
         }
         else
         {
            pdfPathName = ""
         }

         eBookPathNameNode = entryElement.getElementsByTagName( "eBookPathName" )[0]

         if ( eBookPathNameNode.hasChildNodes() )
         {
            eBookPathName = entryElement.getElementsByTagName( "eBookPathName" )[0].firstChild.data
         }
         else
         {
            eBookPathName = ""
         }

         cssDivLayer += '<div class="message"><dl>'
         cssDivLayer += '<dt>Date Preached</dt>'
         cssDivLayer += '<dd class="date"><time>' + broadcastDate + '</time></dd>'
         cssDivLayer += '<dt>Message Title</dt>'

         if ( collectionName.length > 0 )
         {
            cssDivLayer += '<dd class="title series">' + collectionName + ' - ' + contentPart + '</dd>'
         }
         else
         {
            cssDivLayer += '<dd class="title sermon">' + contentPart + '</dd>'
         }

         cssDivLayer += '<dt>Speaker</dt>'
         cssDivLayer += '<dd class="speaker">' + authorName + '</dd>'

         if ( locationName.length > 0 )
         {
            cssDivLayer += '<dt>Location</dt>'
            cssDivLayer += '<dd class="location">' + locationName + '</dd>'
         }

         cssDivLayer += '<dt>Download Links</dt>'
         cssDivLayer += '<dd class="downloadlinks"><ul>'

         if ( mp3PathName.length > 0 )
         {
            cssDivLayer += '<li class="link audio" onclick="logMediaRequest( \'' + collectionID + '\', \'' + escape( collectionName ) + '\', '
            cssDivLayer += mediaID + ', \'' + escape( contentPart ) + '\', 1, \'' + mp3PathName + '\' ); return false;">Listen</li>'
         }

         if ( mp4SDPathName.length > 0 )
         {
            cssDivLayer += '<li class="link video" onclick="logMediaRequest( \'' + collectionID + '\', \'' + escape( collectionName ) + '\', '
            cssDivLayer += mediaID + ', \'' + escape( contentPart ) + '\', 3, \'' + mp4SDPathName + '\' ); return false;">Watch</li>'
         }

         if ( mp4HDPathName.length > 0 )
         {
            cssDivLayer += '<li class="link video" onclick="logMediaRequest( \'' + collectionID + '\', \'' + escape( collectionName ) + '\', '
            cssDivLayer += mediaID + ', \'' + escape( contentPart ) + '\', 4, \'' + mp4HDPathName + '\' ); return false;">Watch</li>'
         }

         cssDivLayer += '</ul></dd></dl></div>'
      }

      document.getElementById( "contentList" ).innerHTML = cssDivLayer
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="../img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "contentList" ).innerHTML = cssDivLayer
      }
   }
}

function logMediaRequest( collectionID, collectionName, mediaID, mediaTitle, mediaTypeID, mediaPathName )
{
   var url = sessionStorage.getItem( 'websiteURL' ) + sessionStorage.getItem( 'mlmMediaLogStreamRequestURL' )
   var requestType = "GET"
   var responseType = "XML"

   // Log Media Request
   var queryString = "contentType=TEXT/XML" +
                     "&site=" + sessionStorage.getItem( 'appleSiteID' ) +
                     "&appID=" + sessionStorage.getItem( 'mlmMediaStreamRequestAppID' ) +
                     "&collectionID=" + collectionID +
                     "&collectionName=" + collectionName +
                     "&mediaID=" + mediaID +
                     "&mediaTitle=" + mediaTitle +
                     "&mediaTypeID=" + mediaTypeID +
                     "&mediaPathName=" + mediaPathName

   processSynchHttpRequest( url, queryString, requestType, responseType, "", "streamMediaRequest" )
}

function streamMediaRequest( output )
{
   var entrySize = 0, entryElement = null, mediaURLNode
   var errorSize = 0, errorElement = null, errorMessageNode, errorMessage, cssDivLayer = ""

   // Number of Collection Entries
   entrySize = output.getElementsByTagName( "entry" ).length

   if ( entrySize > 0 )
   {
      entryElement = output.getElementsByTagName( "entry" )[0]

      mediaURLNode = entryElement.getElementsByTagName( "mediaURL" )[0]

      if ( mediaURLNode.hasChildNodes() )
      {
         // Stream Media Request
         playMediaStream( entryElement.getElementsByTagName( "mediaURL" )[0].firstChild.data )
      }
   }
   else
   {
      // Number of Error Entries
      errorSize = output.getElementsByTagName( "error" ).length

      if ( errorSize > 0 )
      {
         // Generate HTML
         for ( var i = 0; i < errorSize; i++ )
         {
            errorElement = output.getElementsByTagName( "error" )[i]
            errorMessageNode = errorElement.getElementsByTagName( "errorMessage" )[0]

            if ( errorMessageNode.hasChildNodes() )
            {
               errorMessage = errorElement.getElementsByTagName( "errorMessage" )[0].firstChild.data
            }
            else
            {
               errorMessage = ""
            }

            cssDivLayer = '<div align="center">'
            cssDivLayer += '<table width="800" cellspacing="0" cellpadding="0" border="0" height="199" style="background-color: #E3C7A5;">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td class="titleA" align="center" height="199" style="vertical-align: middle;">' + errorMessage + '</td>'
            cssDivLayer += '<td height="199">'
            cssDivLayer += '<div align="center">'
            cssDivLayer += '<table width="200" cellspacing="0" cellpadding="0" border="0">'
            cssDivLayer += '<tbody><tr>'
            cssDivLayer += '<td><div class="titleC" align="center">ERROR</div></td></tr>'
            cssDivLayer += '<tr><td><div align="center"><img width="221" height="166" alt="Encountered Error" src="../img/mlm/error.jpg"></div></td></tr>'
            cssDivLayer += '</tbody></table></div></td></tr></tbody></table></div>'
         }

         document.getElementById( "contentList" ).innerHTML = cssDivLayer
      }
   }
}