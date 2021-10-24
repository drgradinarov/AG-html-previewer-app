using System;
using System.Collections.Generic;
using System.Text;

namespace AGDataAccessLibrary.Models
{
   public class AGHtmlElement
    {
        public int Id { get; set; }
        public string Html { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastEditDate { get; set; }
    }
}
