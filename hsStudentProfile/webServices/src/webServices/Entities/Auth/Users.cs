using System;

namespace webServices.Entities
{
    public class Users : IEntityBase
    {
        public Users()
        {
        }

        public int? id { get; set; }
        public string profilename { get; set; }
        public string primaryemail { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string phone { get; set; }
        public string streetaddress1 { get; set; }
        public string streetaddress2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public short? displayaddrandphone { get; set; }
        public int roleid { get; set; }
        public string confirmationtoken { get; set; }
        public bool? isconfirmed { get; set; }
        public DateTime? lastpasswordfailuredate { get; set; }
        public int? passwordfailuressincelastsuccess { get; set; }
        public string password { get; set; }
        public DateTime? passwordchangeddate { get; set; }
        public string passwordsalt { get; set; }
        public string passwordverificationtoken { get; set; }
        public DateTime? passwordverificationtokenexpirationdate { get; set; }
        public DateTime? created { get; set; }
    }
}
