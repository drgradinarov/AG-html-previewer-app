using AGBLHtmlPreviewer;
using AGDataAccessLibrary.DataAccess;
using AGDataAccessLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace AGHtmlPreviewerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : Controller
    {
        private readonly ILogger<ValuesController> _logger;
        private BLHtmlPreviewer _bLHtmlPreviewer;
        private AGHtmlElementContext _db;
        public ValuesController(ILogger<ValuesController> logger, AGHtmlElementContext aGHtmlElementContext)
        {
            this._logger = logger;
            this._db = aGHtmlElementContext;
            this._bLHtmlPreviewer = new BLHtmlPreviewer(this._db);
        }
                
        [HttpPost("[action]")]
        public string SearchOriginal(string testSample)
        {
            return _bLHtmlPreviewer.SearchOriginal(testSample);            
        }

        [HttpGet("[action]")]
        public string Get(int id)
        {
            return _bLHtmlPreviewer.Get(id);
        }

        [HttpPut("[action]")]
        public int SaveHtmlData(AGHtmlElement AGHtmlElement)
        {
            return _bLHtmlPreviewer.SaveHtmlData(AGHtmlElement);
        }
    }
}
