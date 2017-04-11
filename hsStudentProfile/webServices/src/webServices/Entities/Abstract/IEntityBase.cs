using System;

namespace webServices.Entities
{
    public interface IEntityBase
   {
        int id { get; set; }
        DateTime? created { get; set; }
    }
}
