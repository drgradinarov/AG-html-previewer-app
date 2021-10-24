using AGDataAccessLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AGDataAccessLibrary.DataAccess
{
    public class AGHtmlElementContext : DbContext
    {
        public AGHtmlElementContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<AGHtmlElement> AGHtmlElementContexts { get; set; }
    }
}
