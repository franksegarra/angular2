using System;

namespace webServices.Entities
{
    public class SiteFeedback : IEntityBase
    {
        public SiteFeedback()
        {
        }

        public int id { get; set; }
        public string contactname { get; set; }
        public string contactemail { get; set; }
        public string contactphone { get; set; }
        public string message { get; set; }
        public DateTime? created { get; set; }
        public string ipaddress { get; set; }
    }
}
