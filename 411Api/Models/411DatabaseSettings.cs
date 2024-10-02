namespace _411Api.Models
{
    public class _411DatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string VapesCollectionName { get; set; } = null!;

        public string UserCollectionName { get; set; } = null!;

        public string VapeMoneyStatisticCollectionName { get; set; } = null!;

    }
}
