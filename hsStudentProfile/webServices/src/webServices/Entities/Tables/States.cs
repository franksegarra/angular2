using System;

namespace webServices.Entities
{
    public class States : IEntityBase
    {
        public States()
        {
        }

        public int id { get; set; }
        public string statecode { get; set; }
        public string state { get; set; }
        public string abbreviation { get; set; }
        public string ziplow { get; set; }
        public string ziphigh { get; set; }
        public DateTime? created { get; set; }
    }
}
