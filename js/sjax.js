/*------------------------------------------------------------------------------------*/
/* Document   : sjax.js                                                               */
/* Created on : August 13, 2015                                                       */
/* Author     : Brandon E. Hofmann                                                    */
/*                                                                                    */
/* Purpose:  Define JavaScript functions for processing a Synchronous (SJAX) Request. */
/*           This page should be included by other pages that make SJAX Requests.     */
/*------------------------------------------------------------------------------------*/

function processSynchHttpResponse( resType, pageElement, callFunction )
{
   if ( req.status == 200 )
   {
      var output

      if ( resType == "TEXT" )
      {
         output = req.responseText
         document.getElementById( pageElement ).innerHTML = output
      }
      else if ( resType == "JSON" )
      {
         output = req.responseText
         forwardResponse( callFunction, output )
      }
      else
      {
         output = req.responseXML
         forwardResponse( callFunction, output )
      }
   }
   else
   {
      alert( "There was a problem retrieving the data:\n" + req.statusText )
   }
}

function processSynchHttpRequest( url, query, reqType, resType, pageElement, callFunction )
{
   // url = URL Request calling PHP Script
   // query = URL Query String (Parameter List)
   // reqType = Request Type (POST or GET)
   // resType = Response Type (TEXT, JSON, or XML)
   // pageElement = HTML Division ID Name (<div id="displayContainer">) receiving HTML Output
   // callFunction = Callback Function used to access JSON or XML Response Object

   // Create the XMLHttpRequest Object Instance
   createXMLHttpRequest()

   // Create and Send Request
   if ( reqType == "POST" )
   {
      // Create and Send Post Synchronous Request
      createPostRequest( url, query, false )
   }
   else
   {
      // Create and Send Get Synchronous Request
      createGetRequest( url, query, false )
   }

   // Process HTTP Response
   processSynchHttpResponse( resType, pageElement, callFunction )
}