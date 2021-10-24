using AGDataAccessLibrary.DataAccess;
using AGDataAccessLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace AGBLHtmlPreviewer
{
   public class BLHtmlPreviewer
    {
        private AGHtmlElementContext _db;
        public BLHtmlPreviewer(AGHtmlElementContext aGHtmlElementContext)
        {          
            this._db = aGHtmlElementContext;
        }

        /// <summary>
        /// Searches if the DB contains a full match of the provided testSample
        /// </summary>
        /// <param name="testSample"></param>       
        /// <returns>A string message</returns>
        public string SearchOriginal(string testSample)
        {
            string message = "";
            bool isOriginal = false;
           
            List<string> dbResponse = this._db.AGHtmlElementContexts.Select(x => x.Html.Replace("\n", String.Empty)).ToList();
            testSample = testSample.Replace("\n", String.Empty);
            
            for (int i = 0; i < dbResponse.Count; i++)
            {
                if (String.Equals(testSample, dbResponse[i]))
                {
                    isOriginal = true;
                    break;
                }
            }

            if (isOriginal)
            {
                message = "This is an original html code.";
            }
            else
            {
                message = "This is not an original html code.";
            }
            return message;
        }

       /// <summary>
       /// Performs a SQL SELECT operation based on id
       /// </summary>
       /// <param name="id"></param>
       /// <returns>Html as string</returns>
        public string Get(int id)
        {
            return this._db.AGHtmlElementContexts.First(f => f.Id == id).Html;
        }

        /// <summary>
        /// Performs a SQL INSERT operation based on AGHtmlElement
        /// </summary>
        /// <param name="AGHtmlElement"></param>
        /// <returns>Id of the saved object in the DB</returns>
        public int SaveHtmlData(AGHtmlElement AGHtmlElement)
        {
            AGHtmlElement.Html = AGHtmlElement.Html.Replace("\n", String.Empty);

            this._db.AGHtmlElementContexts.Add(AGHtmlElement);
            this._db.SaveChanges();

            return this._db.AGHtmlElementContexts.OrderByDescending(i => i.Id).FirstOrDefault().Id;
        }

    }
}
