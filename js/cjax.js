/*----------------------------------------------------------------------------------------*/
/* Document   : cjax.js                                                                   */
/* Created on : August 13, 2015                                                           */
/* Author     : Brandon E. Hofmann                                                        */
/*                                                                                        */
/* Purpose:  Define Common JavaScript functions for processing an AJAX or SJAX Request.   */
/*           This page should be included by other pages that make AJAX or SJAX Requests. */
/*----------------------------------------------------------------------------------------*/

// Initialize Global Variable
var req = false

// Creates Browser-specific XMLHttpRequest Object or returns false if unsuccessful
function createXMLHttpRequest()
{
   // Choose Object type based on Browser version
   if ( window.XMLHttpRequest )
   {
      // IE 7, Mozilla, Safari, Firefox, Opera, most Browsers:
      req = new XMLHttpRequest()
   }
   // Older IE Browsers
   else if ( window.ActiveXObject )
   {
      // Create type Msxml2.XMLHTTP, if possible:
      try
      {
         req = new ActiveXObject( "Msxm12.XMLHTTP" )
      }
      // Create the older type instead:
      catch ( e )
      {
         try
         {
            req = new ActiveXObject( "Microsoft.XMLHTTP" )
         }
         catch ( e )
         {
            req = false
         }
      }
   }
}

// Create and Send Asynchronous/Synchronous Get Request
function createGetRequest( url, query, reqMode )
{
   // Prevent Browser caching page
   var pageRequested = new Date().getTime()

   // reqMode = Request Mode (true = Asynchronous, false = Synchronous)
   req.open( "GET", url + "?" + query + "&pageRequested=" + pageRequested, reqMode )
   req.send( null )
}

// Create and Send Asynchronous/Synchronous Post Request
function createPostRequest( url, query, reqMode )
{
   // reqMode = Request Mode (true = Asynchronous, false = Synchronous)
   req.open( "POST", url, reqMode )
   req.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" )
   req.send( query )
}

// Call function to process JSON or XML
function forwardResponse( callFunction, output )
{
   eval( callFunction + "( output )" )
}