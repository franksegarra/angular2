namespace webServices.Entities.Email
{
    public interface IEmailMessage
    {
        string cc { get; set; }
        string from { get; set; }
        string subject { get; set; }
        string text { get; set; }
        string to { get; set; }
    }
}